import * as React from 'react';
import styles from './card.css';

export default ({children}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
