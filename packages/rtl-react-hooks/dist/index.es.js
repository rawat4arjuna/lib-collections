import { useReducer as E } from "react";
function n(s, e) {
  switch (e.type) {
    case "SET_STATE":
      return { ...s, ...e.payload };
    case "RESET_STATE":
      return {};
    case "REMOVE_STATE":
      const { [e.key]: r, ...o } = s;
      return o;
    default:
      throw new Error(`Unhandled action type: ${e.type}`);
  }
}
function c(s = {}) {
  const [e, r] = E(n, s);
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
  c as useRtlState
};
