import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import { declareQueries } from 'avenger/lib/react';
import { search } from '../../queries';
import { InputField } from 'buildo-react-components';
import FlexView from 'react-flexview';
import './hello.scss';

/*

We define a simple `HelloName` component that, once wrapped
in a query declaration for the `randomName` query, will receive its input params
as props (`length: number`) and pass to the wrapped component the `randomName` value,
result of fetching the declared query.

Updating the `length` prop will cause the query to refetch with the
updated params. Initially and in general while refetching, the `randomName`
value will thus be undefined.

*/

const queries = declareQueries({ search });

const HelloName = queries(props =>
  props.queries.fold(
    () => <FlexView>...</FlexView>,
    () => <FlexView>Something went wrong.</FlexView>,
    //@ts-ignore
    search => <p>ciao</p>
  )
);

/*

The hello component instead holds some control state, handled with React state.
This means it will be reinitialized to `10` every time the component
is unmounted and re-mounted.
On the contrary, the `randomName` data state obtained via the query, has a lifecycle
that is unrelated to the react component one: dependeing on its `cacheStrategy`,
it could be available indefinitely.

*/

type State = {
  location: string;
  radius: string;
  length: number;
  showError: boolean;
};

export default class Hello extends React.Component<{}, State> {
  state = {
    location: '10',
    radius: '100',
    length: 10,
    showError: false
  };

  onChange = (key: string, value: string) => {
    //@ts-ignore
    this.setState({ [key]: value });
  };

  render() {
    console.log(this);
    const {
      state: { location, radius }
    } = this;

    return (
      <FlexView column>
        <FlexView vAlignContent="center">
          <FlexView height={120} width={'100%'} hAlignContent="center" vAlignContent="center">
            <InputField
              label="Location"
              value={location}
              onChange={value => this.onChange('location', value)}
            />
            <InputField
              label="Radius"
              value={radius}
              onChange={value => this.onChange('radius', value)}
            />
          </FlexView>
        </FlexView>
        <HelloName queries={{ search: { location, radius } }} />
      </FlexView>
    );
  }
}
