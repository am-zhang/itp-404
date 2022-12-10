import { useLoaderData } from "react-router-dom";
import Checkbox from "../Checkbox";

export default function Admin() {
  const comments = useLoaderData();
  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <Checkbox
        // label="All"
        isIndeterminate={true}
        onChange={(isChecked) => {}}
      />
      <ol>
        {comments.map((comment) => {
          return (
            <div key={comment.id}>
              <Checkbox
                // label="All"
                isIndeterminate={false}
                onChange={(isChecked) => {}}
              />
              <p>{comment.body}</p>
              <hr />
            </div>
          );
        })}
      </ol>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
}
