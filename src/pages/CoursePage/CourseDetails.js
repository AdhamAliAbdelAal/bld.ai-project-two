import "./CourseDetails.css";
import { useState, useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import renderStars from '../../components/Courses/Starts';
const CourseDetails = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/courses").then(res => res.json()).then(data => setData(data[0]))
    }, []);
    console.log(data);
    if (!data)
        return null;
    const { title, Introduction, rate } = data;
    return (
        <div className="bg-dark text-white">
            <div className="container w-75">
                <div className="title-containter">
                    <div className="links-div py-4">
                        <a href="dummy">Development</a>
                        <ArrowForwardIosIcon className="mx-2" sx={{ fontSize: "0.6rem" }} />
                        <a href="dummy">Programming Languages</a>
                        <ArrowForwardIosIcon className="mx-2" sx={{ fontSize: "0.6rem" }} />
                        <a href="dummy">Python</a>
                    </div>
                    <h2 className="fw-bold">
                        {title}
                    </h2>
                    <h5 className="fw-normal">
                        {Introduction}
                    </h5>
                    <div className="rating fw-bold" style={{
                        fontSize:"0.87rem"
                    }}>
                        {rate} {renderStars(rate)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CourseDetails;
