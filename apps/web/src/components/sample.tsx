import React, { useState } from "react";
import { useRexoraState } from "@rexora/hooks";
type Props = {};

export default function Sample({}: Props) {
  const [state, setState] = useRexoraState({ count: 0 });
  const { count } = state;
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => setState({ count: count + 1 })}>Increment</button>
      <button onClick={() => setState({ count: count + 1 })}>Decrement</button>
      <button onClick={() => setState({ count: 0 })}>Reset</button>
    </div>
  );
}
