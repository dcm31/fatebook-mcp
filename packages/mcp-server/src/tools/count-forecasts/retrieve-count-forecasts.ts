// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Fatebook2 from 'fatebook2';

export const metadata: Metadata = {
  resource: 'count_forecasts',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_count_forecasts',
  description: 'Count the total number of forecasts that a user has made',
  inputSchema: {
    type: 'object',
    properties: {
      userId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Fatebook2, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.countForecasts.retrieve(body);
};

export default { metadata, tool, handler };
