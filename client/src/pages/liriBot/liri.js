// environment variables
require("dotenv").config();
//variables
var request = require("request");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify||prod_spot_keys)
var fs = require("fs");
var logs=require("./log.js");

// var time = moment().format('HH:mm:ss');
var axios = require("axios");

let prod_spot_keys={
  id:process.env['SPOT_ID'],
  key:process.env['SPOT_KEY']
}

//vars to capture user inputs.
var userOption = process.argv[2];
var inputParameter = process.argv.slice(3).join(' ');

//Execute function
UserInputs(userOption, inputParameter);

//Switch Statement
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

//Funtion for Concert Info: Bands in Town
function showConcertInfo(inputParameter) {
    if (inputParameter === undefined||inputParameter==="") {
        inputParameter = "The Weekend";
      }   
      // console.log(inputParameter)
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

//Funtion for Music Info: Spotify
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

let omdbKey=keys['OMDB_KEY']||process.env.OMDB_KEY
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
      // console.log(response)
      var movie = response.data;
      // console.log(movie)
      // console.log(movie.data)
      // console.log(movie.Actors)
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



//function for reading out of random.txt file
function showSomeInfo() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }else
  {
    var dataArr = data.split(",");
    UserInputs(dataArr[0], dataArr[1]);
  }
  });
}





module.exports ={logs, showConcertInfo, showMovieInfo, showSomeInfo, showSongInfo, UserInputs}


//****************************************************************************************************************************************/
// module.exports={getRottenTomatoesRatingValue,getRottenTomatoesRatingObject};
// function showConcertInfo0(inputParameter){

// // Grab the axios package...
// var axios = require("axios");

// // Then run a request with axios to the OMDB API with the movie specified
// var queryUrl = "https://rest.bandsintown.com/artists/" + inputParameter + "/events?app_id=codingbootcamp";

// axios
//   .get(queryUrl)
//   .then(function(response) {

//     var concerts = JSON.parse(response.data);
//     for (var i = 0; i < concerts.length; i++) {
//         console.log("**********EVENT INFO*********");
//         //fs.appendFileSync("log.txt", "**********EVENT INFO*********\n");//Append in log.txt file
//         console.log(i);
//         //fs.appendFileSync("log.txt", i+"\n");
//         console.log("Name of the Venue: " + concerts[i].venue.name);
//         //fs.appendFileSync("log.txt", "Name of the Venue: " + concerts[i].venue.name+"\n");
//         console.log("Venue Location: " +  concerts[i].venue.city);
//         //fs.appendFileSync("log.txt", "Venue Location: " +  concerts[i].venue.city+"\n");
//         console.log("Date of the Event: " +  concerts[i].datetime);
//         //fs.appendFileSync("log.txt", "Date of the Event: " +  concerts[i].datetime+"\n");
//         console.log("*****************************");
//         //fs.appendFileSync("log.txt", "*****************************"+"\n");
//     }

// })
//   .catch(function(error) {
//     if (error.response) {
//       // The request was made and the server responded with a status code
//       // that falls out of the range of 2xx
//       console.log(error.response.data);
//       console.log(error.response.status);
//       console.log(error.response.headers);
//     } else if (error.request) {
//       // The request was made but no response was received
//       // `error.request` is an object that comes back with details pertaining to the error that occurred.
//       console.log(error.request);
//     } else {
//       // Something happened in setting up the request that triggered an Error
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
//   });

// }
