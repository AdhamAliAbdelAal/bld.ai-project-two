import "./CourseDetails.css";
import { useState, useEffect } from 'react';
import CourseHeader from "../../components/Header/CourseHeader";
import CourseTabs from "../../components/Tabs/CourseTabs";
import LearnSection from "../../components/LearnSection";
import CourseContent from "../../components/Courses/CourseContent";
import CourseRequirements from "../../components/Courses/CourseRequirements";
import CourseDescription from "../../components/Courses/CourseDescription";
import Instructors from "../../components/Courses/Instructors";
import Feedback from "../../components/Courses/Feedback";
import Reviews from "../../components/Courses/Reviews";
import { ReviewsProvider } from "../../context/ReviewsContext";
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
            <hr style={{ margin: 0 }} />
            <LearnSection overview={data.overview} />
            <CourseContent content={data.content} />
            <CourseRequirements requirements={data.requirements} />
            <CourseDescription description={data.description} />
            <Instructors instructor={data.instructor} />
            <Feedback studentFeedback={data.studentFeedback} rate={data.rate} />
            <ReviewsProvider value={data.reviews}>
                <Reviews/>
            </ReviewsProvider>

        </>
    );
}

export default CourseDetails;
