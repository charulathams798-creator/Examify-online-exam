import { useEffect, useState } from "react";

function Exam({ student, questions, answers, setAnswers, setPage }) {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (timeLeft === 0) {
      setPage("result");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, setPage]);

  const selectAnswer = (option) => {
    setAnswers({
      ...answers,
      [current]: option,
    });
  };

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  const question = questions[current];

  return (
    <div className="exam-page">
      <div className="exam-box">
        <h1>Online Examination</h1>

        <div className="exam-info">
          <p><b>Name:</b> {student.name}</p>
          <p><b>Roll No:</b> {student.rollNo}</p>
          <p><b>Time:</b> {formatTime(timeLeft)}</p>
        </div>

        <h3>
          Question {current + 1} of {questions.length}
        </h3>

        <h2>{question.question}</h2>

        {question.options.map((option) => (
  <button
    key={option}
    className={
      answers[current] === option
        ? "option selected"
        : "option"
    }
    onClick={() => selectAnswer(option)}
  >
    {option}
  </button>
))}

        <div className="nav-buttons">
          <button disabled={current === 0} onClick={() => setCurrent(current - 1)}>
            Previous
          </button>

          {current === questions.length - 1 ? (
            <button className="submit-btn" onClick={() => setPage("result")}>
              Submit
            </button>
          ) : (
            <button onClick={() => setCurrent(current + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exam;