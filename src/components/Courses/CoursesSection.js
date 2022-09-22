import CoursesList from './CoursesList';
import { useRef, useEffect, useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';
const CoursesSection = ({ course }) => {
    const { title, header, description, items: courses, id } = course;
    const couresRef = useRef(null);
    const leftScroll = useRef(null);
    const rightScroll = useRef(null);
    const { search } = useContext(SearchContext);
    let maxScroll = 0;
    const scrollLeft = () => {
        const scroll = couresRef.current.scrollLeft - 300;
        couresRef.current.scrollBy(-300, 0);
        rightScroll.current.style.display = 'flex';
        if (scroll <= 0) {
            leftScroll.current.style.display = 'none';
        }
        else {
            leftScroll.current.style.display = 'flex';
        }
    }
    const scrollRight = () => {
        const scroll = couresRef.current.scrollLeft + 300;
        couresRef.current.scrollBy(300, 0);
        leftScroll.current.style.display = 'flex';
        if (scroll >= maxScroll) {
            rightScroll.current.style.display = 'none';
        }
        else {
            rightScroll.current.style.display = 'flex';
        }
    }
    const handleScroll = () => {
        couresRef.current.scrollTo(0, 0);
        leftScroll.current.style.display = 'none';
        maxScroll = couresRef.current.scrollWidth - couresRef.current.clientWidth;
        if (maxScroll === 0) {
            rightScroll.current.style.display = 'none';
        }
        else {
            rightScroll.current.style.display = 'flex';
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('resize', handleScroll);
        }
    }, []);
    useEffect(() => {
        setTimeout(handleScroll, 500);
    }, [course, search]);
    return (
        <div className="topics-div">
            <div>
                <h2 className="fs-5 fw-semibold">{header}</h2>
                <p>{description}</p>
                <div className="explore-button">
                    <a href="dummy">explore {title}</a>
                </div>
            </div>
            <div className='left-scroll' ref={leftScroll} onClick={scrollLeft}>
                <i className="bi bi-chevron-left"></i>
            </div>
            <div className='right-scroll' ref={rightScroll} onClick={scrollRight}>
                <i className="bi bi-chevron-right"></i>
            </div>
            <CoursesList topicId={id} courses={courses} ref={couresRef} />
        </div>
    );
}

export default CoursesSection;
