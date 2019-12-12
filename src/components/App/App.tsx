/*

This component is the entry point for our app.
It must be named exactly `App` and live in the `components/App` folder.
Typical tasks performed in this component are:
- general app layout
- choosing the correct component to render based on the current view

In this simple example it does a bit of both.

*/

import * as React from 'react';
import View from '../View';
import Hello from '../Hello';
import { declareQueries } from 'avenger/lib/react';
import { currentView } from '../../queries';
import './app.scss';
//@ts-ignore
import * as config from 'config';

const queries = declareQueries({ currentView });
class App extends React.Component<typeof queries.Props> {
  render() {
    console.log(config);
    return (
      <View column className="app">
        <h1>Yelp Restaurant finder</h1>
        <Hello />
      </View>
    );
  }
}

export default queries(App);
