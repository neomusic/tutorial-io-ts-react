import { TaskEither, tryCatch, fromEither } from 'fp-ts/lib/TaskEither';
import { identity } from 'fp-ts/lib/function';
import { Restaurant } from 'src/model';
import axios from 'axios';
import * as config from './../config';

export const search = (zone: {
  radius: string;
  location: string;
}): TaskEither<unknown, Restaurant[]> => {
  const { radius, location } = zone;
  return tryCatch(
    () =>
      axios({
        url: `${config.apiEndpoint}v3/businesses/search`,
        params: {
          category: 'restaurants',
          radius,
          location
        },
        headers: { Authorization: `Bearer ${config.token}`, 'Access-Control-Allow-Origin': '*' }
      }),
    identity
  ).chain(({ data: { businesses } }) =>
    fromEither<unknown, Restaurant[]>(
      businesses.map((el: Restaurant) => ({
        name: el.name,
        image_url: el.image_url,
        url: el.url
      }))
    )
  );
};
