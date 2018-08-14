import * as React from 'react';
import firebase from '../../firebase';
import styles from './author.css';

class Author extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    const { userId } = this.props;
    firebase.database().ref(`qa/adhoc/users/${userId}`).once('value').then((snapshot) => {
      this.setState({user: snapshot.val()});
    })
  }

  render() {
    const { name = '', departmentCode = '', profilePhotoUrl = '' } = this.state.user;

    return (
      <div className={styles.wrapper}>
        <img className={styles.img} src={profilePhotoUrl} alt="" />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.department}>{departmentCode}</p>
        </div>
      </div>
    );
  }
}

export default Author;
