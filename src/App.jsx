import { useState, useEffect } from "react";
import "./App.css";

import Quiz from "./components/Quiz";
import Title from "./components/Title";

/*
API Link: "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple"
showGame ? <Quiz /> : <Title />
*/

function App() {
  const [triviaQuestions, setTriviaQuestions] = useState([]);
  const [startGame, setStartGame] = useState(false);

  const toggle = () => {
    setStartGame((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) => setTriviaQuestions(data.results));
  }, []);

  return (
    <div className="App">
      {startGame ? (
        <Quiz triviaQuestions={triviaQuestions} />
      ) : (
        <Title toggle={toggle} />
      )}
    </div>
  );
}

export default App;
