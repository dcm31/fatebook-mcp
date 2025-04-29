// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetQuestions extends APIResource {
  /**
   * By default, this fetches all questions that you've created, forecasted on, or
   * are shared with you. Alternatively, if you set showAllPublic to true, it fetches
   * all public questions from fatebook.io/public.
   */
  list(query: GetQuestionListParams, options?: RequestOptions): APIPromise<GetQuestionListResponse> {
    return this._client.get('/v0/getQuestions', { query, ...options });
  }
}

export interface GetQuestionListResponse {
  items: Array<unknown>;
}

export interface GetQuestionListParams {
  /**
   * Your Fatebook API key. Get it at fatebook.io/api-setup
   */
  apiKey: string;

  /**
   * Used for pagination. 0 = return the first [limit] questions, 100 = skip the
   * first 100 questions and return the next [limit] questions.
   */
  cursor?: number;

  /**
   * Comma-separated list of tag IDs. Only get questions with at least one of these
   * tags
   */
  filterTagIds?: string;

  /**
   * Show questions in this tournament (instead of your questions)
   */
  filterTournamentId?: string;

  /**
   * Show questions in this team (instead of your questions)
   */
  filterUserListId?: string;

  /**
   * Maximum number of questions to return. Default = 100
   */
  limit?: number;

  /**
   * Only get questions ready to be resolved
   */
  readyToResolve?: boolean;

  /**
   * Only get resolved questions
   */
  resolved?: boolean;

  /**
   * Only get questions that are resolving soon
   */
  resolvingSoon?: boolean;

  /**
   * Only get questions or tags containing this search string
   */
  searchString?: string;

  /**
   * Show all public questions from fatebook.io/public (if false, get only questions
   * you've created, forecasted on, or are shared with you)
   */
  showAllPublic?: boolean;

  /**
   * Show questions in chronological order. If not true, usually shows them in
   * reverse-chronological (latest first).
   */
  sortEarliestFirst?: boolean;

  /**
   * Show questions created by this user (instead of your questions)
   */
  theirUserId?: string;

  /**
   * Only get unresolved questions
   */
  unresolved?: boolean;
}

export declare namespace GetQuestions {
  export {
    type GetQuestionListResponse as GetQuestionListResponse,
    type GetQuestionListParams as GetQuestionListParams,
  };
}
