import "./CourseDetails.css";
import { useState, useEffect } from 'react';
import CourseHeader from "../../components/Header/CourseHeader";
import CourseTabs from "../../components/Tabs/CourseTabs";
import LearnSection from "../../components/Courses/LearnSection";
import CourseContent from "../../components/Courses/CourseContent";
import CourseRequirements from "../../components/Courses/CourseRequirements";
import CourseDescription from "../../components/Courses/CourseDescription";
import Instructors from "../../components/Courses/Instructors";
import Feedback from "../../components/Courses/Feedback";
import Reviews from "../../components/Courses/Reviews";
import { ReviewsProvider } from "../../context/ReviewsContext";
import { FeedbackProvider } from "../../context/FeedbackContext";
import Loading from "../../components/Loading";
import BlackHeader from "../../components/Courses/BlackHeader";
const CourseDetails = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/courses").then(res => res.json()).then(data => setData(data[0]));
        }, 2000);

    }, []);
    console.log(data);
    if (!data)
        return <Loading />
    return (
        <>
            <BlackHeader rate={data.rate} ratingCount={data.ratingCount} students={data.enrollCount} title={data.title} />
            <CourseHeader data={data} />
            <CourseTabs />
            <hr style={{ margin: 0 }} />
            <LearnSection overview={data.overview} />
            <CourseContent content={data.content} />
            <CourseRequirements requirements={data.requirements} />
            <CourseDescription description={data.description} />
            <Instructors instructor={data.instructor} />
            <FeedbackProvider>
                <Feedback studentFeedback={data.studentFeedback} rate={data.rate} />
                <ReviewsProvider value={data.reviews}>
                    <Reviews />
                </ReviewsProvider>
            </FeedbackProvider>
        </>
    );
}

export default CourseDetails;
