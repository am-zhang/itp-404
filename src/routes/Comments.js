import { useLoaderData } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();

  return (
    <ol>
      {comments.map((comment) => {
        return <li key={comment.id}>{comment.body}</li>;
      })}
    </ol>
  );
}
