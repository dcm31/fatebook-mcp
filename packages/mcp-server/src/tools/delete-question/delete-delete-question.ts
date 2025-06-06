// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fatebook2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'delete_question',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v0/deleteQuestion',
  operationId: 'question-deleteQuestion',
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

export const handler = async (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.deleteQuestion.delete(body)) as object);
};

export default { metadata, tool, handler };
