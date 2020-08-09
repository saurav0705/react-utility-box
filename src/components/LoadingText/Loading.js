import React from 'react'
import styles from './Loading.scss'

const Loading = ({ message }) => {
  return (
    <div className={styles.dot}>
      {(message === undefined ? 'loading' : message)
        .split('')
        .map((chr, index) => (
          <span key={`index-loader${index}`}>{chr}</span>
        ))}
    </div>
  )
}

export default Loading
