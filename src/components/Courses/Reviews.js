import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ReviewsList from './ReviewsList';
const Reviews = () => {
    return (
        <div className="container w-75 my-5">
            <div className="course-container">
                <h4 className="fw-bold fs-4 mb-3">
                    Reviews
                </h4>
                <div className="reviews-div d-flex p-0 gap-3 mb-4">
                    <form className='search-reviews d-flex align-items-center justify-content-between p-0'>
                        <input type="text" placeholder='Search reviews' className='px-2 flex-grow-1' />
                        <button className='bg-dark review-button p-0'>
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
                <ReviewsList/>
            </div>
        </div>
    );
}

export default Reviews;
