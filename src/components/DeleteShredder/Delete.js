import React from 'react'
import styles from './Delete.scss'

const Delete = (props) => {
  return (
    <div className={styles.cont}>
      <div className={styles.paper} />
      <button className={styles['button-delete']}>
        <div className={styles.loader}>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <span className={styles['button-text']}>
          {props.message === undefined ? 'Deleting' : props.message}
        </span>
      </button>
      <div className={styles['g-cont']}>
        <div className={styles.garbage} />
        <div className={styles.garbage} />
        <div className={styles.garbage} />
        <div className={styles.garbage} />
        <div className={styles.garbage} />
        <div className={styles.garbage} />
      </div>
    </div>
  )
}

export default Delete
