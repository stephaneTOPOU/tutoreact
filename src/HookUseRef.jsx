import { useEffect, useRef, useState } from "react";
import { Input } from "./components/forms/Input";

function App() {
  const prefixRef = useRef(null);
  const [prefix, setPrefix] = useState("");
  prefixRef.current = prefix
  const ref = useRef(null)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="container my-3 vstack gap-2">
      <Input label="prefix" value={prefix} onChange={setPrefix} />
      <Input label="suffix" inputRef={ref} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium
      tempore culpa fugiat? Saepe et natus hic sit? Commodi nemo reprehenderit
      doloremque, recusandae dignissimos voluptate vero illum quae odio officia!
    </div>
  );
}

export default App;
