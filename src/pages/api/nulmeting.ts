import type { APIRoute } from 'astro';
import { deliverSubmission } from '~/lib/form-handler';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400 });
  }

  if (data.company) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  if (!data.email || !data.organisatie || !data.akkoord) {
    return new Response(JSON.stringify({ error: 'missing_fields' }), { status: 400 });
  }

  const result = await deliverSubmission({ type: 'nulmeting', data });
  if (!result.ok) {
    return new Response(JSON.stringify({ error: 'send_failed' }), { status: 502 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
