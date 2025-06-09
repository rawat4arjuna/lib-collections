---
id: use-rexora-toggle
title: useRexoraToggle
---

`useRexoraToggle` is a custom React hook that simplifies the management of a boolean state, providing a convenient function to toggle its value.

## Usage
```
typescript
import { useRexoraToggle } from '@rexora/hooks';

function MyComponent() {
  const [isToggled, toggle] = useRexoraToggle(false);

  return (
    <div>
      <p>State is: {isToggled ? 'On' : 'Off'}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
```
## Parameters

`useRexoraToggle` accepts one optional parameter:

| Parameter    | Type    | Description               | Default |
| :----------- | :------ | :------------------------ | :------ |
| `initialValue` | `boolean` | The initial state value. | `false` |

## Return Value

`useRexoraToggle` returns an array with two elements:

| Element | Type        | Description                                  |
| :------ | :---------- | :------------------------------------------- |
| `state` | `boolean`   | The current boolean state.                   |
| `toggle` | `() => void` | A function to toggle the boolean state value. |

## Examples

### Basic Toggle
```
typescript
import { useRexoraToggle } from '@rexora/hooks';

function BasicToggle() {
  const [isActive, toggleIsActive] = useRexoraToggle();

  return (
    <div>
      <p>Active: {isActive ? 'Yes' : 'No'}</p>
      <button onClick={toggleIsActive}>Toggle Active State</button>
    </div>
  );
}
```
### Initial Value