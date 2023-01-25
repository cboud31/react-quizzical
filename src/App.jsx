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
  const [isSelected, setIsSelected] = useState(false);

  const toggle = (setState) => {
    setState((prevState) => !prevState);
  };

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => response.json())
      .then((data) =>
        setTriviaQuestions(
          data.results.map((result) => ({ ...result, isSelected }))
        )
      );
  }, []);

  console.log(triviaQuestions);

  return (
    <div className="App">
      {startGame ? (
        <Quiz
          isSelected={isSelected}
          setIsSelected={setIsSelected}
          triviaQuestions={triviaQuestions}
        />
      ) : (
        <Title toggle={() => toggle(setStartGame)} />
      )}
    </div>
  );
}

export default App;
