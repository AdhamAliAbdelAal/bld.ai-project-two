import React from 'react';

const LearnSection = ({ overview }) => {
    return (
        <div className="main-container my-4" id="overview">
            <div className="course-container border border-1 ps-4">
                <h3 className='fs-4 fw-bolder my-4' >
                    What you'll learn
                </h3>
                <ul className='row overview'>
                    {overview.map(ele => {
                        return (
                            <li className='col-12 col-md-6 overview-item py-1' key={ele}>{ele}</li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default LearnSection;
