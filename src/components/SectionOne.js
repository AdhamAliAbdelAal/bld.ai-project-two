import TabsSection from "./Tabs/TabsSection";
import CoursesSection from "./Courses/CoursesSection";
import { useState, useEffect } from 'react';

const SectionOne = () => {
    const [courses, setCourses] = useState(null);
    const [topic, setTopic] = useState(0);
    useEffect(() => {
        fetch("http://localhost:7000/courses").then(response => response.json()).then(data => setCourses(data));
    }, []);
    if (!courses)
        return null;
    return (
        <section className='sec1'>
            <TabsSection activeTopic={topic} setTopic={setTopic} />
            <CoursesSection course={courses[topic]} />
        </section>
    );
}

export default SectionOne;
