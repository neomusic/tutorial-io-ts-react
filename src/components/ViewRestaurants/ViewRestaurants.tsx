import * as React from 'react';
import FlexView from 'react-flexview';
import './ViewRestaurants.scss';
import { Restaurant } from 'src/model';
import RestaurantComponent from '../Restaurant';

type Props = {
  restaurants: Restaurant[];
};
export default class ViewRestaurants extends React.Component<Props> {
  render() {
    return (
      <FlexView className="viewRestaurant" wrap>
        {this.props.restaurants.map((res, index) => (
          <RestaurantComponent restaurant={res} key={index} />
        ))}
      </FlexView>
    );
  }
}
