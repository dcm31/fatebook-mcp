// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fatebook2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'set_shared_publicly',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v0/setSharedPublicly',
  operationId: 'question-setSharedPublicly',
};

export const tool: Tool = {
  name: 'update_visibility_set_shared_publicly',
  description:
    "Change the visibility of the question. The 'sharedPublicly' parameter sets whether the question is accessible to anyone via a direct link. The 'unlisted' parameter sets whether the question is visible on fatebook.io/public",
  inputSchema: {
    type: 'object',
    properties: {
      questionId: {
        type: 'string',
      },
      apiKey: {
        type: 'string',
      },
      sharedPublicly: {
        type: 'boolean',
        description: 'Change whether the question is shared with anyone with the link',
      },
      unlisted: {
        type: 'boolean',
        description: 'Change whether the question is unlisted (not shown on fatebook.io/public)',
      },
    },
  },
};

export const handler = async (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.setSharedPublicly.updateVisibility(body)) as object);
};

export default { metadata, tool, handler };
