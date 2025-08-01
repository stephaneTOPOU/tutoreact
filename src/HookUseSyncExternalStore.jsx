import { Counter } from "./counter.jsx";
import { useOline } from "./hooks/useOnline.js";

function App() {
  const isOnLine = useOline();
  return (
    <>
      <h1>{isOnLine ? "En ligne" : "Hord ligne"}</h1>

      <Counter/>
      <Counter/>
    </>
  );
}

export default App;
