import * as React from 'react';
// import { FormattedMessage } from 'react-intl';
import { declareQueries } from 'avenger/lib/react';
import { search } from '../../queries';
import { InputField } from 'buildo-react-components';
import FlexView from 'react-flexview';
import './searchBar.scss';
import RingLoader from 'react-spinners/RingLoader';
import ViewRestaurants from '../ViewRestaurants';

const queries = declareQueries({ search });

const HelloName = queries(props =>
  props.queries.fold(
    () => (
      <FlexView hAlignContent="center" style={{ justifyContent: 'center' }}>
        <RingLoader sizeUnit={'px'} size={150} />
      </FlexView>
    ),
    () => <FlexView className="error">Qualcosa è andato storto</FlexView>,
    ({ search }) => <ViewRestaurants restaurants={search} />
  )
);

type State = {
  location: string;
  radius: string;
};

export default class Hello extends React.Component<{}, State> {
  state = {
    location: 'Milan',
    radius: '1000'
  };

  onChange = (key: string, value: string) => {
    //@ts-ignore
    this.setState({ [key]: value });
  };

  render() {
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
