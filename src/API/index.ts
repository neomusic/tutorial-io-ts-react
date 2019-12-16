import { TaskEither, tryCatch, fromEither } from 'fp-ts/lib/TaskEither';
import { identity } from 'fp-ts/lib/function';
import { Restaurant } from 'src/model';
import axios from 'axios';
import * as config from './../config';

export const search = (
  category: string,
  radius?: string,
  location?: string
): TaskEither<unknown, Restaurant[]> => {
  return tryCatch(
    () =>
      axios.get('', {
        url: `${config.apiEndpoint}/v3/businesses/search`,
        params: {
          category,
          radius,
          location
        },
        headers: { Authorization: `Bearer ${config.token}` }
      }),
    identity
  ).chain(({ data: { businesses } }) => {
    return fromEither(
      businesses.map(
        (el: Restaurant) =>
          <Restaurant>{
            name: el.name,
            image_url: el.image_url,
            url: el.url
          }
      ) || ''
    );
  });
};
