import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

import "./styles/App.css";

class App extends React.Component {
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
    this.handleChangeHistory = this.handleChangeHistory.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  addItem = (itemsKey) => {
    const itemKey = itemsKey.slice(0, -1);
    const item = this.state[itemKey];
    const items = this.state[itemsKey];

    this.setState({
      [itemsKey]: items.concat(item),
    });

    if (itemKey === 'degree') {
      this.resetDegree();
    } else {
      this.resetJob();
    }
  };

  resetDegree = () => {
    const { type, university, date } = this.state.degree.fields;
    this.setState({
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
  }

  resetJob = () => {
    const { position, company, city, startDate, endDate } = this.state.job.fields;
    this.setState({
      job: {
        id: uniqid(),
        fields: {
          position: {
            text: '',
            placeholder: position.placeholder,
            id: uniqid(),
          },
          company: {
            text: '',
            placeholder: company.placeholder,
            id: uniqid(),
          },
          city: {
            text: '',
            placeholder: city.placeholder,
            id: uniqid(),
          },
          startDate: {
            text: '',
            placeholder: startDate.placeholder,
            id: uniqid(),
          },
          endDate: {
            text: '',
            placeholder: endDate.placeholder,
            id: uniqid(),
          },
        },
      },
    });
  }

  handleChangeBio = (name, value) => {
    const obj = this.state;
    obj.bio.fields[name].text = value;
    this.setState(obj);
  };

  handleChangeHistory = (name, value, id, itemsKey) => {
    const items = this.state[itemsKey];
    this.setState({
      [itemsKey]: items.map(item => {
        if (item.id === id) {
          item.fields[name].text = value;
        }
        return item;
      }),
    });
  };

  deleteItem = (id, itemsKey) => {
    const items = this.state[itemsKey];
    this.setState({
      [itemsKey]: items.filter(item => {
        return item.id !== id
      }),
    });
  }

  toggleMode = (checked) => {
    if (checked) {
      this.setState({
        mode: 'preview',
      });
    } else {
      this.setState({
        mode: 'edit',
      });
    }
  }

  exampleCv = () => {
    this.setState({
      mode: 'edit',
      bio: {
        id: uniqid(),
        fields: {
          name: {
            text: 'George P. Burdell',
            placeholder: 'Name',
            id: uniqid(),
          },
          title: {
            text: 'Mechanical Engineer',
            placeholder: 'Title',
            id: uniqid(),
          },
          city: {
            text: 'Atlanta',
            placeholder: 'City',
            id: uniqid(),
          },
          email: {
            text: 'GBurdell@gmail.com',
            placeholder: 'Email Address',
            id: uniqid(),
          },
          phone: {
            text: '404.955.2049',
            placeholder: 'Phone Number',
            id: uniqid(),
          },
        },
      },
      degrees: [
        {
          id: uniqid(),
          fields: {
            type: {
              text: "BS Mechanical Engineering 1",
              placeholder: 'Degree/Certificate',
              id: uniqid(),
            },
            university: {
              text: 'Georgia Institute of Technology',
              placeholder: 'University',
              id: uniqid(),
            },
            date: {
              text: '2010',
              placeholder: 'Date completed',
              id: uniqid(),
            },
          },
        },
        {
          id: uniqid(),
          fields: {
            type: {
              text: "BS Mechanical Engineering 2",
              placeholder: 'Degree/Certificate',
              id: uniqid(),
            },
            university: {
              text: 'Georgia Institute of Technology',
              placeholder: 'University',
              id: uniqid(),
            },
            date: {
              text: '2010',
              placeholder: 'Date completed',
              id: uniqid(),
            },
          },
        },
      ],
      jobs: [
        {
          id: uniqid(),
          fields: {
            position: {
              text: 'Senior Mechanical Engineer 1',
              placeholder: 'Position',
              id: uniqid(),
            },
            company: {
              text: 'Lockheed Martin',
              placeholder: 'Company',
              id: uniqid(),
            },
            city: {
              text: 'New York',
              placeholder: 'City',
              id: uniqid(),
            },
            startDate: {
              text: 'Jan 2005',
              placeholder: 'Start Date',
              id: uniqid(),
            },
            endDate: {
              text: 'Present',
              placeholder: 'End Date',
              id: uniqid(),
            },
          },
        },
        {
          id: uniqid(),
          fields: {
            position: {
              text: 'Senior Mechanical Engineer 2',
              placeholder: 'Position',
              id: uniqid(),
            },
            company: {
              text: 'Lockheed Martin',
              placeholder: 'Company',
              id: uniqid(),
            },
            city: {
              text: 'New York',
              placeholder: 'City',
              id: uniqid(),
            },
            startDate: {
              text: 'Jan 2005',
              placeholder: 'Start Date',
              id: uniqid(),
            },
            endDate: {
              text: 'Present',
              placeholder: 'End Date',
              id: uniqid(),
            },
          },
        },
      ],
    });
  }

  componentDidMount() {
    this.addItem('degrees');
    this.addItem('jobs');
    this.exampleCv();
  }

  render() {
    const { mode, bio, degrees, jobs } = this.state;
    if(this.state.mode === 'edit') {
      return (
        <div className="App">
          <Header
            mode={mode}
            onToggle={this.toggleMode}
          />
          <Editor
            bio={bio}
            degrees={degrees}
            jobs={jobs}
            onAddItem={this.addItem}
            onDeleteItem={this.deleteItem}
            onTextChangeBio={this.handleChangeBio}
            onTextChangeHistory={this.handleChangeHistory}
          />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header
            mode={mode}
            onToggle={this.toggleMode}
          />
          <Preview
            bio={bio}
            degrees={degrees}
            jobs={jobs}
          />
        </div>
      );
    }
  };
}

export default App;
