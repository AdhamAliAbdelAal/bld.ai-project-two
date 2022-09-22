import renderStars from "./Starts";
import {Link} from 'react-router-dom';
const CourseCard = ({ course,topicId,id }) => {
    const {image_240x135:image,title,visible_instructors:instructors,rating,num_subscribers:people,price:priceObj}=course;
    const price=priceObj?.list_price?.amount;
    const discount=priceObj?.discount_price?.amount;
    return (
        <Link to={`/${topicId}/${id}`} className="course-card mx-1" >
            <img src={image} alt="course" />
            <div className="course-details">
                <h4 className="text-capitalize fs-6 fw-bold">{title}</h4>
                <span className="author-span">
                    {instructors.map(instructor=>{
                        return `${instructor.title}, `;
                    })}
                    </span>
                <div className="rating-course">
                    {rating.toFixed(1)}
                    {renderStars(rating)}
                    <span className="coures-rating-span">({new Intl.NumberFormat().format(people)})</span>
                </div>
                <span className="price-span">E£{price} &nbsp;</span>
                <span className="old-price-span">E£{discount}</span>
            </div>
        </Link>
    );
}

export default CourseCard;