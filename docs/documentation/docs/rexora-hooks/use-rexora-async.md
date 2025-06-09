---
id: use-rexora-async
title: useRexoraAsync
---

The `useRexoraAsync` hook is a React hook that simplifies handling asynchronous operations, such as Promises or `async` functions, by managing their state (loading, success, error).

## Usage
```
jsx
import { useRexoraAsync } from '@rexora/hooks';

function MyComponent() {
  const { execute, value, loading, error } = useRexoraAsync(async () => {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  }, false); // Set to true to run immediately

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {value && (
        <pre>{JSON.stringify(value, null, 2)}</pre>
      )}
      <button onClick={execute} disabled={loading}>
        Fetch Data
      </button>
    </div>
  );
}
```
## Parameters

| Parameter      | Type       | Description                                                                 |
| -------------- | ---------- | --------------------------------------------------------------------------- |
| `asyncFunction` | `() => Promise<T>` | The asynchronous function to execute. Should return a Promise.             |
| `immediate`    | `boolean`  | (Optional) If `true`, the `asyncFunction` will be executed immediately on mount. Defaults to `false`. |

## Return Value

The hook returns an object with the following properties:

| Property  | Type                                 | Description                                                        |
| --------- | ------------------------------------ | ------------------------------------------------------------------ |
| `execute` | `(...args: any[]) => Promise<void>` | A function to manually trigger the execution of the `asyncFunction`. |
| `value`   | `T \| null`                          | The resolved value of the Promise if successful, otherwise `null`.   |
| `loading` | `boolean`                            | A boolean indicating if the asynchronous operation is currently in progress. |
| `error`   | `Error \| null`                      | An Error object if the Promise was rejected, otherwise `null`.      |

## Description

The `useRexoraAsync` hook is designed to encapsulate the common logic of handling asynchronous operations in React components. It takes an `asyncFunction` and an optional `immediate` flag.

When `immediate` is `false` (the default), the hook provides an `execute` function that you can call to trigger the `asyncFunction`. When `immediate` is `true`, the `asyncFunction` is called automatically on the initial render.

The hook maintains `loading`, `value`, and `error` states to represent the current status of the asynchronous operation. This makes it easy to render different UI based on whether the data is being loaded, successfully fetched, or if an error occurred.

The `execute` function can optionally accept arguments that will be passed to the `asyncFunction`.