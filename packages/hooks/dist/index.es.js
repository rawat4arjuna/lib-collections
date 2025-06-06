import { useReducer as E } from "react";
function n(o, e) {
  switch (e.type) {
    case "SET_STATE":
      return { ...o, ...e.payload };
    case "RESET_STATE":
      return {};
    case "REMOVE_STATE":
      const { [e.key]: r, ...s } = o;
      return s;
    default:
      throw new Error(`Unhandled action type: ${e.type}`);
  }
}
function c(o = {}) {
  const [e, r] = E(n, o);
  return [e, (t, a) => {
    if (typeof t == "string")
      r({ type: "SET_STATE", payload: { [t]: a } });
    else if (typeof t == "object")
      r({ type: "SET_STATE", payload: t });
    else
      throw new Error("Invalid key type. Key must be a string or an object.");
  }, (t) => {
    r({ type: "REMOVE_STATE", key: t });
  }, () => {
    r({ type: "RESET_STATE" });
  }];
}
export {
  c as useRexoraState
};
