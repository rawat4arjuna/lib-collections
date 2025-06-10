# useRexoraRetry

The `useRexoraRetry` hook provides a mechanism to automatically retry a failed asynchronous operation (like a fetch request) a specified number of times with optional delays between retries.


```
## Usage
```
javascript
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

| Parameter        | Type                                 | Description                                                                 | Default Value |
| :--------------- | :----------------------------------- | :-------------------------------------------------------------------------- | :------------ |
| `asyncFunction`  | `() => Promise<any>`                 | The asynchronous function to execute and retry.                             | `required`    |
| `options`        | `{ retries?: number; delay?: number }` | An object containing options for retrying.                                  | `{}`          |
| `options.retries`| `number`                             | The maximum number of times to retry the operation.                         | `0`           |
| `options.delay`  | `number`                             | The delay in milliseconds between retry attempts.                           | `0`           |
| `dependencies`   | `any[]`                              | An optional array of dependencies. The async function will re-run if these change. | `[]`          |

## Return Value

The hook returns an object with the following properties:

| Property | Type                 | Description                                       |
| :------- | :------------------- | :------------------------------------------------ |
| `data`   | `any`                | The result of the asynchronous operation.         |
| `loading`| `boolean`            | Indicates if the operation is currently in progress. |
| `error`  | `Error \| null`      | Any error that occurred during the operation.     |
| `retry`  | `() => void`         | A function to manually trigger a retry.           |

## Notes

*   The `retry` function can be used to manually trigger a new execution of the `asyncFunction`, for example, when a "Retry" button is clicked after an error.
*   The `dependencies` array works similarly to the dependency array in `useEffect`. If the dependencies change, the `asyncFunction` will be executed again, including the retry logic if it fails.
*   The hook will stop retrying after the specified number of `retries` is reached or if the operation succeeds.