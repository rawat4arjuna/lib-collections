import { useReducer } from "react";

// Types
type State = Record<string, any>;

type Action =
  | { type: "SET_STATE"; payload: State }
  | { type: "RESET_STATE" }
  | { type: "REMOVE_STATE"; key: string };

// Reducer function
function stateReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    case "RESET_STATE":
      return {};
    case "REMOVE_STATE":
      const { [action.key]: _, ...rest } = state;
      return rest;
    default:
      throw new Error(`Unhandled action type: ${(action as any).type}`);
  }
}

// Custom hook
function useRtlState<T extends State = State>(
  initialState: T = {} as T
): [T, (key: keyof T | Partial<T>, value?: any) => void, (key: keyof T) => void, () => void] {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const setState = (
    key: keyof T | Partial<T>,
    value?: any
  ) => {
    if (typeof key === "string") {
      dispatch({ type: "SET_STATE", payload: { [key]: value } });
    } else if (typeof key === "object") {
      dispatch({ type: "SET_STATE", payload: key });
    } else {
      throw new Error("Invalid key type. Key must be a string or an object.");
    }
  };

  const resetState = () => {
    dispatch({ type: "RESET_STATE" });
  };

  const removeState = (key: keyof T) => {
    dispatch({ type: "REMOVE_STATE", key: key as string });
  };

  return [state as T, setState, removeState, resetState];
}

export default useRtlState;
