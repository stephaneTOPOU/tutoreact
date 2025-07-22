import { useFetch } from "./hooks/useFetch";

function App() {
  const { loading, data, errors } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000"
  );

  return (
    <div className="container my-3 vstack gap-2">
      {loading && <div>Chargement...</div>}
      {errors && <div className="alert alert-danger">Erreur: {errors.toString()}</div>}
      {data && (
        <div>
          <ul>
            {data.map(post => (<li key={post.id}>{post.title}</li>))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
