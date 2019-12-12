import { TaskEither, tryCatch } from 'fp-ts/lib/TaskEither';
import { identity } from 'fp-ts/lib/function';
import { Restaurant } from 'src/model';
import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import { stringify } from 'qs';

const makeRequest = (category: string, radius?: string, location?: string): AxiosPromise => {
  {
    const { apiEndpoint, token } = process.env;
    const config: AxiosRequestConfig = {
      transformResponse: [(data: any) => JSON.parse(data)],
      params: {
        category,
        radius,
        location
      },
      paramsSerializer: function(params) {
        return stringify(params);
      },
      headers: { Authorization: `Bearer ${token}` }
    };
    return axios.get(`${apiEndpoint}/v3/businesses/search`, config);
  }
};

export const search = (
  category: string,
  radius?: string,
  location?: string
): TaskEither<unknown, Restaurant[]> => {
  return tryCatch(() => makeRequest(category, radius, location), identity).map(
    ({ data: { businesses } }): Array<Restaurant> => {
      return (
        businesses.map(
          (el: Restaurant) =>
            <Restaurant>{
              name: el.name,
              image_url: el.image_url,
              url: el.url
            }
        ) || ''
      );
    }
  );
};
