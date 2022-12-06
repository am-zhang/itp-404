import { Outlet, useLoaderData } from "react-router-dom";

export default function Artwork() {
  const artwork = useLoaderData();
  return (
    <div className="post-page">
      <h1>{artwork.title}</h1>
      <h4>{artwork.artist}</h4>
      <p>{artwork.year}</p>
      <img src={artwork.image} alt={artwork.alt_text} />

      <Outlet />
    </div>
  );
}
