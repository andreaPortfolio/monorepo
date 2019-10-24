/** @format */

import fetchGET from './fetchGET';
import fetchPOST from './fetchPOST';
import fetchDELETE from './fetchDELETE';
import fetchPUT from './fetchPUT';

export interface Fetch {
  get: Function;
  post: Function;
  delete: Function;
  put: Function;
}

export const fetch: Fetch = {
  get: fetchGET,
  post: fetchPOST,
  delete: fetchDELETE,
  put: fetchPUT,
};
