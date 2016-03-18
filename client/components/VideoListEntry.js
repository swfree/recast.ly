var VideoListEntry = (props) => {
  varchangeCurrentVideo 

  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={props.data.snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{props.data.snippet.title}</div>
        <div className="video-list-entry-detail">{props.data.snippet.description}</div>
      </div>
    </div>
  );
}

window.VideoListEntry = VideoListEntry;
