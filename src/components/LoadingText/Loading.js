import React from 'react'
import styles from './Loading.scss'

const Loading = ({ message }) => {
  return (
    <div class={styles['dot']}>
      {(message === undefined ? 'loading' : message).split('').map((chr) => (
        <span>{chr}</span>
      ))}
    </div>
  )
}

export default Loading
