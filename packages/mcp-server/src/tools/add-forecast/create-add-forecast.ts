// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'fatebook2-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'add_forecast',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v0/addForecast',
  operationId: 'question-addForecast',
};

export const tool: Tool = {
  name: 'create_add_forecast',
  description: 'Add a forecast to the question. Forecasts are between 0 and 1.',
  inputSchema: {
    type: 'object',
    properties: {
      forecast: {
        type: 'number',
        description: 'The forecast to add. Must be between 0 and 1.',
      },
      questionId: {
        type: 'string',
      },
      apiKey: {
        type: 'string',
      },
      optionId: {
        type: 'string',
        description:
          'The ID of the selected option for multiple-choice questions. Only required for multiple-choice questions.',
      },
    },
  },
};

export const handler = async (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult((await client.addForecast.create(body)) as object);
};

export default { metadata, tool, handler };
