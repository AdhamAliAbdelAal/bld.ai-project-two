import { useState } from "react";

const CourseTabs = () => {
    const tabs = ["overview", "curriculum", "instructor", "reviews"];
    const [value, setvalue] = useState("overview");
    return (
        <div className="fluid position-sticky top-0 bg-white">
            <div className="container w-75">
                <div className="course-container d-flex justify-content-between">
                    {tabs.map(tab => {
                        const activeClass = value === tab ? "active-course-tab" : null;
                        return (
                            <div
                                key={tab}
                                className={`flex-grow-1 d-flex justify-content-center text-capitalize course-tab ${activeClass}`}
                                onClick={() => {
                                    setvalue(tab);
                                }}
                            >{tab}</div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
}

export default CourseTabs;