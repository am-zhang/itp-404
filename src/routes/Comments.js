import { Form, useLoaderData, useParams } from "react-router-dom";

export default function Comments() {
  const comments = useLoaderData();
  const params = useParams();
  const postId = params.id;

  return (
    <ol>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.body}</p>

            <Form method="post" action={`/comments/${comment.id}/destroy`}>
              <input type="hidden" name="postId" value={postId} />
              <button type="submit" className="btn btn-sm btn-danger">
                Delete
              </button>
            </Form>
            <Form method="post" action={`/comments/${comment.id}/update`}>
              <input type="hidden" name="postId" value={postId} />
              <button type="submit" className="btn btn-sm btn-secondary">
                Update
              </button>
            </Form>
            <hr />
          </div>
        );
      })}
    </ol>
  );
}
