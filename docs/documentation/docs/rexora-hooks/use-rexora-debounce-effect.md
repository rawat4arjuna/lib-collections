
---
sidebar_position: 2
---
# useRexoraDebounceEffect

The `useRexoraDebounceEffect` hook provides a way to debounce the execution of an effect hook. This is particularly useful when you have dependencies that change frequently and you want to avoid triggering the effect on every single change. It works by waiting for a specified delay after the dependencies have stopped changing before executing the provided callback function.

## Parameters

The `useRexoraDebounceEffect` hook accepts the following parameters:

*   `callback`: A function that contains the effect logic. This function will be executed after the debounce delay has passed since the last dependency change.
*   `delay`: The number of milliseconds to debounce the effect execution.
*   `dependencies`: An array of values that the effect depends on. The effect will be re-evaluated when any of these values change, but the callback will be debounced.

## Return Value

The `useRexoraDebounceEffect` hook does not return any value.

## Functionality

The `useRexoraDebounceEffect` hook internally manages a timer. When the `dependencies` change, the existing timer is cleared, and a new timer is set. If the `delay` time elapses without further changes to the dependencies, the `callback` function is executed. If the dependencies change again before the delay is over, the timer is reset. This ensures that the effect is only triggered after a period of inactivity in the dependencies.

This hook is implemented using `useEffect` and `useRef` to manage the timer and persist it across renders. It also includes proper cleanup to clear the timer when the component unmounts or the effect needs to be re-evaluated.

## Usage
```
jsx
import { useRexoraDebounceEffect } from 'rexora-hooks'; 
function MyComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  // Debounce the search effect by 500ms
  useRexoraDebounceEffect(
    () => {
      if (searchTerm) {
        // Simulate fetching search results
        console.log('Searching for:', searchTerm);
        // In a real app, you would fetch data here
        setResults([`Result for ${searchTerm}`]);
      } else {
        setResults([]);
      }
    },
    [searchTerm],// Dependencies array
     500 // Debounce delay in milliseconds
  );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter search term"
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}
```