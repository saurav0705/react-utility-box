import React, { useState, useEffect } from 'react'
import styles from './Toast.css'
const Toast = (props) => {
  const [show, setShow] = useState(true)
  let recent
  useEffect(() => {
    clearTimeout(recent)
    setShow(true)
    recent = setTimeout(() => setShow(false), 2000)
  }, [props.message])

  return (
    <div className={show ? '' : styles['fade-out']}>
      {props.message.toString().length > 0 ? (
        <div className={styles.toast}>{props.message}</div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Toast
