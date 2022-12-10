import { Outlet, useLoaderData, Link } from "react-router-dom";
import Artist from "./Artist";

export default function Artists() {
  const artists = useLoaderData();
  return (
    <div className="artist-page">
      <h1>Artists</h1>
      <div>
        {artists.map((artist) => {
          return (
            <div key={artist.id}>
              <Artist artist={artist} />
            </div>
          );
        })}
      </div>
      <hr />
      <h2>Comments</h2>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <Link to={`/artists/comments`} className="nav-link">
            Comments
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/artists/comments/new`} className="nav-link">
            Leave a Comment
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
