// The palette-name rule for exports (App.vue cssColors). Run with `npm test` (Node 20.19+ or 22.12+, no build needed).
// truefrontier/grayscale-mcp applies the same rule (SAFE_NAME in src/palette.ts).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import { safeName, jsIdent, jsKey, radixClash } from '../../resources/js/utils/palette-name.js';

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

test('the Radix variable and the auto-dark key stay valid JavaScript for hyphenated names', () => {
  // grayscale-alt is what cssColors makes of a palette named "grayscale".
  for (const name of ['brand-blue', 'grayscale-alt', 'a-b-c', 'x-', 'Brand_Blue2', 'blue']) {
    assert.doesNotThrow(() => new vm.Script(`const ${jsIdent(name)} = {};\nconst ${jsIdent(name)}Dark = {};`), name);
    assert.doesNotThrow(() => new vm.Script(`({ ${jsKey(name)}: 1 })`), name);
  }
  assert.equal(jsIdent('brand-blue'), 'brandBlue');
  assert.equal(jsIdent('grayscale-alt'), 'grayscaleAlt');
  assert.equal(jsKey('blue'), 'blue'); // plain names stay unquoted, as before
  assert.equal(jsKey('brand-blue'), "'brand-blue'");
});

test('a reserved word as a name still gives Radix consts that parse', () => {
  for (const name of ['class', 'default', 'new', 'delete', 'null', 'true', 'let', 'yield', 'enum', 'static']) {
    assert.doesNotThrow(() => new vm.Script(`'use strict';\nconst ${jsIdent(name)} = {};\nconst ${jsIdent(name)}Dark = {};`), name);
  }
  // A leading _ can't clash with another palette: names start with a letter.
  assert.equal(jsIdent('class'), '_class');
  assert.equal(jsIdent('new'), '_new');
  assert.equal(jsIdent('classic'), 'classic');
});

test('Radix names two palettes that would become the same const, and passes every other set', () => {
  assert.equal(
    radixClash(['grayscale', 'brand-blue', 'brandBlue']),
    'Radix writes each palette as a JavaScript const, but "brand-blue" and "brandBlue" would both be const brandBlue. Rename one of them.',
  );
  // foo-dark's const is foo's dark scale.
  assert.match(radixClash(['grayscale', 'foo', 'foo-dark']), /"foo" \(its dark scale\) and "foo-dark" would both be const fooDark/);
  assert.match(radixClash(['grayscale', 'grayscale-dark']), /const grayscaleDark/);
  for (const ok of [['grayscale'], ['grayscale', 'grayscale-alt', 'brand-blue', 'blue', 'class', 'Class']]) {
    assert.equal(radixClash(ok), '', ok.join(', '));
  }
});
