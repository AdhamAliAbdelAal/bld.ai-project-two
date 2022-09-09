import ShowMore from 'react-show-more-button';
const CourseDescription = ({ description }) => {
    return (
        <div className="main-container my-4">
            <div className="course-container">
                <ShowMore
                    maxHeight={195}
                    className="show-more-desc"
                    classNameButton="show-more-button-desc"
                    classNameButtonDiv="button-div-desc justify-content-start p-0"
                >
                    <div>
                        <h4 className="fw-bold fs-4">
                            Description
                        </h4>
                        <p className="description">
                            {description}
                        </p>
                    </div>
                </ShowMore>
            </div>
        </div>
    );
}

export default CourseDescription;
