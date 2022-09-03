const CourseCard = ({ course }) => {
    const {image,title,author,rating,people,price,discount}=course;
    const renderStars=(rating)=>{
        let counter=0;
        const stars=[];
        for(let i=0;i<Math.floor(rating);++i)
        {
            stars.push(<i className="bi bi-star-fill" key={counter++}></i>);
        }
        if(Math.floor(rating)!==rating)
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