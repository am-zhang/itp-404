import { useLoaderData } from "react-router-dom";
import Card from "../Card";
import { addFavorite, deleteFavorite } from "../api";
import { toast } from "react-toastify";

export default function Index() {
  const artworks = useLoaderData();
  const notify = (text) => toast(text);
  function onAdd(props) {
    notify('Added "' + props.artwork.title + '" to bookmarks!');
    addFavorite(props.artwork);
  }
  function onDelete(props) {
    notify('Deleted "' + props.artwork.title + '" from bookmarks!');
    deleteFavorite(props.artwork);
  }
  return (
    <div className="index-page">
      <h1>Explore</h1>
      <div>
        {artworks.map((artwork) => {
          return (
            <Card
              artwork={artwork}
              key={artwork.id}
              onAdd={onAdd}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
}
