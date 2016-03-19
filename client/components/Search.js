var Search = (props) => {
  var handleUserSearch = () => {
   // console.log(this.value);
    searchYouTube('rihanna', function(data) {
      props.onUserSearch(data.items);
    });
  };

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" defaultValue="rihanna" />
      <button onClick={handleUserSearch} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

window.Search = Search;
