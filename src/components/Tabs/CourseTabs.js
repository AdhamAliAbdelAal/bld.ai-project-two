import { useState } from "react";
import styles from './CourseTabs.module.css';
const CourseTabs = () => {
    const tabs = ["overview", "curriculum", "instructor", "reviews"];
    const [value, setvalue] = useState("overview");
    return (
        <div className={`fluid position-sticky bg-white ${styles['tabs-div']}`}>
            <div className="main-container">
                <div className="course-container d-flex justify-content-between">
                    {tabs.map(tab => {
                        const activeClass = value === tab ? "active-course-tab" : null;
                        return (
                            <a
                                href={`#${tab}`}
                                key={tab}
                                className={`flex-grow-1 d-flex justify-content-center text-capitalize course-tab ${activeClass}`}
                                onClick={() => {
                                    setvalue(tab);
                                }}
                            >{tab}</a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CourseTabs;