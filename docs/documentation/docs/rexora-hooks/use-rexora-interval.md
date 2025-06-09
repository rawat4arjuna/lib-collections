---
id: use-rexora-interval
title: useRexoraInterval
---

The `useRexoraInterval` hook provides a convenient way to set up and manage an interval in a React component. It allows you to execute a callback function repeatedly at a specified time interval and provides a function to clear the interval when needed.

## Usage
```
jsx
import { useRexoraInterval } from 'rexora-hooks';
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // Set an interval to increment the count every 1000 milliseconds (1 second)
  useRexoraInterval(() => {
    setCount(prevCount => prevCount + 1);
  }, 1000);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```
## Parameters

| Parameter | Type       | Description                                                                 |
| :-------- | :--------- | :-------------------------------------------------------------------------- |
| `callback`  | `() => void` | The function to be executed at each interval.                               |
| `delay`     | `number`   | The delay in milliseconds between successive executions of the callback. |

## Return Value

This hook does not return any value directly. It manages the interval internally.

## Clearing the Interval

The interval is automatically cleared when the component unmounts. If you need to manually clear the interval before the component unmounts (e.g., based on a condition), you would typically manage the interval ID using `useState` and `useEffect` and use `clearInterval`. The `useRexoraInterval` hook abstracts this pattern for simplicity in common use cases.

## Notes

*   The `callback` function is memoized internally to prevent unnecessary re-renders of the interval.
*   Be mindful of potential performance implications when using intervals, especially with short delays.
*   Ensure that any state updates within the `callback` use the functional update form (e.g., `setCount(prevCount => prevCount + 1)`) to avoid issues with stale closures.