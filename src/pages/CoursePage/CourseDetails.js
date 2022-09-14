import "./CourseDetails.css";
import { useState, useEffect,useContext } from 'react';
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
import GlobalContext from "../../contexts/GlobalContext";
const CourseDetails = () => {
    const [data, setData] = useState(null);
    const {courses}=useContext(GlobalContext);
    let {id}=useParams();
    useEffect(() => {
        if(!courses)
        return;
        id=parseInt(id);
        courses.every(topic=>{
            const {courses}=topic;
            let exit=true;
            courses.every(course=>{
                const {id:currentId,courseDetails}=course;
                console.log(currentId,id);
                if(currentId===id)
                {
                    setData(courseDetails);
                    exit=false;
                    return false;
                }
                return true;
            })
            return exit;
        });
    }, [courses,id]);
    useEffect(()=>{
        if(data)
            document.title=data.title;
        window.scrollTo({
            top:0,
            behavior:"instant"
        });
        console.log(window.scrollY);
    },[data])
    console.log(data);
    if (!data)
        return <Loading />
    return (
        <>
            <BlackHeader rate={data.rate} ratingCount={data.ratingCount} students={data.enrollCount} title={data.title} price={data.price} originalPrice={data.originalPrice} />
            <CourseHeader data={data} />
            <CourseTabs />
            <hr style={{ margin: 0 }} />
            <LearnSection overview={data.overview} />
            <CourseContent content={data.content} />
            <CourseRequirements requirements={data.requirements} />
            <CourseDescription description={data.description} />
            <Instructors instructors={data.instructors} />
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
