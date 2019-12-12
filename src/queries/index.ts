import { queryStrict, refetch } from 'avenger';
import { getCurrentView } from 'avenger/lib/browser';
import { search as apiSearch } from '../API';
import { locationToView } from '../model';

export const currentView = getCurrentView(locationToView);

export const search = queryStrict(
  // `queryStrict` will call this API when requested (declared in a component),
  // and use a "strict" comparison to compare input and retrieve cached results.
  // See https://github.com/buildo/avenger/blob/v5/README.md#queries
  apiSearch,
  refetch
);
