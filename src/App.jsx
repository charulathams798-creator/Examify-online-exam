import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Exam from "./pages/Exam";
import Result from "./pages/Result";
import Login from "./pages/Login";

function App() {
  const [page, setPage] = useState("home");
  const [student, setStudent] = useState({});
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Text Machine Language", "None", "Home Tool Markup"],
      answer: "Hyper Text Markup Language",
    },
    {
      id: 2,
      question: "Which is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "React"],
      answer: "CSS",
    },
    {
      id: 3,
      question: "Which hook is used for state in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState",
    },
    {
      id: 4,
      question: "React is mainly used for building?",
      options: ["Database", "User Interface", "Operating System", "Server"],
      answer: "User Interface",
    },
    {
      id: 5,
      question: "Which command runs React Vite project?",
      options: ["npm start", "npm run dev", "node app.js", "python run"],
      answer: "npm run dev",
    },
  ];

  
      return (
  <>
    {page === "home" && <Home setPage={setPage} />}

    {page === "signin" && (
      <SignIn
        setPage={setPage}
        setStudent={setStudent}
      />
    )}

    {page === "login" && (
      <Login
        setPage={setPage}
        setStudent={setStudent}
      />
    )}

    {page === "exam" && (
      <Exam
        student={student}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        setPage={setPage}
      />
    )}

    {page === "result" && (
      <Result
        student={student}
        questions={questions}
        answers={answers}
        setAnswers={setAnswers}
        setStudent={setStudent}
        setPage={setPage}
      />
    )}
  </>
);
   
}

export default App;