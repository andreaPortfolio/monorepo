/** @format */

// #region IMPORT
import { fetch } from './utils/fetch';
import { ChronologyParams } from './chronology';
// import { BASE_URL } from './utils/costants/urls';
// #endregion


// #region API ::: FETCH BANK LIST
export const apiGetChronologies = async <T>(
  params: ChronologyParams | {},
  baseUrl: string,
): Promise<T> => {
  // return fetch.post(`${baseUrl}${BASE_URL}`, params);
  console.log('PARAMS', params, baseUrl)
  return fetch.get(`http://ip.jsontest.com/`, params);
};
// #endregion
