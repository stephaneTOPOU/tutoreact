// const todo = [
//   'Présenter React',
//   'Présenter JSX',
//   'Créer des composants'
// ]

import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  //console.log('render')
  
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  });

  const gagner = () => {
    setPerson({...person, age: person.age + 1 });
  };

  return (
    <>


      {/* <Title color="green">Mon composant</Title>
      <ul>
        {todo.map(todo => (<li key={todo}>{todo}</li>))}
      </ul> */}



      <p>Compteur : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <br />
      <br />
      <button onClick={decrement}>Décrémenter</button>

      <p>Age de {person.firstName} : {person.age}</p>
      <button onClick={gagner}>Gagner en âge</button>
    </>
  );
}

// function Title({ color, children }) {
//   return (
//     <h1 id="title" style={{ color: color }}>
//       {children}
//     </h1>
//   );
// }

export default App;
