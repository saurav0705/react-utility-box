import React, { useState, useEffect } from 'react'
import styles from './Toast.css'
const Toast = (props) => {
  const [show, setShow] = useState(true)
  let recent
  useEffect(() => {
    clearTimeout(recent)
    setShow(true)
    recent = setTimeout(
      () => setShow(false),
      props.time === undefined || typeof props.time !== 'number'
        ? 2000
        : props.time
    )
  }, [props.message])

  return (
    <div className={show ? '' : styles['fade-out']}>
      {props.message.toString().length > 0 ? (
        <div
          className={styles.toast}
          style={props.styles === undefined ? {} : props.styles}
        >
          {props.message}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Toast
