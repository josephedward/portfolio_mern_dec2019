require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify)
let omdbKey = keys['OMDB_KEY']
var logs=require("./log.js");
var axios = require("axios");
var userOption = process.argv[2];
var inputParameter = process.argv.slice(3).join(' ');


UserInputs(userOption, inputParameter);

function UserInputs(userOption, inputParameter) {
  switch (userOption) {
    case "concert-this":
      showConcertInfo(inputParameter);
      break;
    case "spotify-this-song":
      showSongInfo(inputParameter);
      break;
    case "movie-this":
      showMovieInfo(inputParameter);
      break;
    case "do-what-it-says":
      showSomeInfo();
      break;
    default:
      console.log(
        "Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says"
      );
  }
}


function showConcertInfo(inputParameter) {
    if (inputParameter === undefined||inputParameter==="") {
        inputParameter = "The Weekend";
      }   
  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    inputParameter +
    "/events?app_id=codingbootcamp";

    axios
    .get(queryUrl)
    .then(function (response) {
      var concerts = response.data;
      for (var i = 0; i < concerts.length; i++) {
                console.log("**********EVENT INFO*********");
                console.log(i);
                console.log("Name of the Venue: " + concerts[i].venue.name);
                console.log("Venue Location: " + concerts[i].venue.city);
                console.log("Date of the Event: " + concerts[i].datetime);
                console.log("*****************************");
              }
    })
    .catch(function (error) {
      console.log("error :",error);
    });

}

function showSongInfo(inputParameter) {
  
  if (inputParameter === undefined||inputParameter==="") {
    inputParameter = "Separate Ways";
  }
  spotify.search(
    {
      type: "track",
      query: inputParameter

    })
  .then(function (response) {
    var songs = response.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      console.log("**********SONG INFO*********");
      console.log(i);
      console.log("Song name: " + songs[i].name);
      console.log("Preview song: " + songs[i].preview_url);
      console.log("Album: " + songs[i].album.name);
      console.log("Artist(s): " + songs[i].artists[0].name);
      console.log("*****************************");
    }
  
  })
  .catch(function (error) {
    console.log("error :",error);
  });
  
  
  ;
}


function showMovieInfo(inputParameter) {
  console.log("inputParameter : ",inputParameter)

    if (inputParameter === undefined||inputParameter==="") {
      inputParameter = "The Matrix";
    }
    var queryUrl =
      "http://www.omdbapi.com/?t=" +
      inputParameter +
      `&y=&plot=short&apikey=${omdbKey}`;

    axios
    .get(queryUrl)
    .then(function (response) {
      var movie = response.data;
      console.log("**********MOVIE INFO*********");
      console.log("Title: " + movie.Title);
      console.log("Release Year: " + movie.Year);
      console.log("IMDB Rating: " + movie.imdbRating);
      console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
      console.log("Country of Production: " + movie.Country);
      console.log("Language: " + movie.Language);
      console.log("Plot: " + movie.Plot);
      console.log("Actors: " + movie.Actors);
      console.log("*****************************");
    })
    .catch(function (error) {
      console.log("error :",error);
    });
}


function showSomeInfo() {

}





module.exports ={logs, showConcertInfo, showMovieInfo, showSomeInfo, showSongInfo, UserInputs}

