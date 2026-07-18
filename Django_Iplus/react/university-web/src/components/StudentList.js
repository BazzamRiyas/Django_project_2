import React, { useState, useEffect } from 'react';

function StudentList() {
  // Fixed capitalization for useState
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    console.log("Component Mounted! Fetching data...");
    
    // Simulate a slow network request
    const timer = setTimeout(() => {
    const data = [
        { id: 1, name: "Alice", major: "CS" },
        { id: 2, name: "Bob", major: "Math" },
        { id: 3, name: "Charlie", major: "Physics" }
    ];

      setStudents(data);      // Update data
      setLoading(false);      // Stop loading spinner
    }, 2000);                 // Wait 2 seconds

    // Cleanup function
    return () => clearTimeout(timer);
  }, []); // Empty array - Run once on load

  // Added mandatory return statement for rendering UI
    if (loading) {
    return <p>Loading students...</p>;
    }

    return (
    <div>
    <h2>Student List</h2>
    <ul>
        {students.map(student => (
        <li key={student.id}>
            <strong>{student.name}</strong> - {student.major}
        </li>
        ))}
    </ul>
    </div>
);
}

export default StudentList;