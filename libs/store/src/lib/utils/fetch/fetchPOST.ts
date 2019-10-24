/** @format */

import fetchConfigurationHeader from './config';

const fetchPOST = async <T>(url: string, params: {}): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...fetchConfigurationHeader,
    },
    body: JSON.stringify(params),
  });

  return response.json();
};

export default fetchPOST;
