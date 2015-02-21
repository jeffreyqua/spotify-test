// scripts.js
// JS Functions
// find template and compile it
var templateSource = document.getElementById('artist-results-template').innerHTML,
    template = Handlebars.compile(templateSource),
    trackTemplateSource = document.getElementById('track-results-template').innerHTML,
    trackTemplate = Handlebars.compile(trackTemplateSource),
    loadingSource = document.getElementById('loading-template').innerHTML,
    loadingTemplate = Handlebars.compile(loadingSource),
    resultsPlaceholder = document.getElementById('results'),
    trackResults = document.getElementById('tracks'),
    playingCssClass = 'playing',
    audioObject = null;

var fetchTracks = function (albumId, callback) {
    $.ajax({
        url: 'https://api.spotify.com/v1/albums/' + albumId,
        success: function (response) {
            callback(response);
        }
    });
};

var searchAlbums = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'album'
        },
        success: function (response) {
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};

var searchArtists = function (query) {
  resultsPlaceholder.innerHTML = loadingTemplate();
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: query,
            type: 'artist'
        },
        success: function (response) {
          console.log(response);
            resultsPlaceholder.innerHTML = template(response);
        }
    });
};

var searchArtistsTracks = function (query) {
    $.ajax({
        url: 'https://api.spotify.com/v1/artists/'+query+'/top-tracks',
        data: {
            country: 'US'
        },
        success: function (response) {
          console.log(response);
            trackResults.innerHTML = trackTemplate(response);
            // trackResults.className='';
            $('#overlay').addClass('active');
            $('#tracks').removeClass('hidden');
        }
    });
};

document.getElementById('results').addEventListener('click', function (e) {
  var target = e.target.parentNode;
  if (target !== null && target.classList.contains('artist_box')) {
    var artist_id= target.getAttribute('data-artist-id');
    searchArtistsTracks(artist_id);
  }
});


document.getElementById('overlay').addEventListener('click', function (e) {
  // Hide overlay on click
  $('#overlay').removeClass('active');
  $('#tracks').addClass('hidden');
});


document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();
    searchArtists(document.getElementById('query').value);
}, false);