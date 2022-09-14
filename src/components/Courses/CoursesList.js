import React from 'react';
import CourseCard from './CourseCard';
import {useContext } from "react";
import SearchContext from "../../contexts/SearchContext";
const CoursesList = React.forwardRef (({courses},ref) => {
    const {search}=useContext(SearchContext);
    courses= courses.filter( ({title})=>{
        return title.match(new RegExp(search,"i"));
    });
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