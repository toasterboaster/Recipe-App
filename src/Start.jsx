import React from "react";
import './App.css'

export default function Start(props) {
  return (
    <div className={props.className}>
      <h2>Title here</h2>
      <input
        type="text"
        placeholder="Enter recipe"
        onChange={props.handleInputChange}
      ></input>
      <button>Go</button>
    </div>
  );
}
