import { useState, useEffect } from "react";

export default function Quiz({
  data,
  setStop,
  setQuestionNumber,
  questionNumber,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (item) => {
    setSelectedAnswer(item);
    setClassName("answer active");
    delay(500, () =>
      setClassName(item.correct ? "answer correct" : "answer wrong")
    );
    delay(3500, () => {
      if (item.correct) {
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
        if (questionNumber >= data.length) setStop(true);
        console.log(questionNumber, data.length);
      } else {
        setStop(true);
      }
    });
  };

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div
            className={selectedAnswer === item ? className : "answer"}
            onClick={() => handleClick(item)}
            key={item.text}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
