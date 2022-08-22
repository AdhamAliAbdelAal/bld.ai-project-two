import { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
const CoursesList = () => {
    const [courses,setCourses]=useState(null);
    useEffect(()=>{
        fetch("http://localhost:3000/python").then(response=>response.json()).then(data=>setCourses(data));
    },[])
    if(!courses)
        return <div>Loading...</div>
    return (
        <div className="courses-div">
            {
                courses.map((course)=>{
                    return (
                    <CourseCard course={course} key={course.id} />
                    )
                })
            }
        </div>
    );
}

export default CoursesList;