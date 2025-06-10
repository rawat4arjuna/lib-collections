---
title: useRexoraMounted
sidebar_label: useRexoraMounted
---

# useRexoraMounted

`useRexoraMounted` can be imported from `@rexora/hooks`.

`useRexoraMounted` is a custom React hook that returns a boolean value indicating whether the component using the hook is currently mounted in the DOM. This can be useful for preventing state updates on unmounted components, which can lead to memory leaks and errors.

## Functionality

The hook initializes a ref and updates its value in a `useEffect` hook with an empty dependency array. The ref is set to `true` when the component mounts and to `false` when the component unmounts. The hook returns the current value of this ref.

## Parameters

This hook does not take any parameters.

## Return Value

The hook returns a boolean value:
- `true`: The component is currently mounted.
- `false`: The component is unmounted.

## Usage Examples
```
jsx
import React, { useEffect, useState } from 'react';
import useRexoraMounted from '@rexora/hooks/useRexoraMounted';

function MyComponent() {
  const isMounted = useRexoraMounted();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      if (isMounted) {
        setData({ message: 'Data fetched!' });
      }
    }, 1000);

    return () => {
      // Cleanup is handled by the useRexoraMounted hook
    };
  }, [isMounted]); // isMounted is not strictly necessary here due to the internal ref

  return (
    <div>
      <h2>Component</h2>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default MyComponent;
```
In this example, `useRexoraMounted` is used to prevent updating the `data` state after the component has been unmounted. This helps avoid potential errors.