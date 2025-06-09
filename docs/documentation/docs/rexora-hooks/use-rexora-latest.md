# useRexoraLatest

The `useRexoraLatest` hook provides a way to access the most recent value of a state or prop, even from within closures that might have captured an older value. This is particularly useful in scenarios where you need to access the current value of a dependency inside effects or event handlers without adding that dependency to the dependency array, which could cause unwanted re-executions.

## Functionality

This hook utilizes a `useRef` to store and update the latest value of the provided argument on every render. The hook returns the ref itself, allowing you to access the `.current` property to get the most up-to-date value.

## Parameters

*   `value`: The state or prop whose latest value you want to track. This can be of any type.

## Returns

A React ref object containing the latest value of the provided `value`. You can access the latest value via `ref.current`.

## Usage Examples
```
javascript
import { useState, useEffect } from 'react';
import { useRexoraLatest } from '@rexora-hooks/useRexoraLatest'; // Assuming your package name

function MyComponent() {
  const [count, setCount] = useState(0);
  const latestCount = useRexoraLatest(count);

  // This effect runs only once on mount
  useEffect(() => {
    const intervalId = setInterval(() => {
      // We can access the latest count here without adding 'count' to the
      // dependency array of useEffect, avoiding unnecessary re-renders of the effect.
      console.log('Latest count:', latestCount.current);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
In this example, the `useEffect` only runs once on mount. Inside the interval callback, we use `latestCount.current` to get the current value of `count`. If we had used `count` directly in the `setInterval` and added `count` to the `useEffect` dependency array, the interval would be cleared and re-created every time `count` changes, which is often not the desired behavior for such use cases.
```
javascript
import { useState } from 'react';
import { useRexoraLatest } from '@rexora-hooks/useRexoraLatest';

function AnotherComponent({ userId }) {
  const latestUserId = useRexoraLatest(userId);

  const fetchData = () => {
    // You can access the latest userId here, e.g., for an API call
    console.log('Fetching data for user ID:', latestUserId.current);
    // perform API call with latestUserId.current
  };

  return (
    <div>
      <p>Current User ID: {userId}</p>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}
```
In this case, when the "Fetch Data" button is clicked, the `fetchData` function will use the most recent value of the `userId` prop, even if the component has re-rendered with a new `userId` value since the `fetchData` function was defined.