import { useEffect, useRef, useState } from "react";
import { Input } from "./components/forms/Input";

function App() {
  const prefixRef = useRef(null);
  const [prefix, setPrefix] = useState("");
  prefixRef.current = prefix
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(prefixRef.current);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <Input label="prefix" value={prefix} onChange={setPrefix} />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laudantium
      tempore culpa fugiat? Saepe et natus hic sit? Commodi nemo reprehenderit
      doloremque, recusandae dignissimos voluptate vero illum quae odio officia!
    </div>
  );
}

export default App;
