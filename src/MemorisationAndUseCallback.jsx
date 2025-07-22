import { useState, memo, useRef, useCallback } from "react";
import { Input } from "./components/forms/Input";
// import { waitSync} from "./utils/waitSync.js"


function App() {
  
  const [name, setName] = useState("");
  const namRef = useRef(name)
  namRef.current = name

  const handleClick = useCallback(() => {
    console.log(namRef.current);
  }, []);

  return (
    <div className="container my-2 vstack gap-2">
      <div>
      <Input label="prenom" onChange={setName} value={name} />
      <div>{name.toUpperCase()}</div>
    </div>
      <InfoMemo onClick={handleClick} />
    </div>
  );
}


const InfoMemo = memo(function Info ({ onClick }) {
  console.log('Info', 'render');
  
  // waitSync(500)
  return (
    <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae aliquam
      velit voluptatem quisquam, alias voluptates magnam, repellat voluptatibus,
      debitis dolore a omnis molestias quam. Soluta aut ipsa neque praesentium
      dolorum.
    </div>
  );
})

export default App;
