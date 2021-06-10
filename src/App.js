import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import HistorySection from "./components/History/HistorySection";
import Preview from "./components/Preview/Preview";

import "./styles/App.css";

class App extends React.Component {
  /* TODO:
   *  - make preview mode
   *    - use same state info, just different css
   *      - maybe different componenets with diff class names
   *  - move edit mode stuff into sub component like preview
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
    this.handleChangeHistory = this.handleChangeHistory.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  addItem = (itemsKey) => {
    const items = this.state[itemsKey];
    const itemKey = itemsKey.slice(0, -1);
    const item = this.state[itemKey];
    const { fields } = item;
    this.setState({
      [itemsKey]: items.concat(item),
      [itemKey]: {
        id: uniqid(),
        fields: 
          Object.entries(fields).map(entry => {
            const [, field] = entry;
            return ({
              text: '',
              placeholder: field.placeholder,
              id: uniqid(),
            });
          }),
      },
    });
  };

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
      degrees: [{
        id: uniqid(),
        fields: {
          type: {
            text: "BS Mechanical Engineering",
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
      }],
      jobs: [{
        id: uniqid(),
        fields: {
          position: {
            text: 'Senior Mechanical Engineer',
            placeholder: 'Position',
            id: uniqid(),
          },
          company: {
            text: 'Lockheed Martin',
            placeholder: 'Company',
            id: uniqid(),
          },
          city: {
            text: 'Atlanta',
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
      }],
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
          <BioEditor
            bio={bio}
            onTextChange={this.handleChangeBio}
          />
          <HistorySection
            items={degrees}
            itemsKey='degrees'
            header='Education'
            onAddItem={this.addItem}
            onDeleteItem={this.deleteItem}
            onTextChange={this.handleChangeHistory}
          />
          <HistorySection
            items={jobs}
            itemsKey='jobs'
            header='Experience'
            onAddItem={this.addItem}
            onDeleteItem={this.deleteItem}
            onTextChange={this.handleChangeHistory}
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
          />
        </div>
      );
    }
  };
}

export default App;
