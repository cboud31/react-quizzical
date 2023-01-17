import { useState } from "react";
import "./App.css";

import Quiz from "./components/Quiz";
import Title from "./components/Title";

/*
API Link: "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
showGame ? <Quiz /> : <Title />
*/

function App() {
  const [startGame, setStartGame] = useState(false);

  const toggle = () => {
    setStartGame((prevState) => !prevState);
  };

  fetch(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <div className="App">
      {startGame ? <Quiz /> : <Title toggle={toggle} />}
    </div>
  );
}

export default App;
