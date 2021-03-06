/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import FlexView from 'react-flexview';
import { declareQueries } from 'avenger/lib/react';
import SearchBar from '../searchBar';
import { currentView } from '../../queries';
import './app.scss';

const queries = declareQueries({ currentView });
class App extends React.Component<typeof queries.Props> {
  render() {
    return (
      <FlexView column className="app">
        <FlexView className="title">Yelp Restaurant finder</FlexView>
        <SearchBar />
      </FlexView>
    );
  }
}

export default queries(App);
