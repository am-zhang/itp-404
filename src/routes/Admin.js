import { useLoaderData } from "react-router-dom";

export default function Admin() {
  const comments = useLoaderData();
  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <ol>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <p>{comment.body}</p>
              <hr />
            </div>
          );
        })}
      </ol>
    </div>
  );
}
