# react-utility-box

> This react Library provides some extended functionality like Toast or floating messages etc.

[![NPM](https://img.shields.io/npm/v/components.svg)](https://www.npmjs.com/package/components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i --save react-utility-box
```

## Usage

```jsx
import React, { Component } from 'react'
import { ComponentName } from 'react-utility-box'
import 'react-utility-box/dist/index.css'

class Example extends Component {
  render() {
    return <ComponentName />
  }
}
```

## Components

### Toast Component

This Component is for flashing message it can be said as alert messages which will not interupt the browser.It takes In state as a message prop and and on state change it will show the popup and will dissappear after 2 seconds.

```jsx
import {ToastComponent} from 'react-utility-box';
import 'react-utility-box/dist/index.css';

class Example extends Component {
  const [message,setMessage] = useState('');
  render() {
    return(
      <div>
        <ToastComponent message={message}   time={10000} styles={{ backgroundColor: 'red', color: 'yellow' }}/>
      <div>
      )
  }
}

```

[Example for ToastComponent](https://codesandbox.io/s/toast-component-mm9zh)

| Prop name | Type   | default value |
| --------- | ------ | ------------- |
| message   | String | ''            |
| time      | number | 2000          |
| styles    | Object | {}            |

---

### Loaders

In this module many loaders can be found some of which some are customizable.

- NeoMorphism Loading

  ```jsx
  import { LoadingComponentNeo } from 'react-utility-box'

  export default app = () => {
    return <LoadingComponentNeo />
  }
  ```

- Bubble Loading

  ```jsx
  import { LoadingComponentBubble } from 'react-utility-box'

  export default app = () => {
    return <LoadingComponentBubble />
  }
  ```

- Text Loading

  ```jsx
  import { LoadingComponentText } from 'react-utility-box'

  export default app = () => {
    return <LoadingComponentText message={'please wait..'} />
  }
  ```

  | Prop name | Type   | default value |
  | --------- | ------ | ------------- |
  | message   | String | loading       |

[Example for Loaders](https://codesandbox.io/s/loaders-trhsn)

## License

MIT © [saurav0705](https://github.com/saurav0705)
