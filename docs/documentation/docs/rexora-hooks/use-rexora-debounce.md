---
id: use-rexora-debounce
title: useRexoraDebounce
---

The `useRexoraDebounce` hook provides a way to debounce a value in your React components. This is useful when you have a value that changes frequently, and you want to perform an action based on that value only after a certain period of inactivity.

## Functionality

`useRexoraDebounce` takes a value and a delay as input. It returns the debounced value, which will only update after the specified `delay` has passed without the input `value` changing. This prevents unnecessary re-renders or side effects that might occur with every change of the input value.

## Installation



## Parameters

*   `value`: The value to debounce. This can be of any type.
*   `delay`: The time in milliseconds to wait after the last change of the `value` before updating the debounced value.

## Return Value

The hook returns the debounced value.

## Usage Examples
```
jsx
import React, { useState } from 'react';
import { useRexoraDebounce } from 'rexora-hooks';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useRexoraDebounce(searchTerm, 500); // Debounce with 500ms delay

  // Perform search operation when the debouncedSearchTerm changes
  React.useEffect(() => {
    if (debouncedSearchTerm) {
      console.log('Searching for:', debouncedSearchTerm);
      // Call your search API or perform the search logic here
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchInput;
```
In this example, the `useRexoraDebounce` hook is used to debounce the `searchTerm`. The `console.log` and the search logic inside the `useEffect` will only be executed 500 milliseconds after the user stops typing, preventing excessive calls while the user is still inputting their query.