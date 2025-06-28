// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Fatebook2 } from '../client';

export abstract class APIResource {
  protected _client: Fatebook2;

  constructor(client: Fatebook2) {
    this._client = client;
  }
}
