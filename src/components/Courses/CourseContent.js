import CourseContentInfo from "./CourseContentInfo";
import CourseAccordion from "./CourseAccordion";
const CourseContent = ({ content }) => {
    const { totalLength, sectionsCount, lecturesCount,sections } = content;
    return (
        <div className="container w-75 mb-5">
            <div className="course-container">
                <h3 className='fw-bold my-4'>Course content</h3>
                <CourseContentInfo totalLength={totalLength} sectionsCount={sectionsCount} lecturesCount={lecturesCount} />
                <CourseAccordion sections={sections}/>
            </div>
        </div>
    );
}

export default CourseContent;
