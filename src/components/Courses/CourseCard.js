import renderStars from "./Starts";
const CourseCard = ({ course }) => {
    const {image,title,author,rating,people,price,discount}=course;
    return (
        <div className="course-card mx-1">
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
        </div>
    );
}

export default CourseCard;