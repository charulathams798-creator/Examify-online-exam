function Home({ setPage }) {
  return (
    <div className="home-page">
      <header className="header">
        <h2>Examify</h2>

        <nav>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("signin")}>Sign In</button>
          <button onClick={() => setPage("login")}>Login</button>
        </nav>
      </header>

      <main className="home-content">
        <div className="home-text">
          <h1>Online Examination System</h1>
          <p>
            Welcome to the online exam portal. Students can sign in, attend
            exams, submit answers, and view results instantly.
          </p>

          <button className="start-btn" onClick={() => setPage("signin")}>
            Start Exam
          </button>
        </div>

        <div className="home-image">
          <img
            src="https://img.freepik.com/free-vector/online-test-concept-illustration_114360-5575.jpg"
            alt="Online Exam"
          />
        </div>
      </main>
     <section className="about-section">
  <h2>Welcome to Examify</h2>
  <h3>Transforming Online Learning and Assessment</h3>

  <p>
    Examify is a comprehensive online examination platform that provides a
    seamless and secure environment for students, educators, and organizations.
    Our mission is to make assessments accessible, efficient, and reliable.
  </p>

  <h3>Why Choose Examify?</h3>
  <ul>
    <li>Easy and secure online examinations</li>
    <li>Instant score generation and detailed feedback</li>
    <li>User-friendly dashboard</li>
    <li>Real-time performance analysis</li>
    <li>Mobile and desktop compatibility</li>
    <li>Reliable and scalable platform</li>
  </ul>

  <h3>Features of Our Platform</h3>

  <div className="feature-card">
    <h4>📝 Online Test Management</h4>
    <p>Create, schedule, and manage examinations effortlessly.</p>
  </div>

  <div className="feature-card">
    <h4>📊 Performance Analytics</h4>
    <p>Track your progress with detailed reports and insights.</p>
  </div>

  <div className="feature-card">
    <h4>🔒 Secure Examination Environment</h4>
    <p>Advanced security measures ensure exam integrity.</p>
  </div>

  <div className="feature-card">
    <h4>⚡ Instant Results</h4>
    <p>Get immediate results and feedback after every exam.</p>
  </div>

  <div className="feature-card">
    <h4>🌐 Anywhere, Anytime Access</h4>
    <p>Attend exams from any device with an internet connection.</p>
  </div>

  <h3>Who Can Use Examify?</h3>

  <div className="users">
    <div>
      <h4>Students</h4>
      <p>Practice tests and prepare for competitive exams.</p>
    </div>

    <div>
      <h4>Educational Institutions</h4>
      <p>Conduct quizzes, assignments, and semester exams.</p>
    </div>

    <div>
      <h4>Organizations</h4>
      <p>Conduct recruitment and skill assessment tests.</p>
    </div>
  </div>
</section>

      <footer className="footer">
        <p>© 2026 Online Examination System</p>
      </footer>
    </div>
  );
}

export default Home;