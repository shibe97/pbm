import * as React from 'react';
import { Link } from 'react-router-dom';
import styles from './login.css';
import firebase from '../../firebase';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  };

  login() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.setState({errorMessage: error.message});
    });
  }

  render() {
    return (
      <div className="Body">
        <div className={styles.panel}>
          <button className={styles.googleBtn}>Googleアカウントでログイン</button>
          <p className={styles.text}>アプリが許可なく投稿することはありません。</p>
          <p>- または -</p>
          <form>
            <p className={styles.legend}>メールアドレス</p>
            <input type="text" className={styles.inputText} onChange={(e) => this.setState({email: e.target.value})} />
            <p className={styles.legend}>パスワード</p>
            <input type="password" className={styles.inputText} onChange={(e) => this.setState({password: e.target.value})} />
            <div className={styles.action}>
              <p className={styles.errorText}>{this.state.errorMessage}</p>
              <input type="button" className={styles.btn} value="ログイン" onClick={() => this.login()} />
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
