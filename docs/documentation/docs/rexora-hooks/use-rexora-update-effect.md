---
title: useRexoraUpdateEffect
---

# `useRexoraUpdateEffect`

The `useRexoraUpdateEffect` hook is similar to React's built-in `useEffect`, but with one key difference: it does not run on the initial render of the component. It only executes the effect function when the dependencies array changes. This is useful when you need to perform side effects only in response to updates, and not when the component first mounts.

## Installation

This hook is part of the Rexora hooks package.
```
bash
npm install @rexora/hooks
# or
yarn add @rexora/hooks
```
## Import
```
typescript
import { useRexoraUpdateEffect } from '@rexora/hooks';
```
## Usage
```
typescript
import React, { useState } from 'react';
import { useRexoraUpdateEffect } from '@rexora/hooks';

function MyComponent() {
  const [count, setCount] = useState(0);

  useRexoraUpdateEffect(() => {
    console.log('Count has been updated:', count);
    // Perform side effect based on count change
  }, [count]); // Effect runs only when count changes, not on initial render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
## Parameters

| Parameter     | Type                           | Description                                                                 |
| :------------ | :----------------------------- | :-------------------------------------------------------------------------- |
| `effect`      | `() => void \| (() => void)` | The function to run as the side effect. Can optionally return a cleanup function. |
| `dependencies` | `React.DependencyList`         | An array of values that the effect depends on. The effect will re-run when any of these values change. |

## Return Value

This hook does not return any value.

## Examples

### Reacting to Prop Changes

You can use `useRexoraUpdateEffect` to react specifically to changes in component props.
```
typescript
import React, { useState } from 'react';
import { useRexoraUpdateEffect } from '@rexora/hooks';

function UserProfile({ userId }) {
  const [userData, setUserData] = useState(null);

  useRexoraUpdateEffect(() => {
    console.log('Fetching data for new user:', userId);
    // Simulate fetching user data
    const fetchUserData = async () => {
      // Replace with actual data fetching logic
      const data = { id: userId, name: `User ${userId}` };
      setUserData(data);
    };
    fetchUserData();
  }, [userId]); // Effect runs only when userId prop changes

  return (
    <div>
      {userData ? (
        <p>User ID: {userData.id}, Name: {userData.name}</p>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
```
### Performing Cleanup on Update

Similar to `useEffect`, you can return a cleanup function from the effect callback. This function will run before the effect is re-run and when the component unmounts.