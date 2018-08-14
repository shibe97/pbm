import * as React from 'react';
import firebase from '../../firebase';
import Card from '../Card';
import styles from './side.css';

class Side extends React.Component {
  state = {
    pr: null
  };

  componentDidMount() {
    firebase.database().ref('qa/adhoc/pr/topBars').once('value').then((snapshot) => {
      console.log(snapshot.val());
      this.setState({pr: Object.values(snapshot.val())});
    })
  }

  render() {
    const { pr } = this.state;
    if (pr === null) {
      return null;
    }
    return (
      <div className={styles.wrapper}>
        <Card>
          <ul>
            {
              pr.map((item, i) => item.urlString ?
                <li className={styles.list} key={i}><a href={item.urlString} target="_blank">{item.text}</a></li>
                :
                <li className={styles.list} key={i}>{item.text}</li>
              )
            }
          </ul>
        </Card>
      </div>
    );
  }
}

export default Side;
