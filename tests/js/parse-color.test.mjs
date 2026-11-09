// The hex box's paste rule (App.vue onPaste). Run with `npm test` (Node 20.19+ or 22.12+, no build needed).
// truefrontier/grayscale-mcp runs the same cases against its copy of this rule.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { parseColor } from '../../resources/js/utils/parse-color.js';

test('reads every form the paste box takes', () => {
  const cases = {
    '3b82f6': '#3b82f6',
    ' #3b82f6 ': '#3b82f6',
    '#38f': '#3388ff',
    'rgb(59, 130, 246)': '#3b82f6',
    '59 130 246': '#3b82f6',
    'RGBA(59, 130, 246, 0.5)': '#3b82f6', // alpha is ignored
    'rgb(59 130 246 / 50%)': '#3b82f6',
    'rgb(255, 255, 255)': '#ffffff',
    'hsl(217, 91%, 60%)': '#3c83f6',
    '217 91% 60%': '#3c83f6', // a % with no keyword means HSL
    'hsl(217.5, 91%, 60%)': '#3c82f6', // decimals are read whole, not from the last digit
    'hsl(360, 100%, 50%)': '#ff0000', // 360 is red, the same as 0
  };
  for (const [input, hex] of Object.entries(cases)) assert.equal(parseColor(input), hex, input);
});

test('refuses out-of-range values instead of clamping or misreading them', () => {
  const bad = [
    'hsl(400, 150%, 70%)', 'hsl(361, 50%, 50%)', 'hsl(-10, 50%, 50%)', 'hsl(200, 101%, 50%)', 'hsl(200, 50%, 101%)', 'hsl(200, -1%, 50%)',
    'rgb(300, 130, 246)', 'rgb(256, 0, 0)', 'rgb(0, 0, -1)', 'rgb(100%, 0%, 0%)',
  ];
  for (const input of bad) assert.equal(parseColor(input), null, input);
});

test('refuses text that is not a color', () => {
  const bad = [
    'not a color at all', '', '#12', '#12345', 'rgb(1, 2)', 'rgb(1, -2, 3)',
    'my color is 59 130 246', '59 130 246 or so', 'rgb(59, 130, 246', '59, 130, 246)', 'cafebabe!',
  ];
  for (const input of bad) assert.equal(parseColor(input), null, input);
});
