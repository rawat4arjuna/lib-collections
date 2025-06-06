---
sidebar_position: 1
---

# userexoraState()

The `userexoraState()` hook is part of the **rexora** library — a powerful collection of custom React hooks and utilities designed to simplify and streamline state management in your applications.

Use it in any React component to manage local state with a clean and intuitive API.

## Basic Usage

Create a new React page to try `userexoraState()` in action:

### Example: `userexoraState()` Counter

Create a file at `src/pages/use-rexora-state-example.js`:

```jsx title="src/pages/use-rexora-state-example.js"
import React from 'react';
import Layout from '@theme/Layout';
import { userexoraState } from 'rexora';

type Props = {};

export default function Sample({}: Props) {
  const [state, setState] = userexoraState({ count: 0 });
  const { count } = state;

  return (
    <Layout>
      <h1>userexoraState Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setState({ count: count + 1 })}>Increment</button>
      <button onClick={() => setState({ count: count - 1 })}>Decrement</button>
      <button onClick={() => setState({ count: 0 })}>Reset</button>
    </Layout>
  );
}
