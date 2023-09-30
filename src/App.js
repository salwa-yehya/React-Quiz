import { useState } from "react";
import "./App.css";
import FinalResult from "./component/FinalResult";
import Questions from "./component/Questions";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleShowResult = () => {
    setShowResults(true);
  };
  return (
    <div className="App">{showResults ? <FinalResult score={score} /> : <Questions handleShowResult={handleShowResult} setScore={setScore}/>}</div>
  );
}

export default App;
