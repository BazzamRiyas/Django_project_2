// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";

const universityName = "University Hub";

const courses = [
  { id: 1, name: "Intro to Programming", code: "CS101", credit: 3 },
  { id: 2, name: "Data Structures", code: "CS201", credit: 4 },
  { id: 3, name: "Web Development", code: "CS301", credit: 3 },
];

const students = [
  { name: "Alice Wonderland", studentId: "CS101", major: "Computer Science" },
  { name: "Bob Builder", studentId: "CS102", major: "Computer Science" },
];

function App() {
  return (
    <div className="app-container">
      <Header />

      <main className="main-container">
        <h1>Welcome to {universityName}</h1>
        <p>Manage your academic life here</p>
      </main>

      <section className="courses-section">
        <h2>Available Courses</h2>
        <div className="card-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              type={course.name}
              course={course.code}
              Credits={course.credit}
            />
          ))}
        </div>
      </section>

      <section className="students-section">
        <h2>Enrolled Students</h2>
        <div className="card-grid">
          {students.map((student) => (
            <StudentCard
              key={student.studentId}
              name={student.name}
              studentId={student.studentId}
              major={student.major}
            />
          ))}
        </div>
      </section>

      <section className="attendance-section">
        <h2>Attendance Counter</h2>
        <Counter />
      </section>
    </div>
  );
}

export default App;