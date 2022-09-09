
const CourseRequirements = ({ requirements }) => {
    return (
        <div className="main-container my-4">
            <div className="course-container">
                <h4 className="fw-bold fs-4">
                    Requirements
                </h4>
                <ul className="req">
                    {requirements.map(req => {
                        return (
                            <li key={req} className="req-item">
                                {req}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CourseRequirements;
