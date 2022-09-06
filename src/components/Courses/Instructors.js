import ShowMore from 'react-show-more-button';
import { Avatar } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import GroupIcon from '@mui/icons-material/Group';
const Instructors = ({ instructor }) => {
    const { name, Intro, Image, Rating, reviewsNumber, studentsNumber, coursesNumber, description } = instructor;
    const style = {
        fontSize: "0.92rem",
        color: "#515151"
    };
    const iconStyle = {
        fontSize: "0.98rem"
    };
    return (
        <div className="container w-75 my-4">
            <div className="course-container">
                <div>
                    <h4 className="fw-bold fs-4">
                        Instructors
                    </h4>
                    <div className="instructor-div">
                        <h4 className='fs-5 instructor-name'>
                            {name}
                        </h4>
                        <div className="mb-2" style={{
                            color: "#6a6f73",
                            fontWeight: 500
                        }}>
                            {Intro}
                        </div>
                        <div className="d-flex gap-3">
                            <div className=" ">
                                <Avatar
                                    src={Image}
                                    sx={{ width: 115, height: 115 }}
                                />
                            </div>
                            <div className="d-flex flex-column gap-1">
                                <div className='d-flex gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <StarRateIcon sx={iconStyle} />
                                    </div>
                                    <div className='d-flex align-items-center' style={style}>
                                        {Rating} Instructor Rating
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <WorkspacePremiumIcon sx={iconStyle} />
                                    </div>
                                    <div className='d-flex align-items-center' style={style}>
                                        {reviewsNumber} Reviews
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <GroupIcon sx={iconStyle} />
                                    </div>
                                    <div className='d-flex align-items-center' style={style}>
                                        {studentsNumber} Students
                                    </div>
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='d-flex align-items-center'>
                                        <PlayCircleIcon sx={iconStyle} />
                                    </div>
                                    <div className='d-flex align-items-center' style={style}>
                                        {coursesNumber} Courses
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ShowMore
                            maxHeight={180}
                            className="show-more-desc"
                            classNameButton="show-more-button-desc"
                            classNameButtonDiv="button-div-desc justify-content-start p-0"
                        >
                            <p className='my-3 instructor-description'>
                                {description}
                            </p>
                        </ShowMore>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instructors;
