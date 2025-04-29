// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fatebook2 from 'fatebook2';

const client = new Fatebook2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource editQuestion', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.editQuestion.update({ questionId: 'questionId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.editQuestion.update({
      questionId: 'questionId',
      apiKey: 'apiKey',
      notes: 'notes',
      resolveBy: '2019-12-27T18:11:19.117Z',
      title: 'title',
    });
  });
});
