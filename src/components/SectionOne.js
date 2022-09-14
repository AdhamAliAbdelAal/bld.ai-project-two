import TabsSection from "./Tabs/TabsSection";
import CoursesSection from "./Courses/CoursesSection";
import Loading from "./Loading";
import { useState, useContext } from 'react';
import GlobalContext from "../contexts/GlobalContext";

const SectionOne = () => {
    const [topic, setTopic] = useState(0);
    const {courses}=useContext(GlobalContext);
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
