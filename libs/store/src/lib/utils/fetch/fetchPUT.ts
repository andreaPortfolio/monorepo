/** @format */
import fetchConfigurationHeader from './config';

const fetchPUT = async <T>(url: string): Promise<T> => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: fetchConfigurationHeader,
  });

  return response.json();
};

export default fetchPUT;
