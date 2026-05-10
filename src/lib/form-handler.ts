type SubmissionPayload = {
  type: 'contact' | 'nulmeting';
  data: Record<string, unknown>;
};

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));

const formatHtml = (data: Record<string, unknown>) => {
  const rows = Object.entries(data)
    .filter(([k]) => k !== 'company' && k !== 'akkoord')
    .map(([k, v]) => {
      const value = Array.isArray(v) ? v.join(', ') : String(v ?? '');
      return `<tr><th align="left" style="padding:6px 12px 6px 0;color:#3A4B4F;font-weight:500">${escape(k)}</th><td style="padding:6px 0">${escape(value)}</td></tr>`;
    })
    .join('');
  return `<table style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse"><tbody>${rows}</tbody></table>`;
};

const formatText = (data: Record<string, unknown>) =>
  Object.entries(data)
    .filter(([k]) => k !== 'company' && k !== 'akkoord')
    .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v ?? ''}`)
    .join('\n');

export async function deliverSubmission({ type, data }: SubmissionPayload) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const to = import.meta.env.CONTACT_TO_EMAIL || 'info@gty.nl';
  const subject = type === 'nulmeting' ? 'Nieuwe nulmeting-aanvraag via gty.nl' : 'Nieuw contactbericht via gty.nl';

  if (!apiKey) {
    console.warn('[form-handler] RESEND_API_KEY ontbreekt — bericht niet verzonden:');
    console.log(formatText(data));
    return { ok: true, dev: true } as const;
  }

  const { Resend } = await import('resend');
  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: 'GTY website <noreply@gty.nl>',
    to,
    replyTo: typeof data.email === 'string' ? data.email : undefined,
    subject,
    html: formatHtml(data),
    text: formatText(data),
  });

  if (result.error) {
    console.error('[form-handler] Resend error:', result.error);
    return { ok: false, error: result.error.message } as const;
  }

  return { ok: true, id: result.data?.id } as const;
}
