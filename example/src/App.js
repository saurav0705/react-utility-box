import React, { useState } from 'react'

import { ExampleComponent,ToastComponent } from 'components'
import 'components/dist/index.css'


const App = () => {
  const [random,setRandom] = useState("")



  return (<>
          <button onClick={() => setRandom(Math.random())}>soemthing</button>
            <ToastComponent text={random} />
          </>)
}

export default App
