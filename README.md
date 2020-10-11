# useFontFaceReady

React Hook for `document.fonts.ready`. 

## Installation
`npm install use-font-face-ready --save`

or

`yarn add use-font-face-ready`

![meme](./meme.jpeg?raw=true)

## Usage

Easy Cheese

```javascript

import React from "react";
import useFontFaceReady from "use-font-face-ready";

export default function App() {
  const ready = useFontFaceReady();
  
  return (
    <div>
      <h1>{ready ? 'Hello my awesome font' : 'I wait you'}</h1>
    </div>
  );
}
```

## Demo

https://codesandbox.io/s/quizzical-haibt-z4mgk
