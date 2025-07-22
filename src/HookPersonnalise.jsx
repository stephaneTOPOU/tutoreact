import { useState } from "react";
import { Input } from "./components/forms/Input";
import { useDocumentTitles } from "./hooks/useDocumentTitles";
import { useIncrement } from "./hooks/useIncrement";
import { useToggle } from "./hooks/useToggle";

function App() {

  const [checked, toggleCheck] = useToggle();
  const {count, increment, decrement} = useIncrement({base : 0, max: 10, min: 0});

  const [name, setName] = useState('')
  useDocumentTitles(name ? `Editer - ${name}` : null)
  return (
    <div className="container my-3 vstack gap-2">
      <input type="checkbox" checked={checked} onChange={toggleCheck} />
      {checked && "Je suis coché"}

      <Input value={name} onChange={setName} label="Nom" />

      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>

    </div>
  );
}

export default App;
