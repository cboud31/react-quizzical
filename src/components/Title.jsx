function Title(props) {
  return (
    <>
      <h1>Quizzical</h1>
      <button onClick={props.toggle}>Start Quiz</button>
    </>
  );
}

export default Title;
