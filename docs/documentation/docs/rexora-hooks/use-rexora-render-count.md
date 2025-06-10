# useRexoraRenderCount

The `useRexoraRenderCount` hook tracks and returns the number of times a component has rendered. This hook is primarily useful for debugging and understanding component render behavior.



## Usage
```
jsx
import { useRexoraRenderCount } from '@rexora/hooks'; // Assuming your package name

function MyComponent() {
  const renderCount = useRexoraRenderCount();

  return (
    <div>
      <p>This component has rendered {renderCount} times.</p>
      {/* Your component content */}
    </div>
  );
}
```
## Parameters

This hook takes no parameters.

## Return Value

The hook returns a single number:

*   `renderCount`: A number representing the total number of times the component has rendered since it was mounted.

## Description

`useRexoraRenderCount` increments a counter each time the component renders. It initializes the counter to 1 on the first render and increases it on every subsequent render. This can be helpful for identifying unnecessary re-renders in your components, which can impact performance.

It's important to note that this hook should primarily be used for development and debugging purposes and should generally be removed in production builds due to the slight overhead of tracking the render count.