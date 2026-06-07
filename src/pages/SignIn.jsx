import { useState } from "react";

function SignIn({ setPage, setStudent }) {
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    rollNo: "",
  });

  const handleChange = (e) => {
    setStudentData({
      ...studentData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem("student", JSON.stringify(studentData));
  setStudent(studentData);

  alert("Sign In successful. Now please Login.");
  setPage("home");
};

  return (
    <div className="signin-page">
      <div className="signin-box">
        <h1>Student Sign In</h1>
        <p>Enter your details to start exam</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Student Name"
            value={studentData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={studentData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="rollNo"
            placeholder="Roll Number"
            value={studentData.rollNo}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <button className="back-btn" onClick={() => setPage("home")}>
          Back Home
        </button>
      </div>
    </div>
  );
}

export default SignIn;
