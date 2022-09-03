
const TabsSection = ({ activeTopic, setTopic }) => {
    const topics = [
        "python",
        "excel",
        "web development",
        "javascript",
        "data science",
        <><span>aws</span> certification</>,
        "drawing"
    ];
    const handleClick = (index) => {
        setTopic(index);
    }
    return (
        <>
            <div>
                <h1 className="fw-bold fs-3">a broad selection of courses</h1>
                <p>choose from 185,000 online video courses with new additions published every month</p>
            </div>
            <div className="tabs">
                <ul className="first-ul">
                    {topics.map((topic, index) => {
                        return (
                            <li className={activeTopic === index ? "active-topic" : null} key={index}
                                onClick={() => handleClick(index)}>
                                {topic}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default TabsSection;
