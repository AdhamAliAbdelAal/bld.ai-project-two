import React from 'react';
import CourseCard from './CourseCard';
const CoursesList = React.forwardRef (({courses},ref) => {
    return (
        <div className="courses-div" ref={ref}>
            {
                courses.map((course) => {
                    return (
                        <CourseCard course={course} key={course.id} />
                    )
                })
            }
        </div>
    );
})

export default CoursesList;