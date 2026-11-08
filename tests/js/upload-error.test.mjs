// What the page's alert says when a palette upload fails (App.vue onFileUpload).
// Run with `npm test` (Node 20.19+ or 22.12+, no build needed).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { uploadErrorMessage } from '../../resources/js/utils/upload-error.js';

// axios rejects with the response attached. These bodies are what UploadController
// returns under Laravel 7.30.6 (captured from a PHPUnit run).
const rejected = (status, data) => Object.assign(new Error(`Request failed with status code ${status}`), { response: { status, data } });

test('a 422 shows the validation message', () => {
  const wrongType = rejected(422, { message: 'The given data was invalid.', errors: { file: ['The file must be a file of type: png, gif, jpeg, jpg.'] } });
  const noFile = rejected(422, { message: 'The given data was invalid.', errors: { file: ['The file field is required.'] } });
  assert.equal(uploadErrorMessage(wrongType), 'The file must be a file of type: png, gif, jpeg, jpg.');
  assert.equal(uploadErrorMessage(noFile), 'The file field is required.');
});

test('the page’s own checks still show their text', () => {
  assert.equal(uploadErrorMessage('Image is too big (max. 5 Mb)'), 'Image is too big (max. 5 Mb)');
});

test('anything else gets the site’s usual message, not axios’s', () => {
  const fallback = 'Sorry! Please try again.';
  assert.equal(uploadErrorMessage(rejected(429, { message: 'Too Many Attempts.' })), fallback);
  assert.equal(uploadErrorMessage(rejected(500, { message: 'Server Error' })), fallback);
  assert.equal(uploadErrorMessage(rejected(422, {})), fallback);
  assert.equal(uploadErrorMessage(new Error('Network Error')), fallback);
});
