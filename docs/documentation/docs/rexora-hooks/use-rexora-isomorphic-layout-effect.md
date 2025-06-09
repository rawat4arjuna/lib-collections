---
id: use-rexora-isomorphic-layout-effect
title: useRexoraIsomorphicLayoutEffect
---

The `useRexoraIsomorphicLayoutEffect` hook is an isomorphic version of React's `useLayoutEffect`. It functions identically to `useLayoutEffect` on the client-side, running synchronously after all DOM mutations. However, unlike `useLayoutEffect`, it gracefully degrades to a `useEffect` on the server-side to prevent warnings and errors during server rendering.

This hook is useful when you need to perform DOM measurements or manipulate the DOM immediately after a render, but you also want your application to support server-side rendering without issues.

## Usage
```
typescript
import { useRexoraIsomorphicLayoutEffect } from '@rexora/hooks';

function MyComponent() {
  const [height, setHeight] = React.useState(0);
  const elementRef = React.useRef(null);

  useRexoraIsomorphicLayoutEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, [elementRef.current]);

  return (
    <div ref={elementRef}>
      Content with dynamic height. Height: {height}px
    </div>
  );
}
```
## Parameters

| Parameter | Type                                   | Description                                                                 |
| :-------- | :------------------------------------- | :-------------------------------------------------------------------------- |
| `effect`  | `() => void \| (() => void)`            | The function to run after DOM mutations. Can optionally return a cleanup function. |
| `deps`    | `React.DependencyList \| undefined` | An array of dependencies. The effect will re-run if these dependencies change. |

## Return Value

This hook does not return a value. Similar to `useEffect` and `useLayoutEffect`, the primary interaction is through the side effect defined in the `effect` callback and the optional cleanup function it returns.

## Notes

*   On the client, this hook runs synchronously after all DOM mutations.
*   On the server, this hook runs asynchronously like `useEffect`.
*   Use this hook when you need DOM access immediately after render and support server-side rendering. For effects that don't require DOM measurement or manipulation, use `useEffect`.