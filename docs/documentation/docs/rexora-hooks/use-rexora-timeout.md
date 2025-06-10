---
id: use-rexora-timeout
title: useRexoraTimeout
---

The `useRexoraTimeout` hook provides a convenient way to set and clear a timeout within a React component. It ensures that the timeout is properly cleared when the component unmounts or when the delay or callback function changes.

## Usage
```
jsx
import { useRexoraTimeout } from '@rexora/hooks';
import { useState } from 'react';

function MyComponent() {
  const [message, setMessage] = useState('Waiting...');
  const clearMessageTimeout = useRexoraTimeout(() => {
    setMessage('Timeout complete!');
  }, 3000); // Set message after 3 seconds

  const handleClick = () => {
    setMessage('Button clicked!');
    // You can clear the existing timeout if needed
    clearMessageTimeout();
    // Optionally set a new timeout
    // useRexoraTimeout(() => setMessage('New timeout done!'), 1000);
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={clearMessageTimeout}>Clear Timeout</button>
    </div>
  );
}
```
## Parameters

`useRexoraTimeout` accepts the following parameters:

*   `callback`: A function to be executed after the specified delay.
*   `delay`: The number of milliseconds to wait before executing the callback. If `null` or `undefined`, the timeout is cleared.

## Return Value

The hook returns a function that can be called to clear the timeout manually before the delay has passed.

## Notes

*   The timeout is automatically cleared when the component unmounts.
*   If the `callback` or `delay` parameters change, the existing timeout is cleared and a new one is set.
*   Passing `null` or `undefined` for the `delay` parameter will clear any existing timeout.