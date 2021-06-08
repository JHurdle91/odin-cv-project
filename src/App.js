import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import EducationEditor from "./components/Education/EducationEditor";
import ExperienceEditor from "./components/Experience/ExperienceEditor";

import "./styles/App.css";

class App extends React.Component {
  /* TODO:
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
      bio: {
        id: uniqid(),
        fields: {
          name: {
            text: '',
            placeholder: 'Name',
            id: uniqid(),
          },
          title: {
            text: '',
            placeholder: 'Title',
            id: uniqid(),
          },
          city: {
            text: '',
            placeholder: 'City',
            id: uniqid(),
          },
          email: {
            text: '',
            placeholder: 'Email Address',
            id: uniqid(),
          },
          phone: {
            text: '',
            placeholder: 'Phone Number',
            id: uniqid(),
          },
        },
      },
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

    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.addDegree = this.addDegree.bind(this);
  }

  addDegree = () => {
    const { degrees, degree } = this.state;
    const { type, university, date } = degree.fields;

    this.setState({
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

  handleChangeBio = (name, value) => {
    const obj = this.state;
    const { bio } = obj;
    Object.entries(bio.fields).map(entry => {
      const [key, field] = entry;
      if (key === name) {
        field.text = value;
      }
      return entry;
    });
    this.setState(obj);
  };

  handleChangeDegree = (name, value, id) => {
    const { degrees } = this.state;
    this.setState({
      degrees: degrees.map(degree => {
        if (degree.id === id) {
          degree.fields[name].text = value;
        }
        return degree;
      }),
    });
  };

  deleteDegree = (id) => {
    const { degrees } = this.state;
    this.setState({
      degrees: degrees.filter(degree => {
                 return degree.id !== id
               }),
    });
  }

  componentDidMount() {
    this.addDegree();
  }

  render() {
    if(this.state.mode === 'edit') {
      return (
        <div className="App">
          <BioEditor
            bio={this.state.bio}
            onTextChange={this.handleChangeBio}
          />
          <EducationEditor
            degrees={this.state.degrees}
            onAddDegree={this.addDegree}
            onTextChange={this.handleChangeDegree}
            onDeleteDegree={this.deleteDegree}
          />
          {/*
          <Header />
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
