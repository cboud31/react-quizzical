function Title(props) {
  return (
    <>
      <h1>Quizzical</h1>
      <button className="button-start-quiz" onClick={props.toggle}>
        Start Quiz
      </button>
    </>
  );
}

export default Title;
