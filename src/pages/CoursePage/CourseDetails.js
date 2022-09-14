import "./CourseDetails.css";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import CourseHeader from "../../components/Header/CourseHeader";
import CourseTabs from "../../components/Tabs/CourseTabs";
import LearnSection from "../../components/Courses/LearnSection";
import CourseContent from "../../components/Courses/CourseContent";
import CourseRequirements from "../../components/Courses/CourseRequirements";
import CourseDescription from "../../components/Courses/CourseDescription";
import Instructors from "../../components/Courses/Instructors";
import Feedback from "../../components/Courses/Feedback";
import Reviews from "../../components/Courses/Reviews";
import { ReviewsProvider } from "../../contexts/ReviewsContext";
import { FeedbackProvider } from "../../contexts/FeedbackContext";
import Loading from "../../components/Loading";
import BlackHeader from "../../components/Courses/BlackHeader";
import NumberFormatting from "../../utilities/NumberFormatting";
const CourseDetails = () => {
    const [data, setData] = useState(null);
    const [curriculum,setCurriculum]=useState(null);
    const [reviews,setReviews]=useState(null);
    const {id,topic}=useParams();
    console.log(id,topic);

    //formatting numbers

    useEffect(()=>{
        if(data)
            document.title=data.title;
        window.scrollTo({
            top:0,
            behavior:"instant"
        });
    },[data]);

    //fetching course from summary
    useEffect(()=>{
        fetch(`http://localhost:7000/summary/${topic}`).then(response => response.json()).then(data => setData(data['items'][id]));
    },[id,topic]);

    //fetching curriculum and reviews
    useEffect(()=>{
        if(!data)
            return;
        fetch(`http://localhost:7000/data/${data.id}`).then(response => response.json()).then(data => setCurriculum(data['curriculum_context']));
        fetch(`http://localhost:7000/review/${data.id}`).then(response => response.json()).then(data => setReviews(data));
    },[data,]);

    console.log(data,curriculum,reviews);
    if (!data||!curriculum||!reviews)
        return <Loading />
    
    
    return (
        <>
            <BlackHeader rate={data.rating.toFixed(1)} ratingCount={NumberFormatting(data.num_reviews)} students={NumberFormatting(data.num_subscribers)} title={data.title} price={data.price?.list_price?.amount} originalPrice={data.price?.discount_price?.amount} />
            <CourseHeader data={data} />
            <hr style={{ margin: 0 }} />
            <CourseTabs />
            <LearnSection overview={data.objectives_summary} />
            <CourseContent content={curriculum.data} lecturesCount={data.num_published_lectures}   />
            {/*
            
            
            
            
            <CourseRequirements requirements={data.requirements} />
            <CourseDescription description={data.description} />
            <Instructors instructors={data.instructors} />
            <FeedbackProvider>
                <Feedback studentFeedback={data.studentFeedback} rate={data.rate} />
                <ReviewsProvider value={data.reviews}>
                    <Reviews />
                </ReviewsProvider>
            </FeedbackProvider> */}
        </>
    );
}

export default CourseDetails;
