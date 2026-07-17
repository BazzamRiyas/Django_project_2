// import logo from './logo.svg';
// import './App.css';

import StudentCard from './components/StudentCard';
import Header from './components/Header';
import CourseCard from './components/CourseCard';
function App() {
  return (
    <div>
      <Header />
      <div>
        <h2>Current Students</h2>
        <StudentCard
          name="John Doe"
          studentId="12345"
          major="Computer Science"
        />
        <StudentCard
          name="Jane Smith"
          studentId="67890"
          major="Mathematics"
        />
      </div>
      <div>
        <h2>Available Courses</h2>
        <CourseCard
          type="Introduction to Programming"
          course="CS101"
          Credits="3"
        />
        <CourseCard
          type="Calculus I"
          course="MATH101"
          Credits="4"
        />
      </div>
    </div>
  );
}

export default App;