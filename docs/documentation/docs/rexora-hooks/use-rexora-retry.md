# useRexoraRetry

The `useRexoraRetry` hook provides a mechanism to automatically retry a failed asynchronous operation (like a fetch request) a specified number of times with optional delays between retries.

## Usage

Here's an example of how to use `useRexoraRetry` to fetch data with automatic retries:


```
import React from 'react';
import { useRexoraRetry } from '@rexora/hooks';

const fetchData = async () => {
  const response = await fetch('https://api.example.com/data');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
};

const MyComponent = () => {
  const { data, loading, error, retry } = useRexoraRetry(fetchData, {
    retries: 3,
    delay: 1000, // 1 second delay
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
        <button onClick={retry}>Retry Fetch</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
```
## Parameters

The `useRexoraRetry` hook accepts the following parameters:

| Parameter      | Type                                   | Description                                       | Default         |
| :------------- | :------------------------------------- | :------------------------------------------------ | :-------------- |
| `asyncFn`      | `() => Promise<any>`                   | The asynchronous function to execute.             | `undefined`     |
| `options`      | `{ retryCount?: number; retryDelay?: number; }` | An optional object with retry configuration.   | `{}`            |
| `options.retryCount` | `number`                             | The maximum number of retries.                  | `0`             |
| `options.retryDelay` | `number`                             | The delay in milliseconds between retries.      | `0`             |
| `dependencies` | `any[]`                              | An optional array of dependencies. The async function will re-run if these change. | `[]`            |

## Return Value

The hook returns an object with the following properties:

| Property  | Type                 | Description                                       |
| :-------- | :------------------- | :------------------------------------------------ |
| `data`    | `any`                | The result of the asynchronous operation.         |
| `loading` | `boolean`            | Indicates if the operation is currently in progress. |
| `error`   | `Error | null`      | Any error that occurred during the operation.     |
| `retry`   | `() => void`         | A function to manually trigger a retry.           |

## Notes

- The `useRexoraRetry` hook will automatically retry the `asyncFn` if it throws an error, up to the specified `retryCount`.
- The `retryDelay` option allows you to control the time between retries.
- The `retry` function returned by the hook can be used to manually trigger a retry.
- If `dependencies` are provided, the `asyncFn` will be re-executed whenever any of the dependencies change.
