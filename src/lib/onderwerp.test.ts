// node --experimental-strip-types --test src/lib/onderwerp.test.ts
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { voorinvullen } from './onderwerp.ts';

test('onderwerp uit de knop', () => {
  assert.deepEqual(voorinvullen('kennismaking'), { onderwerp: 'Kennismaking', norm: '' });
  assert.deepEqual(voorinvullen('audit-nen7510'), { onderwerp: 'Interne audit · NEN 7510', norm: 'NEN 7510' });
  assert.deepEqual(voorinvullen('nulmeting-arbo'), { onderwerp: 'Nulmeting', norm: 'Certificatieschema Arbodiensten' });
  assert.deepEqual(voorinvullen('onzin'), { onderwerp: '', norm: '' });
});
