import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import * as liri from "./liriBot/liri.js"


class TerminalBrowser extends Component {

  constructor(props){
    super(props)
    this.state={backgroundColor:"black"}
  }

  // showMsg = () => 'Hello World'
  
   isColor(strColor){
    var s = new Option().style;
    s.color = strColor;
    return s.color === strColor;
  }

  render(props) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >


        <Terminal
         watchConsoleLogging
         startState = 'maximised' 
          color='lightgreen'
          backgroundColor={this.state.backgroundColor}
          barColor='white'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            'change-background-color':
            (args, runCommand) => {
            const text = args.slice(1).join(' ');
            if(this.isColor(text))
            {
              this.setState({backgroundColor:text})
            }
            else{
              console.log("That is not a valid color")
            }
            },

            // showmsg: this.showMsg,
            // popup: () => alert('Terminal in React'),
            'movie-this': 
            (args, print, runCommand) => {
            const text = args.slice(1).join(' ');
            console.log(text)
            liri.showMovieInfo(text)
            },
            'concert-this':
            (args, print, runCommand) => {
            const text = args.slice(1).join(' ');
            console.log(text)
            liri.showConcertInfo(text)
            },
            'spotify-this-song':
            (args, print, runCommand) => {
            const text = args.slice(1).join(' ');
            console.log(text)
            liri.showSongInfo(text)
            },
          }}
          descriptions={{
            'open-google': 'opens google.com',
            "change-background-color":'Change the background color, if valid color string for your browser.',
            // showmsg: 'shows a message',
            // alert: 'alert', 
            // popup: 'alert',
            "movie-this": "Search the IMDB database for movie results, e.g. 'movie-this Batman'.",
            "concert-this": "Search the Events in Town database for concert information, e.g. 'concert-this The Weekend'.",
            "spotify-this-song":"Searches Spotify API for given song, e.g. 'spotify-this-song Sail Away'.",
            
          }}
          msg="Type 'help' to get a list of commands."
        />
      </div>
    );
  }
}

export default TerminalBrowser;