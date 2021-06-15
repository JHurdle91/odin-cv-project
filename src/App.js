import React, { useState, useEffect } from "react";

import uniqid from "uniqid";

import Header from "./components/Header";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";

import "./styles/App.css";

const App = () => {
  const [mode, setMode] = useState("edit");
  const [bio, setBio] = useState({
    id: uniqid(),
    fields: {
      name: {
        text: "",
        placeholder: "Name",
        id: uniqid(),
      },
      title: {
        text: "",
        placeholder: "Title",
        id: uniqid(),
      },
      city: {
        text: "",
        placeholder: "City",
        id: uniqid(),
      },
      email: {
        text: "",
        placeholder: "Email Address",
        id: uniqid(),
      },
      phone: {
        text: "",
        placeholder: "Phone Number",
        id: uniqid(),
      },
    },
  });
  const [degrees, setDegrees] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [degree, setDegree] = useState({
    id: uniqid(),
    fields: {
      type: {
        text: "",
        placeholder: "Degree/Certificate",
        id: uniqid(),
      },
      university: {
        text: "",
        placeholder: "University",
        id: uniqid(),
      },
      date: {
        text: "",
        placeholder: "Date completed",
        id: uniqid(),
      },
    },
  });
  const [job, setJob] = useState({
    id: uniqid(),
    fields: {
      position: {
        text: "",
        placeholder: "Position",
        id: uniqid(),
      },
      company: {
        text: "",
        placeholder: "Company",
        id: uniqid(),
      },
      city: {
        text: "",
        placeholder: "City",
        id: uniqid(),
      },
      startDate: {
        text: "",
        placeholder: "Start Date",
        id: uniqid(),
      },
      endDate: {
        text: "",
        placeholder: "End Date",
        id: uniqid(),
      },
    },
  });

  const addItem = (itemsKey) => {
    if (itemsKey === "degrees") {
      setDegrees(degrees.concat(degree));
      resetDegree();
    } else if (itemsKey === "jobs") {
      setJobs(jobs.concat(job));
      resetJob();
    } else {
      console.log("Error: App: addItem");
    }
  };

  const resetDegree = () => {
    const { type, university, date } = degree.fields;
    setDegree({
      id: uniqid(),
      fields: {
        type: {
          text: "",
          placeholder: type.placeholder,
          id: uniqid(),
        },
        university: {
          text: "",
          placeholder: university.placeholder,
          id: uniqid(),
        },
        date: {
          text: "",
          placeholder: date.placeholder,
          id: uniqid(),
        },
      },
    });
  };

  const resetJob = () => {
    const { position, company, city, startDate, endDate } = job.fields;
    setJob({
      id: uniqid(),
      fields: {
        position: {
          text: "",
          placeholder: position.placeholder,
          id: uniqid(),
        },
        company: {
          text: "",
          placeholder: company.placeholder,
          id: uniqid(),
        },
        city: {
          text: "",
          placeholder: city.placeholder,
          id: uniqid(),
        },
        startDate: {
          text: "",
          placeholder: startDate.placeholder,
          id: uniqid(),
        },
        endDate: {
          text: "",
          placeholder: endDate.placeholder,
          id: uniqid(),
        },
      },
    });
  };

  const handleChangeBio = (name, value) => {
    const item = {};
    Object.assign(item, bio);
    item.fields[name].text = value;
    setBio(item);
  };

  const handleChangeHistory = (name, value, id, itemsKey) => {
    let items, setItems;
    if (itemsKey === "degrees") {
      items = degrees;
      setItems = setDegrees;
    } else if (itemsKey === "jobs") {
      items = jobs;
      setItems = setJobs;
    } else {
      console.log("Error: App: handleChangeHistory");
    }

    items = items.map((item) => {
      if (item.id === id) {
        item.fields[name].text = value;
      }
      return item;
    });
    setItems(items);
  };

  const deleteItem = (id, itemsKey) => {
    let items, setItems;
    if (itemsKey === "degrees") {
      items = degrees;
      setItems = setDegrees;
    } else if (itemsKey === "jobs") {
      items = jobs;
      setItems = setJobs;
    } else {
      console.log("Error: App: deleteItem");
    }

    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const toggleMode = (checked) => {
    if (checked) {
      setMode("preview");
    } else {
      setMode("edit");
    }
  };

  useEffect(() => {
    addItem("degrees");
    addItem("jobs");

    const exampleCv = () => {
      const { name, title, city, email, phone } = bio.fields;
      name.text = "George P. Burdell";
      title.text = "Mechanical Engineer";
      city.text = "Atlanta";
      email.text = "GBurdell@gmail.com";
      phone.text = "404.955.2049";
      setBio(bio);

      setDegrees([
        {
          id: uniqid(),
          fields: {
            type: {
              text: "BS Mechanical Engineering 1",
              placeholder: "Degree/Certificate",
              id: uniqid(),
            },
            university: {
              text: "Georgia Institute of Technology",
              placeholder: "University",
              id: uniqid(),
            },
            date: {
              text: "2010",
              placeholder: "Date completed",
              id: uniqid(),
            },
          },
        },
        {
          id: uniqid(),
          fields: {
            type: {
              text: "BS Mechanical Engineering 2",
              placeholder: "Degree/Certificate",
              id: uniqid(),
            },
            university: {
              text: "Georgia Institute of Technology",
              placeholder: "University",
              id: uniqid(),
            },
            date: {
              text: "2010",
              placeholder: "Date completed",
              id: uniqid(),
            },
          },
        },
      ]);

      setJobs([
        {
          id: uniqid(),
          fields: {
            position: {
              text: "Senior Mechanical Engineer 1",
              placeholder: "Position",
              id: uniqid(),
            },
            company: {
              text: "Lockheed Martin",
              placeholder: "Company",
              id: uniqid(),
            },
            city: {
              text: "New York",
              placeholder: "City",
              id: uniqid(),
            },
            startDate: {
              text: "Jan 2005",
              placeholder: "Start Date",
              id: uniqid(),
            },
            endDate: {
              text: "Present",
              placeholder: "End Date",
              id: uniqid(),
            },
          },
        },
        {
          id: uniqid(),
          fields: {
            position: {
              text: "Senior Mechanical Engineer 2",
              placeholder: "Position",
              id: uniqid(),
            },
            company: {
              text: "Lockheed Martin",
              placeholder: "Company",
              id: uniqid(),
            },
            city: {
              text: "New York",
              placeholder: "City",
              id: uniqid(),
            },
            startDate: {
              text: "Jan 2005",
              placeholder: "Start Date",
              id: uniqid(),
            },
            endDate: {
              text: "Present",
              placeholder: "End Date",
              id: uniqid(),
            },
          },
        },
      ]);
    };

    exampleCv();
  }, []);

  if (mode === "edit") {
    return (
      <div className="App">
        <Header mode={mode} onToggle={toggleMode} />
        <Editor
          bio={bio}
          degrees={degrees}
          jobs={jobs}
          onAddItem={addItem}
          onDeleteItem={deleteItem}
          onTextChangeBio={handleChangeBio}
          onTextChangeHistory={handleChangeHistory}
        />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header mode={mode} onToggle={toggleMode} />
        <Preview bio={bio} degrees={degrees} jobs={jobs} />
      </div>
    );
  }
};

export default App;
