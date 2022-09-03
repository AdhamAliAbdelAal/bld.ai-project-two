import CoursesList from './CoursesList';
import { useRef } from 'react';
const CoursesSection = ({ course }) => {
    const { topic, caption, courses, tip } = course;
    const couresRef=useRef(null);
    const scrollRight=()=>{
        couresRef.current.scrollLeft -= 300;
    }
    const scrollLeft=()=>{
        couresRef.current.scrollLeft += 300;
    }
    return (
        <div className=" topics-div">
            <div>
                <h2 className="fs-5 fw-semibold">{caption}</h2>
                <p>{tip}</p>
                <div className="explore-button">
                    <a href="dummy">explore {topic}</a>
                </div>
            </div>
            <div className='left-scroll' onClick={scrollRight}>
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className='right-scroll' onClick={scrollLeft}>
                <i className="bi bi-chevron-right"></i>
            </div>
            <CoursesList courses={courses} ref={couresRef}/>
        </div>
    );
}

export default CoursesSection;
