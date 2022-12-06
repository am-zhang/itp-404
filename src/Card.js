import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { addFavorite } from "./api";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Card(props) {
  const notify = (text) => toast(text);

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
              </Link>
            </h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.artist}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.year}
            </h6>
            <button
              onClick={(event) => {
                notify('Added "' + props.artwork.title + '" to bookmarks!');
                addFavorite(props.artwork);
              }}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
