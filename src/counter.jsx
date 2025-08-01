import { $count, increment, useSignalValue } from "./hooks/useCount.js";

export function Counter() {
  const count = useSignalValue($count);
  return <button onClick={increment}>Incrémenter {count} </button>;
}
