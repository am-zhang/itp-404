import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTrash } from "@fortawesome/free-solid-svg-icons";

import "react-toastify/dist/ReactToastify.css";

export default function Card(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <img
            src={props.artwork.image}
            alt={props.artwork.alt_text}
            style={{ height: "200px", width: "auto" }}
          />

          <div className="col">
            <h2 className="card-title">
              <Link to={`/artworks/${props.artwork.id}`} className="card-link">
                {props.artwork.title}
              </Link>{" "}
              <button
                className="btn"
                onClick={(event) => {
                  props.onAdd(props);
                }}
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
              <button
                className="btn"
                onClick={(event) => {
                  props.onDelete(props);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.artist}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.year}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
