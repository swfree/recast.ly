var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map( (videoData, index) => <VideoListEntry key={index} data={videoData} onUserClick={props.onUserClick} />)}
  </div>
);

window.VideoList = VideoList;
