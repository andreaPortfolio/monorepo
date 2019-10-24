/** @format */

import fetchConfigurationHeader from './config';

const fetchGET = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: fetchConfigurationHeader,
  });

  return response.json();
};

export default fetchGET;
