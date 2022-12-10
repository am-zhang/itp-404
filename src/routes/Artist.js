export default function Artist(props) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <h2 className="card-title" data-testid="artist-name">
              {props.artist.name}
            </h2>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artist.dates}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {props.artist.bio}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
