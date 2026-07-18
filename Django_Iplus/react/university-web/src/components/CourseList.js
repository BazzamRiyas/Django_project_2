function CourseList() {
    const courses = [
        { id: 101, title: 'Python Basics', credits: 3 },
        { id: 102, title: 'Django Core', credits: 4 },
        { id: 103, title: 'React Frontend', credits: 4 }
    ];

    return (
        <ul className="course-list">
            {courses.map((course) => (
                <li key={course.id}>
                    <strong>{course.title}</strong> • {course.credits} credits
                </li>
            ))}
        </ul>
    );
}

export default CourseList;