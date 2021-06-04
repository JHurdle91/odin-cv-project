import React from "react";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <label class="switch">edit
          <input type="checkbox" />
          <span class="slider round"></span>
        </label>
        <Bio />
        <Education />
        <Experience />
      </div>
    );
  };
}

export default App;
