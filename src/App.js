import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max0", age: 28 },
      { name: "Max1", age: 27 },
      { name: "Max2", age: 29 },
    ],
  });

  const switchNameHandler = () => {
    //console.log("Was clicked!");
    //this.state.persons[0].name = "harshal";
    setPersonsState({
      persons: [
        { name: "Max04", age: 28 },
        { name: "Max14", age: 27 },
        { name: "Max2", age: 29 },
      ],
    });
  };

  return (
    <div className="App">
      <h1> Hi</h1>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        Learning react
      </Person>
      <Person name={personsState.persons[1].name} age="32" />
      <Person name="hhm" age="30">
        {" "}
        hakuna{" "}
      </Person>
      <button onClick={switchNameHandler}>click</button>
    </div>
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "hi")
  );
};

export default app;
