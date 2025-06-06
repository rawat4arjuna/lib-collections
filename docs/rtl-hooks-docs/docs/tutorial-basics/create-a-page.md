---
sidebar_position: 1
---

# useNexoraState()

The `useNexoraState()` hook is part of the **Nexora** library — a powerful collection of custom React hooks and utilities designed to simplify and streamline state management in your applications.

Use it in any React component to manage local state with a clean and intuitive API.

## Basic Usage

Create a new React page to try `useNexoraState()` in action:

### Example: `useNexoraState()` Counter

Create a file at `src/pages/use-nexora-state-example.js`:

```jsx title="src/pages/use-nexora-state-example.js"
import React from 'react';
import Layout from '@theme/Layout';
import { useNexoraState } from 'nexora';

type Props = {};

export default function Sample({}: Props) {
  const [state, setState] = useNexoraState({ count: 0 });
  const { count } = state;

  return (
    <Layout>
      <h1>useNexoraState Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setState({ count: count + 1 })}>Increment</button>
      <button onClick={() => setState({ count: count - 1 })}>Decrement</button>
      <button onClick={() => setState({ count: 0 })}>Reset</button>
    </Layout>
  );
}
