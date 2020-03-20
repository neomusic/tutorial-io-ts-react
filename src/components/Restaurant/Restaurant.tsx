import * as React from 'react';
import FlexView from 'react-flexview';
import './restaurant.scss';
import { Restaurant } from 'src/model';
import Card, { CardPrimaryContent, CardMedia } from '@material/react-card';

type Props = {
  restaurant: Restaurant;
};
export default class ViewRestaurants extends React.Component<Props> {
  render() {
    const { image_url, name, url } = this.props.restaurant;
    return (
      <FlexView className="restaurant animated fadeInDown delay-2s">
        <a href={url} target="_blank" rel="noopener">
          <Card>
            <CardPrimaryContent>
              <CardMedia square imageUrl={image_url} />
              <FlexView className="restaurantTitle">
                <p>{name}</p>
              </FlexView>
            </CardPrimaryContent>
          </Card>
        </a>
      </FlexView>
    );
  }
}
