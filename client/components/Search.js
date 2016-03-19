var Search = (props) => {
  var handleUserSearch = () => {
    var userQuery = $('.form-control').val();

    var debouncedSearch = _.debounce(searchYouTube, 400);

    debouncedSearch(userQuery, function(data) {
      props.onUserSearch(data.items);
    });
  };

  return (
    <div className="search-bar form-inline">
      <input onChange={handleUserSearch} className="form-control" type="text" />
      <button onClick={handleUserSearch} className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div> 
  );
};

window.Search = Search;
