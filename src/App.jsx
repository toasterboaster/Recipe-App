import "./App.css";
import Start from "./Start.jsx";
import React from "react";

export default function App() {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <main>
      <Start 
        className="start"
        handleInputChange={handleInputChange} />
    </main>
  );
}
