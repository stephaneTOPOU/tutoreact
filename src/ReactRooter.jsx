import {
  createBrowserRouter,
  defer,
  NavLink,
  Outlet,
  RouterProvider,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import { Single } from "./pages/singles.jsx";
import { Blog } from "./pages/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: "blog",
        element: (
          <div className="row">
            <aside className="col-3">
              <h2>SideBar</h2>
            </aside>
            <main className="col-9">
              <Outlet />
            </main>
          </div>
        ),
        children: [
          {
            path: "",
            element: <Blog />,
            loader: async () =>{
                const posts = fetch("https://jsonplaceholder.typicode.com/posts?_limit=10").then(r => r.json())
                return defer({
                    posts
                })
            }
            //Pour Blog.jsx  // fetch("https://jsonplaceholder.typicode.com/posts?_limit=10"),
          },
          {
            path: ":id",
            element: <Single />,
          },
        ],
      },
      {
        path: "contact",
        element: <div>Contact</div>,
      },
    ],
  },
]);

function PageError() {
  const error = useRouteError();

  return (
    <>
      <h1>Une erreur est sru</h1>
      <p>{error?.error?.toString() ?? error?.toString()}</p>
    </>
  );
}

function Root() {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <div className="container my-4">
        {state === "loading" && <Spinner />}
        <Outlet />
      </div>
    </>
  );
}

function Spinner() {
  return (
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
