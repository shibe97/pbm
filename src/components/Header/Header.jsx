import * as React from 'react';
import firebase from '../../firebase';
import Area from '../Area';
import styles from './header.css';

class Header extends React.Component {
  componentDidMount() {
    if (firebase.auth().currentUser !== null) {
      firebase.database().ref('qa/adhoc/users/' + firebase.auth().currentUser.uid).once('value').then((snapshot) => {
        console.log(snapshot.val());
      })
    }
  }

  logout() {
    firebase.auth().signOut().then(function() {
      console.log("Signed out.");
    });
  }

  render() {
    return (
      <header className={styles.wrapper}>
        <Area>
          <div className={styles.container}>
            <h1><a href="/">絵本メモ</a></h1>
            <nav className={styles.right}>
              <ul className={styles.lists}>
                <li className={styles.list}><a className={`${styles.list} ${styles.home}`} href="/">ホーム</a></li>
                <li className={styles.list}><a className={`${styles.list} ${styles.settings}`} href="/settings">設定</a></li>
                <li className={styles.list}><a className={`${styles.list} ${styles.settings}`} onClick={() => this.logout()}>ログアウト</a></li>
                <li className={styles.list}><a className={`${styles.list} ${styles.profile}`} href="/profile"><img className="Header__profileImg" src="/images/dummy_ic_prof_2x.png" alt="" /></a></li>
              </ul>
              <button className={styles.button}>質問する</button>
            </nav>
          </div>
        </Area>
      </header>
    );
  }
}

export default Header;
