// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddComment extends APIResource {
  /**
   * Add a comment to the question.
   */
  create(body: AddCommentCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/addComment', { body, ...options });
  }
}

export type AddCommentCreateResponse = unknown;

export interface AddCommentCreateParams {
  comment: string;

  questionId: string;

  apiKey?: string;
}

export declare namespace AddComment {
  export {
    type AddCommentCreateResponse as AddCommentCreateResponse,
    type AddCommentCreateParams as AddCommentCreateParams,
  };
}
