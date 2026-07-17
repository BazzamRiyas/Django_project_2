import React from 'react';

function StudentCard(props) {
    return (
        <div
        className="student-card"
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
        }}
        >
        <h1>{props.name}</h1>
        <p>ID: {props.studentId}</p>
        <p>Major: {props.major}</p>

        <button onClick={() => alert("Viewing " + props.name)}>
            View Details
            </button>
        </div>
    );
}
export default StudentCard;