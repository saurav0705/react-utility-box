import React from 'react'
import styles from './styles.module.css'
import Toast from './components/Toast/Toast'
import Loading from './components/LoadingNeomorphism/Loading'
import LoadingBubble from './components/LoadingBubble/Loading'
import LoadingText from './components/LoadingText/Loading'
import Delete from './components/DeleteShredder/Delete'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const ToastComponent = ({text}) =>{
    return <Toast message={text}/>
}

export const LoadingComponentNeo = () => {
  return <Loading/>
}

export const LoadingComponentBubble = () => {
  return <LoadingBubble/>
}

export const LoadingComponentText = ({text}) => {
  return <LoadingText text={text}/>
}

export const DeleteComponentShredder = () => {
  return <Delete/>
}