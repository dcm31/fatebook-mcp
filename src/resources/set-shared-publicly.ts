// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SetSharedPublicly extends APIResource {
  /**
   * Change the visibility of the question. The 'sharedPublicly' parameter sets
   * whether the question is accessible to anyone via a direct link. The 'unlisted'
   * parameter sets whether the question is visible on fatebook.io/public
   */
  updateVisibility(
    body: SetSharedPubliclyUpdateVisibilityParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.patch('/v0/setSharedPublicly', { body, ...options });
  }
}

export type SetSharedPubliclyUpdateVisibilityResponse = unknown;

export interface SetSharedPubliclyUpdateVisibilityParams {
  questionId: string;

  apiKey?: string;

  /**
   * Change whether the question is shared with anyone with the link
   */
  sharedPublicly?: boolean;

  /**
   * Change whether the question is unlisted (not shown on fatebook.io/public)
   */
  unlisted?: boolean;
}

export declare namespace SetSharedPublicly {
  export {
    type SetSharedPubliclyUpdateVisibilityResponse as SetSharedPubliclyUpdateVisibilityResponse,
    type SetSharedPubliclyUpdateVisibilityParams as SetSharedPubliclyUpdateVisibilityParams,
  };
}
