import { useLoaderData } from "react-router-dom";
import Card from "../Card";

export default function Index() {
  const artworks = useLoaderData();

  return (
    <div className="index-page">
      <h1>Explore</h1>
      <div>
        {artworks.map((artwork) => {
          return <Card artwork={artwork} key={artwork.id} />;
        })}
      </div>
    </div>
  );
}
