import React from "react";

function Quiz(props) {
  const { triviaQuestions } = props;
  console.log(triviaQuestions);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div className="quiz-wrapper">
      {triviaQuestions.map((question) => {
        const answers = shuffle([
          question.correct_answer,
          ...question.incorrect_answers,
        ]);
        console.log(answers);
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
      })}
      <button className="button-check-answers">Check Answers</button>
    </div>
  );
}

export default Quiz;
