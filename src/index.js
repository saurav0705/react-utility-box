import React from 'react'
import Toast from './components/Toast/Toast'
import Loading from './components/LoadingNeomorphism/Loading'
import LoadingBubble from './components/LoadingBubble/Loading'
import LoadingText from './components/LoadingText/Loading'
import Delete from './components/DeleteShredder/Delete'

export const ToastComponent = ({ styles, message, time }) => {
  return <Toast message={message} styles={styles} time={time} />
}

export const LoadingComponentNeo = () => {
  return <Loading />
}

export const LoadingComponentBubble = () => {
  return <LoadingBubble />
}

export const LoadingComponentText = ({ message }) => {
  return <LoadingText message={message} />
}

export const DeleteComponentShredder = (props) => {
  return <Delete message={props.message} />
}
