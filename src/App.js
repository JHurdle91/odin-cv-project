import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import EducationEditor from "./components/Education/EducationEditor";
import ExperienceEditor from "./components/Experience/ExperienceEditor";

import "./styles/App.css";

class App extends React.Component {
  /* TODO:
   *  - make generic section to combine Education and Experience
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
      jobs: [],
      job: {
        id: uniqid(),
        fields: {
          position: {
            text: '',
            placeholder: 'Position',
            id: uniqid(),
          },
          company: {
            text: '',
            placeholder: 'Company',
            id: uniqid(),
          },
          city: {
            text: '',
            placeholder: 'City',
            id: uniqid(),
          },
          startDate: {
            text: '',
            placeholder: 'Start Date',
            id: uniqid(),
          },
          endDate: {
            text: '',
            placeholder: 'End Date',
            id: uniqid(),
          },
        },
      },
    };

    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleChangeDegree = this.handleChangeDegree.bind(this);
    this.handleChangeJob = this.handleChangeJob.bind(this);
    this.deleteDegree = this.deleteDegree.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.addDegree = this.addDegree.bind(this);
    this.addJob = this.addJob.bind(this);
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

  addJob = () => {
    const { jobs, job } = this.state;
    const { type, university, date } = job.fields;

    this.setState({
      jobs: jobs.concat(job),
      job: {
        id: uniqid(),
        fields: {
          position: {
            text: '',
            placeholder: 'Position',
            id: uniqid(),
          },
          company: {
            text: '',
            placeholder: 'Company',
            id: uniqid(),
          },
          city: {
            text: '',
            placeholder: 'City',
            id: uniqid(),
          },
          startDate: {
            text: '',
            placeholder: 'Start Date',
            id: uniqid(),
          },
          endDate: {
            text: '',
            placeholder: 'End Date',
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

  handleChangeJob = (name, value, id) => {
    const { jobs } = this.state;
    this.setState({
      jobs: jobs.map(job => {
        if (job.id === id) {
          job.fields[name].text = value;
        }
        return job;
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

  deleteJob = (id) => {
    const { jobs } = this.state;
    this.setState({
      jobs: jobs.filter(job => {
                 return job.id !== id
               }),
    });
  }

  componentDidMount() {
    this.addDegree();
    this.addJob();
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
          <ExperienceEditor
            jobs={this.state.jobs}
            onAddJob={this.addJob}
            onTextChange={this.handleChangeJob}
            onDeleteJob={this.deleteJob}
          />
          {/*
          <Header />
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
