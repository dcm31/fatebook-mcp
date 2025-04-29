// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fatebook2 from 'fatebook2';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import list_get_questions from './get-questions/list-get-questions';
import resolve_resolve_question from './resolve-question/resolve-resolve-question';
import update_visibility_set_shared_publicly from './set-shared-publicly/update-visibility-set-shared-publicly';
import create_add_forecast from './add-forecast/create-add-forecast';
import create_add_comment from './add-comment/create-add-comment';
import delete_delete_question from './delete-question/delete-delete-question';
import update_edit_question from './edit-question/update-edit-question';
import retrieve_count_forecasts from './count-forecasts/retrieve-count-forecasts';

export type HandlerFunction = (client: Fatebook2, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(list_get_questions);
addEndpoint(resolve_resolve_question);
addEndpoint(update_visibility_set_shared_publicly);
addEndpoint(create_add_forecast);
addEndpoint(create_add_comment);
addEndpoint(delete_delete_question);
addEndpoint(update_edit_question);
addEndpoint(retrieve_count_forecasts);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  if (filters.length === 0) {
    return endpoints;
  }

  const allExcludes = filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
