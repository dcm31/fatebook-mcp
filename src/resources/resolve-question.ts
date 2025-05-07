// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ResolveQuestion extends APIResource {
  /**
   * Resolve to YES, NO or AMBIGUOUS if it's a binary question and AMBIGUOUS, OTHER,
   * or $OPTION if it's a multi-choice question
   *
   * @example
   * ```ts
   * const response = await client.resolveQuestion.resolve({
   *   questionId: 'cm05iuuhx00066e7a1hncujn0',
   *   questionType: 'BINARY',
   *   resolution: 'YES',
   *   apiKey: 'your_api_key_here',
   * });
   * ```
   */
  resolve(body: ResolveQuestionResolveParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/resolveQuestion', { body, ...options });
  }
}

export type ResolveQuestionResolveResponse = unknown;

export interface ResolveQuestionResolveParams {
  questionId: string;

  questionType: string;

  /**
   * Resolve to YES, NO or AMBIGUOUS if it's a binary question and AMBIGUOUS, OTHER,
   * or $OPTION if it's a multi-choice question. You can only resolve your own
   * questions.
   */
  resolution: string;

  apiKey?: string;

  optionId?: string;
}

export declare namespace ResolveQuestion {
  export {
    type ResolveQuestionResolveResponse as ResolveQuestionResolveResponse,
    type ResolveQuestionResolveParams as ResolveQuestionResolveParams,
  };
}
