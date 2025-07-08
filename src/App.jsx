
const todo = [
  'Présenter React',
  'Présenter JSX',
  'Créer des composants'
]

function App() {
  return (
    <>
      <Title color="red">Mon composant</Title>

      <input type="text" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        perspiciatis at minus animi perferendis. Placeat quam nostrum ab ad
        doloremque dignissimos ratione facere cumque quas odit. Autem maiores
        ducimus quo?
      </p>

      <ul>
        {todo.map(todo => (<li key={todo}>todo</li>))}
      </ul>
    </>
  )
}

function Title ({color, children}) {
  return <h1 id="title" style={{ color: color }}>{children}</h1>;
}

export default App;
