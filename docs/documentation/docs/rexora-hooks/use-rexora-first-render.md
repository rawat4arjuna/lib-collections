---
id: use-rexora-first-render
title: useRexoraFirstRender
hide_title: true
---

The `useRexoraFirstRender` hook is a simple utility that returns a boolean value indicating whether the current render is the first render of the component.

It's imported from `@rexora/hooks`.
## Usage
```
typescript
import { useRexoraFirstRender } from '@rexora/hooks';
import React from 'react';

function MyComponent() {
  const isFirstRender = useRexoraFirstRender();

  if (isFirstRender) {
    console.log('This is the first render!');
    // Perform actions specific to the first render
  }

  return (
    <div>
      {isFirstRender ? 'Rendering for the first time' : 'Subsequent render'}
    </div>
  );
}
```
## Parameters

This hook takes no parameters.

## Return Value

The hook returns a single boolean value:

*   `true`: If the current render is the initial render of the component.
*   `false`: If the current render is a subsequent render.

## Example
```
typescript
import { useRexoraFirstRender } from '@rexora/hooks';
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const isFirstRender = useRexoraFirstRender();

  // This effect will only run on the first render
  React.useEffect(() => {
    if (isFirstRender) {
      console.log('Component mounted for the first time.');
    }
  }, [isFirstRender]); // Dependency array includes isFirstRender for clarity, though it won't change

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>{isFirstRender ? 'Initial Render' : 'Updated Render'}</p>
    </div>
  );
}

export default Counter;
```
In this example, the `useEffect` with the `isFirstRender` check will only execute its console log when the `Counter` component is first mounted. The text below the button will also visually indicate whether it's the initial or a subsequent render.