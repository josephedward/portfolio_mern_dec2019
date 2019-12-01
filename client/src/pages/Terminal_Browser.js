import React, { Component } from "react";

//looks like distro is broken? 
// import Terminal from "react-console-emulator";
import ReactTerminal from 'react-terminal-component';
import Terminal, {Emulator, EmulatorState, OutputType }  from "javascript-terminal";



class Terminal_Browser extends Component {




  constructor(props){
   super(props);
  

   this.state = {
    emulator : new Emulator(),
    emulatorState: EmulatorState.createEmpty(),
    inputStr: 'initial value'
  };

  }


  render() {


    return (
      console.log("testing terminal emulators"),
      
      (
        <div>
       <ReactTerminal 

         emulatorState={this.state.emulatorState}
        inputStr={this.state.inputStr}
        onInputChange={(inputStr) => this.setState({inputStr})}
        onStateChange={(emulatorState) => this.setState({emulatorState})}
       />
        

      </div>
 
      )
    );
  }
}

export default Terminal_Browser;

/*

  // state={
  //   emulator:{},
  //   emulatorState:{},
  //   inputStr:""
  // }
   //  const emulator = new Emulator();
  //  const emulatorState = EmulatorState.createEmpty();
  // ReactTerminal.EmulatorState.createEmpty();
       // console.log(this.state.EmulatorState);
//     // this.interpretCommand=this.interpretCommand.bind(this);
  // interpretCommand = () => {
  //   console.log("test")
  // }
  

  // handleKeyPress(e) {
  //   if (e.key === 'Enter') {
  //     console.log("shmoopy");
  //   }
  // }

      //  onKeyDown={this.interpretCommand}
      //      handleKeyPress={this.handleKeyPress.bind(this)}
onKeyPress={this.handleKeyPress}

  handleKeyPress = (event) => {
    event.preventDefault();
    document.querySelectorAll("input.sc-bdVaJa.WvDaY")[0].addEventListener("keydown",function(){console.log("enter key pressed")})

    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }

onComponentDidMount(){
  document.querySelectorAll("input.sc-bdVaJa.WvDaY")[0].addEventListener("keydown",function(){console.log("enter key pressed")})

}
       // const emulator = new Terminal.Emulator();
// const emulatorState = Terminal.EmulatorState.createEmpty();
// const commands = {
//   echo: {
//     description: "Echo a passed string.",
//     usage: "echo <string>",
//     fn: function() {
//       return `${Array.from(arguments).join(" ")}`;
//     }
//   }
// };

      { <Terminal
        commands={commands}
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'me@React:~$'}
      /> }

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
