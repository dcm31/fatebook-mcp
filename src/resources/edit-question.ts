// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class EditQuestion extends APIResource {
  update(body: EditQuestionUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.patch('/v0/editQuestion', { body, ...options });
  }
}

export type EditQuestionUpdateResponse = unknown;

export interface EditQuestionUpdateParams {
  questionId: string;

  apiKey?: string;

  notes?: string;

  resolveBy?: string;

  title?: string;
}

export declare namespace EditQuestion {
  export {
    type EditQuestionUpdateResponse as EditQuestionUpdateResponse,
    type EditQuestionUpdateParams as EditQuestionUpdateParams,
  };
}
