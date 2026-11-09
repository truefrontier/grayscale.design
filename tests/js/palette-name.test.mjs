// The palette-name rule for exports (App.vue cssColors). Run with `npm test` (Node 20.19+ or 22.12+, no build needed).
// truefrontier/grayscale-mcp applies the same rule (SAFE_NAME in src/palette.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { safeName } from '../../resources/js/utils/palette-name.js';

test('keeps plain names', () => {
  for (const name of ['primary', 'brand-blue', 'Brand_Blue2', 'a', 'x'.repeat(32)]) assert.equal(safeName(name), name);
});

test('drops names that could put code into an export, so the auto name is used', () => {
  const bad = [
    "x};require('child_process').execSync('id');({", // radix const / tailwind.config.js key
    '<script>alert(1)</script>', // SVG text
    'a" onload="alert(1)', // SVG id attribute
    'a b', '-x', '1abc', '__proto__', 'x'.repeat(33), '', undefined, null, 42,
  ];
  for (const name of bad) assert.equal(safeName(name), '', String(name));
});
