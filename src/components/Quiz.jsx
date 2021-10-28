import React, { useState, useEffect } from "react";

export default function Quiz(
  data,
  setTimeout,
  setQuestionNumber,
  questionNumber
) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((item) => (
          <div className="answer" key={item.text}>{item.text}</div>
        ))}
      </div>
    </div>
  );
}
