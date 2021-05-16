import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <div
      style={{backgroundColor:"white"}}
      >
        <iframe
          width="100%"
          height="1000px"
          title="Simple Resume"
          src="https://docs.google.com/document/d/1-xkiK3uzw19frmiI_qyxajDBh4zWaO5fFySb4mr7Grc/edit?usp=sharing"
        />
      </div>
    );
  }
}

export default Resume;
