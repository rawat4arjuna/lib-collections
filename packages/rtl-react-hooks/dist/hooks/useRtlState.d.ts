type State = Record<string, any>;
declare function useRtlState<T extends State = State>(initialState?: T): [T, (key: keyof T | Partial<T>, value?: any) => void, (key: keyof T) => void, () => void];
export default useRtlState;
