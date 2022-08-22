const CourseCard = ({ course }) => {
    const renderStars=(rating)=>{
        let counter=0;
        const stars=[];
        for(let i=0;i<Math.floor(rating);++i)
        {
            stars.push(<i className="bi bi-star-fill" key={counter++}></i>);
        }
        if(Math.floor(rating)!=rating)
        {
            stars.push(<i className="bi bi-star-half" key={counter++}></i>);
        }
        for(let i=0;i<5-Math.ceil(rating);++i)
        {
            stars.push(<i className="bi bi-star" key={counter++}></i>)
        }
        return stars;
    }
    return (
        <div className="course-card">
            <img src={course.image} alt="course image" />
            <div className="course-details">
                <h4>{course.title}</h4>
                <span className="author-span">{course.author}</span>
                <div className="rating">
                    {course.rating}
                    {renderStars(course.rating)}
                    <span className="coures-rating-span">({course.people})</span>
                </div>
                <span className="price-span">E£{course.price} &nbsp;</span>
                <span className="old-price-span">E£{course.discount}</span>
            </div>
        </div>
    );
}

export default CourseCard;