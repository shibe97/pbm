import * as React from 'react';
import styles from './area.css';

export default ({children}) => {
  return <div className={styles.wrapper}>{children}</div>;
};
