import CourseContentInfo from "./CourseContentInfo";
import CourseAccordion from "./CourseAccordion";
const CourseContent = ({ content ,lecturesCount}) => {
    console.log(content)
    const {sections } = content;
    const totalLength="14h 42m";
    const sectionsCount=sections.length;
    return (
        <div className="main-container mb-5" id="curriculum">
            <div className="course-container">
                <h3 className='fw-bold fs-4 my-4'>Course content</h3>
                <CourseContentInfo totalLength={totalLength} sectionsCount={sectionsCount} lecturesCount={lecturesCount} />
                <CourseAccordion sections={sections}/>
            </div>
        </div>
    );
}

export default CourseContent;
