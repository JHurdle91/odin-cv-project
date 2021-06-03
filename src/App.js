import React from "react";
import Bio from "./components/Bio";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Bio />
        <Education />
        <Experience />
      </div>
    );
  };
}

export default App;
