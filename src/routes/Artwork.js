import { Link, Outlet, useLoaderData } from "react-router-dom";

export default function Artwork() {
  const artwork = useLoaderData();
  return (
    <div className="post-page">
      <h1>{artwork.title}</h1>
      <h4>{artwork.artist}</h4>
      <p>{artwork.year}</p>
      <img src={artwork.image} alt={artwork.alt_text} />

      {/* <h3>Comments</h3>

      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <Link to={`/posts/${post.id}/comments`} className="nav-link">
            Comments ({post.comments.length})
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/posts/${post.id}/comments/new`} className="nav-link">
            Leave a Comment
          </Link>
        </li>
      </ul> */}

      <Outlet />
    </div>
  );
}
