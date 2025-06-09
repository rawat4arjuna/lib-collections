---
id: use-rexora-fetch
title: useRexoraFetch
sidebar_label: useRexoraFetch
---

The `useRexoraFetch` hook provides a simplified and declarative way to perform data fetching in your React components. It abstracts away the complexities of managing fetch requests, loading states, and errors.

## Usage
```
jsx
import useRexoraFetch from '@rexora/hooks/useRexoraFetch';

function MyComponent() {
  const { data, loading, error } = useRexoraFetch('https://api.example.com/data');

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
## Parameters

| Name        | Type                       | Description                                     |
| :---------- | :------------------------- | :---------------------------------------------- |
| `url`       | `string`                   | The URL to fetch data from.                     |
| `options`   | `RequestInit` (optional)   | Optional Fetch API request options.             |
| `dependencies` | `any[]` (optional) | An array of dependencies for the effect. The fetch will re-run when dependencies change. |

## Return Value

The hook returns an object with the following properties:

| Name      | Type      | Description                                          |
| :-------- | :-------- | :--------------------------------------------------- |
| `data`    | `any`     | The fetched data. Will be `undefined` initially.     |
| `loading` | `boolean` | Indicates if the fetch request is currently in progress. |
| `error`   | `Error`   | An error object if the fetch failed. Will be `undefined` if successful. |

## Examples

### Fetching with POST method
```
jsx
import useRexoraFetch from '@rexora/hooks/useRexoraFetch';
import { useState } from 'react';

function PostDataComponent() {
  const [postBody, setPostBody] = useState({ name: 'Test' });
  const { data, loading, error } = useRexoraFetch('https://api.example.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBody),
  }, [postBody]); // Re-run fetch when postBody changes

  // ... render logic
}
```
### Handling different response types

The `data` property will contain the parsed response. By default, it assumes JSON. You might need to handle other response types manually within your component or extend the hook.
```
jsx
import useRexoraFetch from '@rexora/hooks/useRexoraFetch';

function TextDataComponent() {
  const { data, loading, error } = useRexoraFetch('https://api.example.com/text-data');

  // ... assumes data is plain text
}
```
## Notes

*   The hook uses `useEffect` internally, so be mindful of the `dependencies` array to control when the fetch request is re-run.
*   Error handling is basic. You might want to add more sophisticated error management in your application.
*   For more complex data fetching scenarios, consider using a dedicated data fetching library like SWR or React Query.