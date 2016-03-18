var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map( (videoData, index) => <VideoListEntry key={index} data={videoData} state={props.state} />)}
  </div>
);

window.VideoList = VideoList;
