import React from "react";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import EducationEditor from "./components/Education/EducationEditor";
import EduEditorTemp from "./components/Education/EduEditorTemp";
import ExperienceEditor from "./components/Experience/ExperienceEditor";

import "./styles/App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      mode: 'edit',
      degrees: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.addDegree = this.addDegree.bind(this);
  }

  addDegree = (id, fields) => {
    this.setState({
      degrees: this.state.degrees.concat({
        id: id,
        fields: fields,
      }),
    })
  };

  handleChange = (name, value, id) => {
    const obj = this.state;
    const degrees = obj.degrees;
    let index;
    degrees.findIndex((degree, i) => {
      if (degree.id === id) {
        index = i;
        return true;
      }
      return false;
    });
    degrees[index].fields[name].text = value;
    this.setState(obj);
  };

  render() {
    if(this.state.mode === 'edit') {
      return (
        <div className="App">
          <EduEditorTemp
            degrees={this.state.degrees}
            onAddDegree={this.addDegree}
            onTextChange={this.handleChange}
          />
          {/*
          <Header />
          <BioEditor />
          <EducationEditor />
          <ExperienceEditor />
          */}
        </div>
      );
    } else {
      return (
        <div className="AppPreview">
          <Header />
        </div>
      );
    }
  };
}

export default App;
