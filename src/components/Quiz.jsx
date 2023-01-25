import React from "react";

function Quiz(props) {
  const { triviaQuestions } = props;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const questionElements = triviaQuestions.map((question) => {
    const answers = shuffle([
      question.correct_answer,
      ...question.incorrect_answers,
    ]);

    return (
      <div className="question">
        <h3>{question.question}</h3>
        <div className="answer-section">
          {answers.map((answer) => (
            <p className="answer">{answer}</p>
          ))}
        </div>
      </div>
    );
  });

  return (
    <div className="quiz-wrapper">
      {questionElements}
      <button className="button-check-answers">Check Answers</button>
    </div>
  );
}

export default Quiz;
