// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CountForecasts extends APIResource {
  /**
   * Count the total number of forecasts that a user has made
   */
  retrieve(
    query: CountForecastRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CountForecastRetrieveResponse> {
    return this._client.get('/v0/countForecasts', { query, ...options });
  }
}

export interface CountForecastRetrieveResponse {
  numForecasts: number;

  userName: string | null;
}

export interface CountForecastRetrieveParams {
  userId: string;
}

export declare namespace CountForecasts {
  export {
    type CountForecastRetrieveResponse as CountForecastRetrieveResponse,
    type CountForecastRetrieveParams as CountForecastRetrieveParams,
  };
}
