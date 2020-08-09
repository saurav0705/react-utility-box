import React from 'react'
import styles from './Loading.scss'

const Loading = () => {
  return (
    <div className={styles.dot}>
      <span className={styles['color-1']} />
      <span className={styles['color-2']} />
      <span className={styles['color-3']} />
      <span className={styles['color-4']} />
    </div>
  )
}

export default Loading
