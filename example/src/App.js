import React, { useState } from 'react'

import {
  ToastComponent,
  LoadingComponentNeo,
  LoadingComponentBubble,
  LoadingComponentText,
  DeleteComponentShredder
} from 'components'
import 'components/dist/index.css'

const App = () => {
  const [random, setRandom] = useState('')
  const [input, setInput] = useState('')

  return (
    <>
      <div>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() => {
            setRandom(input)
            setInput('')
          }}
        >
          Toggle Toast
        </button>
      </div>
      <ToastComponent
        message={random}
        time={10000}
        styles={{ backgroundColor: 'red', color: 'yellow' }}
      />
      {/* <LoadingComponentNeo />
      <LoadingComponentBubble />
      <LoadingComponentText message={'please wait..'} />
      <DeleteComponentShredder /> */}
    </>
  )
}
//9810614084
export default App
