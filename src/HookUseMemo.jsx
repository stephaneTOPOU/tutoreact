import { useMemo, useState } from "react";
import { Input } from "./components/forms/Input.jsx";

function App() {
  const [firstname, setFirstname] = useState('John');
  const [password, setPassword] = useState('MotDePasse');
  const security = useMemo(() => {
    return passwordSecurity(password)
  }, [password])

  return (
    <div className="container my-3 vstack gap-2">
      <Input
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />
      <div>
        <Input label="Mot de passe" value={password} onChange={setPassword} />
        Sécurité : {security}
      </div>
    </div>
  );
}

function passwordSecurity(password) {

    //fausse lenteur 
    let startTime = performance.now()
    while (performance.now() - startTime < 2) { }

  if (password.length < 3) {
    return "Faible";
  } else if (password.length < 6) {
    return "Moyen";
  }
  return "Fort";
}

export default App;
