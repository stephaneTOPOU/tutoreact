
import { useState } from "react";

function App() {

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    
    const [value, setValue] = useState('')
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const [checked, setChecked] = useState(false)
    const toggleChecked = () => {
        setChecked(!checked)
    }
  return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Prénom" name="firstname" value={value} onChange={handleChange} />
        <input type="text" placeholder="Nom" name="lastname" value={value} onChange={handleChange} />
        <input type="number" placeholder="Âge" name="age" value={value} onChange={handleChange} />
        <input type="checkbox" name="subscribe" checked={checked} onChange={toggleChecked} />
        <textarea name="description" id="" value={value} onChange={handleChange} rows={5}></textarea>
        <button type="submit" disabled={!checked}>Ajouter</button>
      </form>
    
}

export default App;
