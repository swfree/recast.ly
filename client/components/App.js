class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }

  videoListEntryOnClick() {
    this.setState({
      currentVideo: () => console.log('clicked')
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.currentVideoList} state={this.state}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(< App />, document.getElementById('app'));