import React, { Component } from "react";

//looks like distro is broken? 
// import Terminal from "react-console-emulator";
import ReactTerminal from 'react-terminal-component';

// const commands = {
//   echo: {
//     description: "Echo a passed string.",
//     usage: "echo <string>",
//     fn: function() {
//       return `${Array.from(arguments).join(" ")}`;
//     }
//   }
// };

class Terminal_Browser extends Component {
  render() {
    return (
      console.log("testing terminal emulators"),
      (
        <div>
       <ReactTerminal/> 
      {/* <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      /> */}
      </div>
 
      )
    );
  }
}

export default Terminal_Browser;

/*
import React from 'react'
import Terminal from 'react-console-emulator'

const commands = {
  echo: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {
      return `${Array.from(arguments).join(' ')}`
    }
  }
}

export default class MyTerminal extends React.Component {
  render () {
    return (
      <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      />
    )
  }
}




        //build for normal HTML, not SPAs like react
// import { createTerminal } from "terminatorator";
// import Shell from "shell.js";

        // <Shell/>
        // ,
        // createTerminal(document.createElement('terminal'), {
        //     welcome: 'hello world', // will be printed on start
        //     theme: 'interlaced', // || 'modern' || 'white' - can be changed at runtime
        //       // using the `theme` command
        //     commands: {}, // see `Adding custom commands` below
        //     history: 'cli-history', // the localStorage key used to store terminal history
        //     user: 'joe' // which user to be logged in as
        //   })

        // document.addEventListener('DOMContentLoaded', function() {
        //     let shell = new Shell('#awesome-shell', {
        //         user: 'foobar',
        //         host: 'MacMini',
        //         path: '/etc/',
        //         style: 'osx',
        //         theme: 'dark',
        //         responsive: false,
        //         commands: ['First command', 'Second command', '...']
        //     });
        // // })
        // <div id="awesome-shell"></div>,

        // document.addEventListener('DOMContentLoaded', function() {
        //     let shell = new Shell('#awesome-shell');
        // })
*/
