class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentVideoList: [],
      currentVideo: {
        "id": {
          "videoId": ""
        },
        "snippet": {
          "title": "There is no video",
          "description": "There is no description"
        }
      }
    };
  }

  componentDidMount() {
    searchYouTube('bunnies', (data) => {
      this.setState({
        currentVideoList: data.items,
        currentVideo: data.items[0],
      });
    });
  }

  handleUserClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  handleUserSearch(videoList) {
    this.setState({
      currentVideoList: videoList,
      currentVideo: videoList[0]
    });
  }

  render() {
    return (
      <div ref="ourApp">
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
