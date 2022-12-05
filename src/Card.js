import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
              </Link>
            </h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.artist}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artwork.year}
            </h6>
            <FontAwesomeIcon icon={faBookmark} />
            {/* <p className="card-text text-muted">{props.artwork.year}</p> */}
            {/* <p className="card-text">{props.post.body.substring(0, 100)}...</p>
            <Link to={`/posts/${props.post.id}`} className="card-link">
              Read
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
