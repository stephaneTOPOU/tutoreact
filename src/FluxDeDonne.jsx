import { useState } from "react";

function App() {

    const [isTermAccepted, setIsTermAccepted] = useState(false)
    
    return <form>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>
}


function CGUCheckbox ({checked, onCheck}) {
    return <div>
        <label>
            <input type="checkbox" checked={checked} onChange={e => onCheck(e.target.checked)} /> j'accepte les conditons générales d'utilisation
            <br />
        </label>
    </div>
}


export default App;