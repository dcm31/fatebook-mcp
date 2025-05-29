// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'edit_question',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v0/editQuestion',
  operationId: 'question-editQuestion',
};

export const tool: Tool = {
  name: 'update_edit_question',
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
      notes: {
        type: 'string',
      },
      resolveBy: {
        type: 'string',
        format: 'date-time',
      },
      title: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.editQuestion.update(body);
};

export default { metadata, tool, handler };
