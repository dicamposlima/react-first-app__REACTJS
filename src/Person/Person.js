import React from "react";

const Person = props => {
  return (
    <div>
      <p>
        Name: {props.name} Age: {props.age}
      </p>
      {props.children}
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default Person;
