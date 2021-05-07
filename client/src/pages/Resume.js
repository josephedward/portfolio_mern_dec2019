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
          src="https://joseph-edward.herokuapp.com/persistent3.html"
        />
      </div>
    );
  }
}

export default Resume;
