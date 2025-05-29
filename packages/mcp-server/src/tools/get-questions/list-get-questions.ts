// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'get_questions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v0/getQuestions',
  operationId: 'question-getQuestionsApiProcedure',
};

export const tool: Tool = {
  name: 'list_get_questions',
  description:
    "By default, this fetches all questions that you've created, forecasted on, or are shared with you. Alternatively, if you set showAllPublic to true, it fetches all public questions from fatebook.io/public.",
  inputSchema: {
    type: 'object',
    properties: {
      apiKey: {
        type: 'string',
        description: 'Your Fatebook API key. Get it at fatebook.io/api-setup',
      },
      cursor: {
        type: 'number',
        description:
          'Used for pagination. 0 = return the first [limit] questions, 100 = skip the first 100 questions and return the next [limit] questions.',
      },
      filterTagIds: {
        type: 'string',
        description: 'Comma-separated list of tag IDs. Only get questions with at least one of these tags',
      },
      filterTournamentId: {
        type: 'string',
        description: 'Show questions in this tournament (instead of your questions)',
      },
      filterUserListId: {
        type: 'string',
        description: 'Show questions in this team (instead of your questions)',
      },
      limit: {
        type: 'number',
        description: 'Maximum number of questions to return. Default = 100',
      },
      readyToResolve: {
        type: 'boolean',
        description: 'Only get questions ready to be resolved',
      },
      resolved: {
        type: 'boolean',
        description: 'Only get resolved questions',
      },
      resolvingSoon: {
        type: 'boolean',
        description: 'Only get questions that are resolving soon',
      },
      searchString: {
        type: 'string',
        description: 'Only get questions or tags containing this search string',
      },
      showAllPublic: {
        type: 'boolean',
        description:
          "Show all public questions from fatebook.io/public (if false, get only questions you've created, forecasted on, or are shared with you)",
      },
      sortEarliestFirst: {
        type: 'boolean',
        description:
          'Show questions in chronological order. If not true, usually shows them in reverse-chronological (latest first).',
      },
      theirUserId: {
        type: 'string',
        description: 'Show questions created by this user (instead of your questions)',
      },
      unresolved: {
        type: 'boolean',
        description: 'Only get unresolved questions',
      },
    },
  },
};

export const handler = (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.getQuestions.list(body);
};

export default { metadata, tool, handler };
