import { useLoaderData } from "react-router-dom";
import Card from "../Card";

export default function Bookmarks() {
  const bookmarks = useLoaderData();
  return (
    <div className="contact-page">
      <h1>Bookmarks</h1>
      <div>
        {bookmarks.map((artwork) => {
          return <Card artwork={artwork} key={artwork.id} />;
        })}
      </div>
    </div>
  );
}
