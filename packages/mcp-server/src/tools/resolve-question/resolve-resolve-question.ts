// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'resolve_question',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/resolveQuestion',
  operationId: 'question-resolveQuestion',
};

export const tool: Tool = {
  name: 'resolve_resolve_question',
  description:
    "Resolve to YES, NO or AMBIGUOUS if it's a binary question and AMBIGUOUS, OTHER, or $OPTION if it's a multi-choice question",
  inputSchema: {
    type: 'object',
    properties: {
      questionId: {
        type: 'string',
      },
      questionType: {
        type: 'string',
      },
      resolution: {
        type: 'string',
        description:
          "Resolve to YES, NO or AMBIGUOUS if it's a binary question and AMBIGUOUS, OTHER, or $OPTION if it's a multi-choice question. You can only resolve your own questions.",
      },
      apiKey: {
        type: 'string',
      },
      optionId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.resolveQuestion.resolve(body);
};

export default { metadata, tool, handler };
