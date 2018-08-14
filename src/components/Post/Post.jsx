import * as React from 'react';
import Card from '../Card';
import Author from '../Author';
import styles from './post.css';

class Post extends React.Component {
  render() {
    const { data } = this.props;
    const { text, senderId, departmentCodes } = data;

    return (
      <Card>
        <div>
          <img src="images/dummy_img_01.png" alt="" />
          <p className={styles.text}>{text}</p>
        </div>
        <ul className={styles.tags}>
          {
            departmentCodes.map((item, i) => (
              <li key={i}><a className={styles.label} href="">{item}</a></li>
            ))
          }
        </ul>
        <Author userId={senderId} />
        <div className={styles.actions}>
          <a href="">回答する</a>
          <a href="">興味あり</a>
        </div>
      </Card>
    );
  }
}

export default Post;
