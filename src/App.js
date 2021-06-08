import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import EducationEditor from "./components/Education/EducationEditor";
import EduEditorTemp from "./components/Education/EduEditorTemp";
import ExperienceEditor from "./components/Experience/ExperienceEditor";

import "./styles/App.css";

class App extends React.Component {
  /* TODO:
   *  - add function to Delete button in EduEditorTemp
   *    - do this BEFORE updating ExperienceEditor section
   *
   *  - replace EducationEditor with EduEditorTemp
   *  - make ExperienceEditor like EduEditor
   *    - or make EduEditor Generic (preferably)
   *  - make preview mode
   *    - use same state info, just different css
   *      - maybe different componenets with diff class names
   *  - make it look good (css)
   *    - edit mode and
   *    - preview mode (sidebar, see reference cv)
   *  - print to pdf (optional)
  */
  constructor() {
    super();

    this.state = {
      mode: 'edit',
      degrees: [],
      degree: {
        id: uniqid(),
        fields: {
          type: {
            text: '',
            placeholder: 'Degree/Certificate',
            id: uniqid(),
          },
          university: {
            text: '',
            placeholder: 'University',
            id: uniqid(),
          },
          date: {
            text: '',
            placeholder: 'Date completed',
            id: uniqid(),
          },
        },
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.addDegree = this.addDegree.bind(this);
  }

  addDegree = () => {
    const { mode, degrees, degree } = this.state;
    const { type, university, date } = degree.fields;

    this.setState({
      mode: mode,
      degrees: degrees.concat(degree),
      degree: {
        id: uniqid(),
        fields: {
          type: {
            text: '',
            placeholder: type.placeholder,
            id: uniqid(),
          },
          university: {
            text: '',
            placeholder: university.placeholder,
            id: uniqid(),
          },
          date: {
            text: '',
            placeholder: date.placeholder,
            id: uniqid(),
          },
        },
      },
    });
  };

  handleChange = (name, value, id) => {
    const obj = this.state;
    obj.degrees.map(degree => {
      if (degree.id === id) {
        degree.fields[name].text = value;
      }
      return degree;
    });
    this.setState(obj);
  };

  componentDidMount() {
    this.addDegree();
  }

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
