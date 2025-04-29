// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fatebook2 from 'fatebook2';

const client = new Fatebook2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource resolveQuestion', () => {
  // skipped: tests are disabled for the time being
  test.skip('resolve: only required params', async () => {
    const responsePromise = client.resolveQuestion.resolve({
      questionId: 'cm05iuuhx00066e7a1hncujn0',
      questionType: 'BINARY',
      resolution: 'YES',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('resolve: required and optional params', async () => {
    const response = await client.resolveQuestion.resolve({
      questionId: 'cm05iuuhx00066e7a1hncujn0',
      questionType: 'BINARY',
      resolution: 'YES',
      apiKey: 'your_api_key_here',
      optionId: 'optionId',
    });
  });
});
