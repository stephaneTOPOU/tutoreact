import { Suspense } from "react";
import { Await, NavLink, useAsyncValue, useLoaderData } from "react-router-dom";

export function Blog() {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <>
      <h1>Mon Blog</h1>
      <Suspense fallback={<Spinner />}>
        <Await resolve={posts}>
          <PostList />
        </Await>
      </Suspense>
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

function PostList() {
  const posts = useAsyncValue();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <NavLink to={post.id}>{post.title}</NavLink>
        </li>
      ))}
    </ul>
  );
}
