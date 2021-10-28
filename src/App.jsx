import { useState } from "react";
import "./app.css";
import Quiz from "./components/Quiz";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: "Which Actor is a Meme Lord ?",
      answers: [
        {
          text: "Akshay",
          correct: true,
        },
        {
          text: "Salman",
          correct: false,
        },
        {
          text: "Paresh ",
          correct: false,
        },
        {
          text: "Pamkaj",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: " What is Shardul called ?",
      answers: [
        {
          text: "Sir",
          correct: false,
        },
        {
          text: "God",
          correct: false,
        },
        {
          text: "Lord ",
          correct: true,
        },
        {
          text: "Thakur",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which Actor is a Meme Lord ?",
      answers: [
        {
          text: "Akshay",
          correct: true,
        },
        {
          text: "Salman",
          correct: false,
        },
        {
          text: "Paresh ",
          correct: false,
        },
        {
          text: "Pamkaj",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which Actor is a Meme Lord ?",
      answers: [
        {
          text: "Akshay",
          correct: true,
        },
        {
          text: "Salman",
          correct: false,
        },
        {
          text: "Paresh ",
          correct: false,
        },
        {
          text: "Pamkaj",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which Actor is a Meme Lord ?",
      answers: [
        {
          text: "Akshay",
          correct: true,
        },
        {
          text: "Salman",
          correct: false,
        },
        {
          text: "Paresh ",
          correct: false,
        },
        {
          text: "Pamkaj",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which Actor is a Meme Lord ?",
      answers: [
        {
          text: "Akshay",
          correct: true,
        },
        {
          text: "Salman",
          correct: false,
        },
        {
          text: "Paresh ",
          correct: false,
        },
        {
          text: "Pamkaj",
          correct: false,
        },
      ],
    },
  ];
  const pointPyramid = [
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
  ].reverse();
  return (
    <div className="App">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz
            data={data}
            setTimeOut={setTimeOut}
            setQuestionNumber={setQuestionNumber}
            questionNumber={questionNumber}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="pointList">
          {pointPyramid.map((item) => (
            <li
              className={
                questionNumber === item.id
                  ? "pointListItem active"
                  : "pointListItem"
              } key={item.id}
            >
              <span className="pointListItemNumber">{item.id}</span>
              <span className="pointListItemPoints">{item.point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
