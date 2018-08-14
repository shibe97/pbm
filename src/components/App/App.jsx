import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Login from '../Login';
import Register from '../Register';
import Routes from '../Routes';
import firebase from '../../firebase';
import styles from './app.css';

class App extends React.Component {
  state = {
    isLoaded: false,
    isAuthorized: null,
  };
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({isAuthorized: !!user});
    });
  }

  render() {
    const { isAuthorized } = this.state;
    if (isAuthorized === null) {
      return <p>loading...</p>
    }
    if (isAuthorized === false) {
      return (
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/register" component={Register} />
            <Route component={Register} />
          </Switch>
        </div>
      );
    }
    return (
      <div className={styles.wrapper}>
        <Header />
        <Routes location={this.props.location} />
      </div>
    );
  }
}

export default App;
