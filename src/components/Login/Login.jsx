import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.css';
import firebase, { db } from '../../firebase';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const token = result.credential.accessToken;
      const user = result.user;
      console.log(token);
      console.log(user);
      db.collection('users').doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  loginWithEmail() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.setState({errorMessage: error.message});
    });
  }

  render() {
    return (
      <div className="Body">
        <div className={styles.panel}>
          <button className={styles.googleBtn} onClick={() => this.loginWithGoogle()}>Googleアカウントでログイン</button>
          <p className={styles.text}>アプリが許可なく投稿することはありません。</p>
          <p>- または -</p>
          <form>
            <p className={styles.legend}>メールアドレス</p>
            <input type="text" className={styles.inputText} onChange={(e) => this.setState({email: e.target.value})} />
            <p className={styles.legend}>パスワード</p>
            <input type="password" className={styles.inputText} onChange={(e) => this.setState({password: e.target.value})} />
            <div className={styles.action}>
              <p className={styles.errorText}>{this.state.errorMessage}</p>
              <input type="button" className={styles.btn} value="ログイン" onClick={() => this.loginWithEmail()} />
            </div>
          </form>
          <div className={styles.subArea}>
            <p className={styles.text}>アカウント未登録の方はこちら</p>
            <Link className={styles.link} to="/register">新規アカウント登録</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
