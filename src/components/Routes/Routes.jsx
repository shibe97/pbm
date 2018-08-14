import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Area from '../Area';
import Home from '../Home';

class Routes extends React.Component {
  render() {
    return (
      <Area>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </Area>
    );
  }
}

export default Routes;
