// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'delete_question',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_delete_question',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      questionId: {
        type: 'string',
      },
      apiKey: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.deleteQuestion.delete(body);
};

export default { metadata, tool, handler };
