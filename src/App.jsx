import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from "./components/Quiz";
import Timer from "./components/Timer";
import Start from "./components/Start";
import data from "./data.js";
import End from "./assests/End.gif";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");
  const [startPlay, setStartPlay] = useState(false);

  const pointPyramid = useMemo(
    () =>
      [
        {
          id: 1,
          point: "10",
        },
        {
          id: 2,
          point: "20",
        },
        {
          id: 3,
          point: "30",
        },
        {
          id: 4,
          point: "40",
        },
        {
          id: 5,
          point: "50",
        },
        {
          id: 6,
          point: "60",
        },
        {
          id: 7,
          point: "70",
        },
        {
          id: 8,
          point: "80",
        },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        pointPyramid.find((item) => item.id === questionNumber - 1).point
      );
  }, [pointPyramid, questionNumber]);

  return (
    <div className="App">
      {startPlay ? (
        <>
          <div className="main">
            {stop ? (
              <>
                <img className="EndImage" src={End} />
                <h2 className="endGame">You have earned: {earned} points</h2>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    setQuestionNumber={setQuestionNumber}
                    questionNumber={questionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="pointList">
              {pointPyramid.map((item) => (
                <li
                  className={
                    questionNumber === item.id
                      ? "pointListItem active"
                      : "pointListItem"
                  }
                  key={item.id}
                >
                  <span className="pointListItemNumber">{item.id}.</span>
                  <span className="pointListItemPoints">{item.point}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setStartPlay={setStartPlay} />
      )}
    </div>
  );
}

export default App;
