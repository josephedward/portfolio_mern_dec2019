import React, { Component } from 'react';
import Terminal from 'terminal-in-react';
import {logs, showConcertInfo, showMovieInfo, showSomeInfo, showSongInfo, UserInputs} from "./liriBot/liri";

import { execSync } from 'child_process';  // replace ^ if using ES modules
// var term = require( 'terminal-kit' ).terminal ;

import {term} from 'terminal-kit'
// .terminal;

class TerminalBrowser extends Component {
  showMsg = () => 'Hello World'
  
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width:"100vw"
        }}
      >

{ term( 'Hello world!\n' ) } 
        <Terminal
         watchConsoleLogging 
        //  commandPassThrough={cmd => `-PassedThrough:${cmd}: stinky command not found`}
          color='lightgreen'
          backgroundColor='black'
          barColor='blue'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-google': () => window.open('https://www.google.com/', '_blank'),
            showmsg: this.showMsg,
            popup: () => alert('Terminal in React'),
            liri: ()=>{
              // var lir= require("../liriBot/liri");
              // lir.showSongInfo()
            //  lir.UserInputs("movie-this", "The Matrix")
            // const output = execSync('node liri.js movie-this', { encoding: 'utf-8' });

          }}
          }
          descriptions={{
            'open-google': 'opens google.com',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
        />
      </div>
    );
  }
}

export default TerminalBrowser;