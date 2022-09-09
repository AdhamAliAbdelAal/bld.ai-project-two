import CourseContentInfo from "./CourseContentInfo";
import CourseAccordion from "./CourseAccordion";
const CourseContent = ({ content }) => {
    const { totalLength, sectionsCount, lecturesCount,sections } = content;
    return (
        <div className="main-container mb-5">
            <div className="course-container">
                <h3 className='fw-bold fs-4 my-4'>Course content</h3>
                <CourseContentInfo totalLength={totalLength} sectionsCount={sectionsCount} lecturesCount={lecturesCount} />
                <CourseAccordion sections={sections}/>
            </div>
        </div>
    );
}

export default CourseContent;
