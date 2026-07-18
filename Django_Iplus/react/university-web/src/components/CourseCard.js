import React from 'react';

function CourseCard(props) {
    return (
        <article className="course-card">
            <div className="card-badge">Course</div>
            <h3>{props.title}</h3>
            <p>Code: {props.code}</p>
            <p>Credits: {props.credits}</p>
            <button onClick={() => alert('Viewing ' + props.title)}>
                View details
            </button>
        </article>
    );
}

export default CourseCard;