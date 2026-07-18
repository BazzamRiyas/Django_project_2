import "./App.css";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import CourseCard from "./components/CourseCard";
import Counter from "./components/Counter";
import SearchBar from "./components/SearchBar";
import StudentList from "./components/StudentList";
import TitleUpdater from "./components/TitleUpdater";
import UserGreeting from "./components/UserGreeting";
import CourseList from "./components/CourseList";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const universityName = "University Hub"; 

  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/students" element={
          <>
            <UserGreeting isLoggedIn={false}/> 
            <Header />
            <h2>SearchBar</h2>
            <SearchBar/>
            <h2>Current Students</h2>

            <StudentCard 
            name="Alice"
            studentId="CS101"
            major="Computer Science"
            />

            <StudentCard 
              name="Harry"
              studentId="CS101"
              major="Computer Science"
            />


            <StudentCard 
              name="Tom"
              studentId="CS102"
              major="Computer Science"
            />

          </>
        }/>
      </Routes>
      
      <h2>Available Courses</h2>

      <CourseCard 
        title="Computer Science"
        code="CS103"
        credits="3"
      />

      <CourseCard 
        title="Digital Electronics"
        code="DE101"
        credits="3"
      />

      <CourseCard 
        title="DSA"
        code="DSA122"
        credits="2"
      />


      <h2>Attendence Counter</h2>
      <Counter />

      <StudentList/>
    
    <h2>Click Tracker</h2>
      <TitleUpdater/>

    <h2>Course List</h2>
      <CourseList/>
    </>
  );
}

export default App;