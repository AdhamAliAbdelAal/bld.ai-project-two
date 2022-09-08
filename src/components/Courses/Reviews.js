import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Reviews = () => {
    return (
        <div className="container w-75 my-5">
            <div className="course-container">
                <h4 className="fw-bold fs-4">
                    Reviews
                </h4>
                <div className="reviews-div d-flex p-0 gap-3">
                    <form className='search-reviews d-flex align-items-center justify-content-between p-0'>
                        <input type="text" placeholder='Search reviews' className='ps-2' />
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
            </div>
        </div>
    );
}

export default Reviews;
