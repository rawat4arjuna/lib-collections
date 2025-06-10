---
title: useRexoraHover
sidebar_label: useRexoraHover
---

# useRexoraHover

The `useRexoraHover` hook is a utility that detects whether a specified DOM element is currently being hovered over by the user's mouse. It provides a simple boolean value that updates in real-time based on mouse enter and leave events on the target element.

## Functionality

This hook takes a React ref object pointing to a DOM element. It attaches event listeners for `mouseenter` and `mouseleave` to this element. When the mouse pointer enters the element's boundary, the hook's internal state is updated to `true`. When the mouse pointer leaves the element's boundary, the state is updated back to `false`. The hook returns this boolean state.

To use `useRexoraHover`, import it from `@rexora/hooks`:



This is particularly useful for implementing UI elements that respond to hover states, such as tooltips, dropdowns, or visual changes on hover, without manually managing event listeners in your components.

## Parameters

- `elementRef`: A React `RefObject` that is attached to the DOM element you want to track hover state for.

## Return Value

- `isHovering`: A boolean value that is `true` when the element referenced by `elementRef` is being hovered over, and `false` otherwise.

## Usage Examples
```
jsx
import React, { useRef } from 'react';
import { useRexoraHover } from '@rexora/hooks'; 

function MyComponent() {
  const elementRef = useRef(null);
  const isHovering = useRexoraHover(elementRef);

  return (
    <div
      ref={elementRef}
      style={{
        width: '200px',
        height: '100px',
        backgroundColor: isHovering ? 'lightblue' : 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isHovering ? 'Hovering!' : 'Not Hovering'}
    </div>
  );
}

export default MyComponent;
```
In this example, the `useRexoraHover` hook is used to change the background color of a `div` element based on its hover state. The `elementRef` is created with `useRef` and attached to the `div`. The `isHovering` value returned by the hook controls the conditional styling and text content.