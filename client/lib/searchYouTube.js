var searchYouTube = (query, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      part: 'snippet',
      maxResults: 5,
      q: query,
      'videoEmbeddable': true,
      type: 'video'
    },
    success: function(data) {
      console.log('successful query: ', data);
      return callback(data);
    },
    error: function(data) {
      console.error('Unsuccessful get request: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;



  // YT Search:list endpoint
  // $.ajax 'GET' request
    // url: GET https://www.googleapis.com/youtube/v3/search
    // options: { query: , max: , key: OURAPIKEY, onlygetembeddablevideos}
    // on success fn(data)
      // callback(data)
// Use $.ajax to send a GET request to the search endpoint. This is the only time you should use jQuery in this sprint
// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint
// Accept an options object with the following properties:
// query - the string to search for
// max - the maximum number of videos to get, which should default to 5
// key - an authorized YouTube Browser API key
// Only GET embeddable videos