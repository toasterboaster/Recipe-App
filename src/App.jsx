import "./App.css";
import Start from "./Start.jsx";
import React from "react";
import RecipeMenu from "./RecipeMenu.jsx";

export default function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [start, setStart] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=d34d7c6bb49a4378b897013b266052e0&query=${inputValue}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  function startApp() {
    setStart((prev) => !prev);
    console.log(data.results)
  }

  return (
    <main className="main">
      {!start && (
        <Start handleInputChange={handleInputChange} start={startApp} />
      )}
      {start && <RecipeMenu recipes={data}/>}
    </main>
  );
}
