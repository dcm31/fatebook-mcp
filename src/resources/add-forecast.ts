// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddForecast extends APIResource {
  /**
   * Add a forecast to the question. Forecasts are between 0 and 1.
   *
   * @example
   * ```ts
   * const addForecast = await client.addForecast.create({
   *   forecast: 0.75,
   *   questionId: 'cm05iuuhx00066e7a1hncujn0',
   *   apiKey: 'your_api_key_here',
   * });
   * ```
   */
  create(body: AddForecastCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/v0/addForecast', { body, ...options });
  }
}

export type AddForecastCreateResponse = unknown;

export interface AddForecastCreateParams {
  /**
   * The forecast to add. Must be between 0 and 1.
   */
  forecast: number;

  questionId: string;

  apiKey?: string;

  /**
   * The ID of the selected option for multiple-choice questions. Only required for
   * multiple-choice questions.
   */
  optionId?: string;
}

export declare namespace AddForecast {
  export {
    type AddForecastCreateResponse as AddForecastCreateResponse,
    type AddForecastCreateParams as AddForecastCreateParams,
  };
}
