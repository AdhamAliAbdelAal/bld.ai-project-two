import TabsSection from "./Tabs/TabsSection";
import CoursesSection from "./Courses/CoursesSection";
import Loading from "./Loading";
import { useState, useEffect } from 'react';

const SectionOne = () => {
    const [courses, setCourses] = useState(null);
    const [topic, setTopic] = useState(0);
    useEffect(() => {
        setTimeout(()=>{
            fetch("http://localhost:7000/courses").then(response => response.json()).then(data => setCourses(data));
        },2000);
        
    }, []);
    if (!courses)
        return <Loading />;
    return (
        <section className='sec1'>
            <TabsSection activeTopic={topic} setTopic={setTopic} />
            <CoursesSection course={courses[topic]} />
        </section>
    );
}

export default SectionOne;
