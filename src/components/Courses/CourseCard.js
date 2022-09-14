import renderStars from "./Starts";
import {Link} from 'react-router-dom';
import CourseDetailsContext from "../../contexts/GlobalContext";
import { useContext } from "react";
const CourseCard = ({ course }) => {
    const {id,image,title,author,rating,people,price,discount,courseDetails}=course;
    const {setCourseDetails}=useContext(CourseDetailsContext);
    const handleClick=()=>{
        setCourseDetails(courseDetails);
    }
    return (
        <Link to={`/${id}`} className="course-card mx-1" >
            <img src={image} alt="course" />
            <div className="course-details">
                <h4 className="text-capitalize fs-6 fw-bold">{title}</h4>
                <span className="author-span">{author}</span>
                <div className="rating">
                    {rating.toFixed(1)}
                    {renderStars(rating)}
                    <span className="coures-rating-span">({people})</span>
                </div>
                <span className="price-span">E£{price} &nbsp;</span>
                <span className="old-price-span">E£{discount}</span>
            </div>
        </Link>
    );
}

export default CourseCard;