import React from 'react';
import CourseCard from './CourseCard';
import { useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
const CoursesList = React.forwardRef(({ courses, topicId }, ref) => {
    const { search } = useContext(SearchContext);
    courses = courses.filter(({ title }) => {
        return title.match(new RegExp(search, "i"));
    });
    if (courses.length)
        return (
            <div className="courses-div" ref={ref}>
                {
                    courses.map((course, index) => {
                        return (
                            <CourseCard id={index} course={course} topicId={topicId} key={course.id} />
                        )
                    })
                }
            </div>
        );
    return (
    <p className='fs-4 text-center' ref={ref}>
        ⚠️ Sorry, we couldn't find any courses for "{search}"
    </p>
    )
})

export default CoursesList;