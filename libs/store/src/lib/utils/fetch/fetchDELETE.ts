/** @format */

import fetchConfigurationHeader from './config';

const fetchDELETE = async <T> (url: string): Promise<T>  => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: fetchConfigurationHeader,
  });

  return response.json();
};

export default fetchDELETE;
