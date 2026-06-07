import { useState } from "react";

function Login({ setPage, setStudent }) {
  const [rollNo, setRollNo] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedStudent = JSON.parse(localStorage.getItem("student"));

    if (savedStudent && savedStudent.rollNo === rollNo) {
      setStudent(savedStudent);
      setPage("exam");
    } else {
      alert("Student not found. Please Sign In first.");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h1>Student Login</h1>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <button className="back-btn" onClick={() => setPage("home")}>
          Back Home
        </button>
      </div>
    </div>
  );
}

export default Login;