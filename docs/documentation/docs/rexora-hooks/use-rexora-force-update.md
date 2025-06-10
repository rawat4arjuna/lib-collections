---
id: use-rexora-force-update
title: useRexoraForceUpdate
---

The `useRexoraForceUpdate` hook provides a simple way to force a component to re-render. While React typically handles re-renders based on state and prop changes, there might be rare cases where you need to imperatively trigger an update.


**Important:** Using `useRexoraForceUpdate` is generally discouraged in favor of managing component state or props to trigger updates. Use it sparingly and only when necessary.

## Usage
```
javascript
import { useRexoraForceUpdate } from '@rexora/hooks';
import React from 'react';

function MyComponent() {
  const forceUpdate = useRexoraForceUpdate();

  const handleButtonClick = () => {
    // Perform some action that doesn't directly change state or props,
    // but requires a re-render.
    console.log('Forcing update...');
    forceUpdate();
  };

  return (
    <div>
      <p>This component can be force updated.</p>
      <button onClick={handleButtonClick}>Force Update</button>
    </div>
  );
}
```
## Parameters

This hook does not accept any parameters.

## Return Value

The hook returns a function:

*   `forceUpdate`: A function that, when called, will trigger a re-render of the component.

## Example