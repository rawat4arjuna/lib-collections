---
sidebar_position: 18
---

# useRexoraIdle

The `useRexoraIdle` hook detects if the user is idle based on their activity (mousemove, keydown, scroll, etc.).
It is imported from `@rexora/hooks`.

## Usage
```
typescript
import { useRexoraIdle } from 'rexora-hooks'; // Assuming rexora-hooks is your package name

function MyComponent() {
  const isIdle = useRexoraIdle(3000); // 3000ms = 3 seconds

  return (
    <div>
      {isIdle ? 'User is idle' : 'User is active'}
    </div>
  );
}
```
## Parameters

| Parameter | Type     | Description                                 | Default |
| :-------- | :------- | :------------------------------------------ | :------ |
| `timeout` | `number` | The time in milliseconds after which the user is considered idle. | `60000` (1 minute) |

## Return Value

The hook returns a boolean value:

*   `true`: The user is currently idle.
*   `false`: The user is currently active.

## Description

This hook tracks user activity by listening to common DOM events like `mousemove`, `keydown`, and `scroll`. If no such events occur within the specified `timeout` period, the hook's state changes to `true`, indicating the user is idle. Any subsequent activity resets the timer and sets the state back to `false`.

This hook is useful for implementing features like:

*   Displaying a "Are you still there?" prompt.
*   Logging out inactive users.
*   Pausing animations or other resource-intensive tasks when the user is away.

## Notes

*   The hook attaches event listeners globally to the `window` object.
*   Ensure the component using this hook is mounted for the listeners to be active. The listeners are cleaned up automatically when the component unmounts.