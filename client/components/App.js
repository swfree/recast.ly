class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentVideoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
                  //   {
                  //     "id": {
                  //       "videoId": ""
                  //     },
                  //     "snippet": {
                  //       "title": "Video Title",
                  //       "description": "Video Discription",
                  //     }
                  //   }
    };
  }

  handleUserClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleUserSearch(videoList) {
    this.setState({
      currentVideoList: videoList
    });
  }

  render() {
    return (
      <div>
        <Nav onUserSearch={this.handleUserSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideoList} onUserClick={this.handleUserClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));
