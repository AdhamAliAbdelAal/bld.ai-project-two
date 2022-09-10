import { useContext, useState } from "react";
import ReviewsContext from "../../context/ReviewsContext";
import SearchIcon from '@mui/icons-material/Search';
import ReviewsList from './ReviewsList';
import FeedbackContext from "../../context/FeedbackContext";
const Reviews = () => {
    const reviews = useContext(ReviewsContext);
    const { rating } = useContext(FeedbackContext);
    const [search, setSearch] = useState("");
    const filterReviews = reviews.filter(review => {
        return ((review.content.match(new RegExp(search, "i"))) && (rating < 0 || (Math.floor(review.rate) === rating)));
    });
    return (
        <div className="main-container my-5 " id="reviews">
            <div className="course-container">
                <h4 className="fw-bold fs-4 mb-3">
                    Reviews
                </h4>
                <div className="reviews-div d-flex p-0 gap-3 mb-4">
                    <form className='search-reviews d-flex align-items-center justify-content-between p-0'>
                        <input type="text" placeholder='Search reviews' className='px-2 flex-grow-1'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className='bg-dark review-button p-0' onClick={(e) => e.preventDefault()}>
                            <SearchIcon
                                sx={{
                                    color: "#fff",
                                    margin: "auto"
                                }}
                            />
                        </button>
                    </form>
                    <select className='p-0 select-review text-muted'>
                        <option className='' value="-">
                            All reviews
                        </option>
                    </select>
                </div>
                <ReviewsList reviews={filterReviews}
                />
            </div>
        </div>
    );
}

export default Reviews;
