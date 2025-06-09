---
sidebar_position: 7
---

# useRexoraBoolean

The `useRexoraBoolean` hook is a simple utility hook for managing a boolean state with dedicated functions to set it to true, false, or toggle its value.

## Usage
```
jsx
import { useRexoraBoolean } from 'rexora-hooks';

function Component() {
  const [isVisible, { on, off, toggle }] = useRexoraBoolean(false);

  return (
    <div>
      <p>Is Visible: {isVisible ? 'True' : 'False'}</p>
      <button onClick={on}>Set True</button>
      <button onClick={off}>Set False</button>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```
## Parameters

| Parameter      | Type    | Description                             | Default |
| -------------- | ------- | --------------------------------------- | ------- |
| `initialValue` | `boolean` | The initial value of the boolean state. | `false` |

## Return Value

The hook returns an array containing:

1.  `boolean`: The current value of the boolean state.
2.  `object`: An object with the following functions:
    *   `on: () => void`: Sets the boolean state to `true`.
    *   `off: () => void`: Sets the boolean state to `false`.
    *   `toggle: () => void`: Toggles the boolean state.

## Examples

### Basic Usage
```
jsx
import { useRexoraBoolean } from 'rexora-hooks';

function MyComponent() {
  const [isOpen, { on, off, toggle }] = useRexoraBoolean(); // Defaults to false

  return (
    <div>
      <p>Modal Open: {isOpen ? 'Yes' : 'No'}</p>
      <button onClick={toggle}>Toggle Modal</button>
      <button onClick={on}>Open Modal</button>
      <button onClick={off}>Close Modal</button>
    </div>
  );
}
```
### Initializing with true