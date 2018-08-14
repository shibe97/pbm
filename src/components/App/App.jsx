import * as React from 'react';
import Header from '../Header';
import Login from '../Login';
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
          <Login />
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
