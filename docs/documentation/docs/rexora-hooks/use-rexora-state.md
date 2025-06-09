# useRexoraState

`useRexoraState` is a custom React hook that provides a flexible way to manage state using a reducer pattern. It allows you to set, reset, and remove specific keys from a state object.

## Functionality

This hook initializes a state object and provides functions to interact with that state:

*   **Setting State:** You can update the state by providing a key-value pair or an object containing multiple key-value pairs.
*   **Resetting State:** Clears the entire state object, returning it to its initial empty state.
*   **Removing State:** Removes a specific key and its corresponding value from the state object.

It leverages React's `useReducer` hook internally to manage state transitions based on defined actions.

## Parameters

*   `initialState` (optional): The initial state object. Defaults to an empty object `{}`. Can be of any type extending `Record<string, any>`.

## Return Value

The hook returns a tuple containing:

1.  `state`: The current state object.
2.  `setState`: A function to update the state. It accepts either:
    *   `key` (string) and `value` (any): Sets the value for the specified key.
    *   `partialState` (object): Merges the provided object into the current state.
3.  `removeState`: A function to remove a specific key from the state. Accepts the `key` (string) to be removed.
4.  `resetState`: A function to reset the state to its initial empty state.

## Usage Examples
```
jsx
import React from 'react';
import {useRexoraState} from 'rexora-hooks' // Adjust the import path

function StateComponent() {
  const [state, setState, removeState, resetState] = useRexoraState({
    count: 0,
    text: 'Hello',
    data: {}
  });

  const handleIncrement = () => {
    setState('count', state.count + 1);
  };

  const handleSetText = (e) => {
    setState('text', e.target.value);
  };

  const handleSetData = () => {
    setState('data', { value: Math.random() });
  };

  const handleRemoveText = () => {
    removeState('text');
  };

  const handleReset = () => {
    resetState();
  };

  return (
    <div>
      <h2>Current State:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>

      <h3>Actions:</h3>
      <button onClick={handleIncrement}>Increment Count</button>
      <br />
      <input type="text" value={state.text || ''} onChange={handleSetText} placeholder="Set Text" />
      <br />
      <button onClick={handleSetData}>Set Data</button>
      <br />
      <button onClick={handleRemoveText}>Remove Text</button>
      <br />
      <button onClick={handleReset}>Reset State</button>
    </div>
  );
}

export default StateComponent;
```
**Setting multiple values with an object:**