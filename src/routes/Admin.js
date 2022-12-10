import { useLoaderData } from "react-router-dom";
import Checkbox from "../Checkbox";
import { useState } from "react";
import { deleteComment } from "../api";
import { toast } from "react-toastify";
import { Form } from "react-router-dom";

export default function Admin() {
  const notify = (text) => toast(text);
  const comments = useLoaderData();
  const [rows, setRows] = useState(comments);
  let defaultSelected = [];
  for (let i = 0; i < rows.length; i++) {
    defaultSelected.push(false);
  }
  const [selected, setSelected] = useState(defaultSelected);
  const [anySelected, setAnySelected] = useState(false);

  function onDelete() {
    // deleteComment(props.id);
    let ids = [];
    for (let i = 0; i < selected.length; i++) {
      if (selected[i]) {
        ids.push(i);
      }
    }
    if (ids.length === selected.length) {
      notify("All comments have been deleted!");
    }
    console.log(ids);
    let newRow = [];
    for (let i = 0; i < rows.length; i++) {
      if (!ids.includes(i)) {
        newRow.push(i);
      }
    }
    console.log(newRow);
    setRows(newRow);
    console.log(rows);
  }

  const isTrue = (element) => element === true;

  return (
    <div className="admin-page">
      <h1>Admin</h1>
      <Form action="/admin">
        <Checkbox
          isIndeterminate={anySelected}
          onChange={(isChecked) => {
            if (isChecked) {
              let tempSelected = [];
              for (let i = 0; i < selected.length; i++) {
                tempSelected.push(true);
              }
              setSelected(tempSelected);
              console.log(tempSelected);
            }
          }}
        />
        <ol>
          {comments.map((comment, index) => {
            return (
              <div key={comment.id}>
                <Checkbox
                  checked={selected[index]}
                  onChange={(isChecked) => {
                    let selectedCpy = selected;
                    selectedCpy[index] = isChecked;
                    setSelected(selectedCpy);
                    setAnySelected(selected.some(isTrue));
                  }}
                />
                <p>{comment.body}</p>
                <hr />
              </div>
            );
          })}
        </ol>
        <button
          className="btn btn-sm btn-danger"
          onClick={(event) => {
            // onDelete(props);

            onDelete();
          }}
        >
          Delete
        </button>
      </Form>
    </div>
  );
}
