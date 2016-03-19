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
      console.log('Successful get request: ', data);
      callback(data);
    },
    error: function(data) {
      console.error('Unsuccessful get request: ', data);
    }
  });
};

window.searchYouTube = searchYouTube;