console.log('keys.js loaded');

exports.spotify = {
  id:process.env.SPOT_ID, 
  // process.env.SPOTIFY_ID,
  secret: process.env.SPOT_KEY 
  // process.env.SPOTIFY_SECRET
};

exports.OMDB_KEY= process.env.OMDB_KEY