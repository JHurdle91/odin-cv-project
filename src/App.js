import React from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import BioEditor from "./components/Bio/BioEditor";
import HistorySection from "./components/History/HistorySection";

import "./styles/App.css";

class App extends React.Component {
  /* TODO:
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
    this.handleChangeHistory = this.handleChangeHistory.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
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

  componentDidMount() {
    this.addItem('degrees');
    this.addItem('jobs');
  }

  render() {
    if(this.state.mode === 'edit') {
      return (
        <div className="App">
          <BioEditor
            bio={this.state.bio}
            onTextChange={this.handleChangeBio}
          />
          <HistorySection
            items={this.state.degrees}
            itemsKey='degrees'
            header='Education'
            onAddItem={this.addItem}
            onDeleteItem={this.deleteItem}
            onTextChange={this.handleChangeHistory}
          />
          <HistorySection
            items={this.state.jobs}
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
        <div className="AppPreview">
          <Header />
        </div>
      );
    }
  };
}

export default App;
