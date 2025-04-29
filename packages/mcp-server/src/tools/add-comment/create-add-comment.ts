// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'add_comment',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_add_comment',
  description: 'Add a comment to the question.',
  inputSchema: {
    type: 'object',
    properties: {
      comment: {
        type: 'string',
      },
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
  return client.addComment.create(body);
};

export default { metadata, tool, handler };
