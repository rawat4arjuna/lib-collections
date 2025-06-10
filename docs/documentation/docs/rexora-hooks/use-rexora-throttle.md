---
id: use-rexora-throttle
title: useRexoraThrottle
---

`useRexoraThrottle` is a custom React hook that throttles a value or a function. Throttling is a technique used to limit the rate at which a function or value is updated. When you throttle, the function is guaranteed to execute at most once within a specified time interval, even if it's called multiple times during that interval.

This hook is particularly useful for scenarios where you want to limit the frequency of updates caused by rapidly changing values or frequently triggered events, such as window resizing, scrolling, or continuous user input.

## Functionality

The `useRexoraThrottle` hook takes a value (or a function) and a delay as input. It returns the throttled version of the input.

If the input is a value, the hook will return the latest value that occurred within the throttling interval. Any changes to the value within the interval after the first change will be ignored until the interval has passed.

If the input is a function, the hook will return a new function that, when called, will execute the original function at most once within the specified delay.

## Parameters



-   `value`: The value or function to throttle. This can be of any type.
-   `delay`: The time interval (in milliseconds) to throttle the updates.

## Return Value

-   If the input was a value, the hook returns the throttled value.
-   If the input was a function, the hook returns a new, throttled function.

## Usage Examples

### Throttling a Value
```
jsx
import React, { useState } from 'react';
import { useRexoraThrottle } from 'rexora-hooks';

function ValueThrottleExample() {
  const [inputValue, setInputValue] = useState('');
  const throttledValue = useRexoraThrottle(inputValue, 500); // Throttle with a 500ms delay

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Input Value: {inputValue}</p>
      <p>Throttled Value: {throttledValue}</p>
    </div>
  );
}
```
In this example, `throttledValue` will only update at most every 500 milliseconds, even if the user types continuously into the input field.

### Throttling a Function
```
jsx
import React, { useState, useCallback } from 'react';
import { useRexoraThrottle } from 'rexora-hooks';

function FunctionThrottleExample() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    setClickCount(prevCount => prevCount + 1);
  }, []);

  const throttledHandleClick = useRexoraThrottle(handleClick, 1000); // Throttle with a 1000ms delay

  return (
    <div>
      <button onClick={throttledHandleClick}>Click Me</button>
      <p>Click Count (throttled): {clickCount}</p>
    </div>
  );
}
```
Here, the `throttledHandleClick` function can only increment the click count at most once per second, regardless of how many times the button is clicked within that second.