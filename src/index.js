import React from 'react'
import styles from './styles.module.css'
import Toast from './components/Toast/Toast'


export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ToastComponent = ({text}) =>{
    return <Toast message={text}/>
}
