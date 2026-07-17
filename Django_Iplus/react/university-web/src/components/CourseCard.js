import React from 'react';

function CourseCard(props) {
    return (
        <div
        className="Course-card"
        style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
        }}
        >
        <h1>{props.type}</h1>
        <p>ID: {props.course}</p>
        <p>Credits: {props.Credits}</p>

        <button onClick={() => alert("Viewing " + props.type)}>
            View Details
            </button>
        </div>
    );
}
export default CourseCard;