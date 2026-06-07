function Result({
  student,
  questions,
  answers,
  setAnswers,
  setStudent,
  setPage,
}) {
  let score = 0;

  questions.forEach((q, index) => {
    if (answers[index] === q.answer) {
      score++;
    }
  });

  const percentage = ((score / questions.length) * 100).toFixed(2);

  const goHome = () => {
    setAnswers({});
    setStudent({});
    setPage("home");
  };

  return (
    <div className="result-page">
      <div className="result-box">
        <h1>Exam Result</h1>

        <h2>{student.name}</h2>
        <p><b>Roll No:</b> {student.rollNo}</p>
        <p><b>Email:</b> {student.email}</p>

        <h2>Score: {score} / {questions.length}</h2>
        <h3>Percentage: {percentage}%</h3>

        <h3 className={score >= questions.length / 2 ? "pass" : "fail"}>
          {score >= questions.length / 2 ? "Pass" : "Fail"}
        </h3>

        <button onClick={goHome}>Home</button>
      </div>

      <div className="review-section">
        {questions.map((q, index) => (
          <div className="review-card" key={q.id}>
            <h3>{index + 1}. {q.question}</h3>
            <p><b>Your Answer:</b> {answers[index] || "Not Answered"}</p>
            <p><b>Correct Answer:</b> {q.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;