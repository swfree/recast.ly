var VideoDetails = (props) => (
  <div className='video-player-details'>
      <h4>Channel: {props.video.snippet.channelTitle}</h4>
  </div>
);

window.VideoDetails = VideoDetails;
