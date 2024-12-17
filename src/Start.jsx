import React from "react";
import "./App.css";

export default function Start(props) {
  return (
    <div className={"start"}>
      <h2 className={"title"}>Title here</h2>
      <form onSubmit={props.start}>
        <input
          type="text"
          placeholder="Enter recipe"
          onChange={props.handleInputChange}
        ></input>
        <button type="submit">Go</button>
      </form>
    </div>
  );
}
