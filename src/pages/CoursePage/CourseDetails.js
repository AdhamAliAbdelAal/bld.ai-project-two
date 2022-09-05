import "./CourseDetails.css";
import { useState, useEffect } from 'react';
import CourseHeader from "../../components/Header/CourseHeader";
import CourseTabs from "../../components/Tabs/CourseTabs";
import LearnSection from "../../components/LearnSection";
import CourseContent from "../../components/Courses/CourseContent";
const CourseDetails = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/courses").then(res => res.json()).then(data => setData(data[0]))
    }, []);
    console.log(data);
    if (!data)
        return null;
    return (
        <>
            <CourseHeader data={data} />
            <CourseTabs />
            <hr style={{margin:0}} />
            <LearnSection overview={data.overview} />
            <CourseContent content={data.content}/>
        </>
    );
}

export default CourseDetails;
