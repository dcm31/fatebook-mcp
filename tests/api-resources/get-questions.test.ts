// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fatebook2 from 'fatebook2';

const client = new Fatebook2({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource getQuestions', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.getQuestions.list({ apiKey: 'apiKey' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.getQuestions.list({
      apiKey: 'apiKey',
      cursor: 0,
      filterTagIds: 'filterTagIds',
      filterTournamentId: 'filterTournamentId',
      filterUserListId: 'filterUserListId',
      limit: 0,
      readyToResolve: true,
      resolved: true,
      resolvingSoon: true,
      searchString: 'searchString',
      showAllPublic: true,
      sortEarliestFirst: true,
      theirUserId: 'theirUserId',
      unresolved: true,
    });
  });
});
