// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteQuestion extends APIResource {
  delete(params: DeleteQuestionDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { questionId, apiKey } = params;
    return this._client.delete('/v0/deleteQuestion', { query: { questionId, apiKey }, ...options });
  }
}

export type DeleteQuestionDeleteResponse = unknown;

export interface DeleteQuestionDeleteParams {
  questionId: string;

  apiKey?: string;
}

export declare namespace DeleteQuestion {
  export {
    type DeleteQuestionDeleteResponse as DeleteQuestionDeleteResponse,
    type DeleteQuestionDeleteParams as DeleteQuestionDeleteParams,
  };
}
