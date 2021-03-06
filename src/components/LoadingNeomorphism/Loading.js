import React from 'react'
import styles from './Loading.scss'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.bar}>
        <i className={styles.sphere} />
      </div>
    </div>
  )
}

export default Loading
