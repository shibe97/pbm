import * as React from 'react';
import firebase from '../../firebase';
import Post from '../Post';
import Side from '../Side';
import styles from './home.css';

class Home extends React.Component {
  state = {
    threads: null,
    userId: null,
  };

  componentDidMount() {
    firebase.database().ref('qa/adhoc/chat/threads').once('value').then((snapshot) => {
      console.log(snapshot.val());
      this.setState({
        threads: Object.values(snapshot.val()),
        userId: firebase.auth().currentUser,
      });
    })
  }

  render() {
    const { threads, userId } = this.state;
    if (threads === null) {
      return null;
    }
    const likedThreads = threads.filter(({likeUsers = []}) => likeUsers.includes(userId));
    console.log(likedThreads);
    return (
      <div className={styles.wrapper}>
        <dl className={styles.menu}>
          <dt className={styles.menuTitle}>タイムライン</dt>
          <dd>
            <ul className={styles.menuLists}>
              <li className={styles.menuList}><a href="">すべて</a></li>
              <li className={styles.menuList}><a href="">興味あり</a></li>
              <li className={styles.menuList}><a href="">未回答</a></li>
            </ul>
          </dd>
        </dl>
        <div>
          {
            threads.map((item) => <Post key={item.date} data={item} />)
          }
        </div>
        <Side />
      </div>
    );
  }
}

export default Home;
