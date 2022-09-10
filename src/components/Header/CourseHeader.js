import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import renderStars from '../../components/Courses/Starts';
import LanguageIcon from '@mui/icons-material/Language';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import CouresFixedCard from '../Courses/CouresFixedCard';
const CourseHeader = ({data}) => {
    const { title, Introduction, rate, ratingCount, enrollCount: students, instructor,
        lastUpdate,image,price,originalPrice:discount,hoursCount } = data;
    return (
        <div className="bg-dark text-white">
            <div className="main-container">
                <div className="course-container">
                    <div className="links-div py-4">
                        <a href="dummy">Development</a>
                        <ArrowForwardIosIcon className="mx-2" sx={{ fontSize: "0.6rem" }} />
                        <a href="dummy">Programming Languages</a>
                        <ArrowForwardIosIcon className="mx-2" sx={{ fontSize: "0.6rem" }} />
                        <a href="dummy">Python</a>
                    </div>
                    <h2 className="fw-bold">
                        {title}
                    </h2>
                    <h5 className="fw-normal">
                        {Introduction}
                    </h5>
                    <div className="rating-info d-flex">
                        <div className="rating fw-bold" style={{
                            fontSize: "0.87rem"
                        }}>
                            {rate} {renderStars(rate, "05")}
                        </div>
                        <a className="rating-count header-font" href="dummy">
                            ({ratingCount} ratings)
                        </a>
                        <p className="students-count header-font">
                            {students} students
                        </p>
                    </div>
                    <p>
                        Created by <span className="instructor-par header-font">{instructor.name}</span>
                    </p>
                    <div className="header-font d-flex gap-3" style={{
                        paddingBottom: 33
                    }}>
                        <div>
                            <NewReleasesIcon
                                sx={{
                                    fontSize: "1rem",
                                    marginRight: 1,
                                }} />
                            Last updated {lastUpdate}
                        </div>
                        <div>
                            <LanguageIcon
                                sx={{
                                    fontSize: "1rem",
                                    marginRight: 1,
                                }} />
                            English
                        </div>
                        <div>
                            <ClosedCaptionIcon
                                sx={{
                                    fontSize: "1.2rem",
                                    marginRight: 1,
                                }} />
                            English
                        </div>
                    </div>
                </div>
                <CouresFixedCard image={image} price={price}discount={discount} hoursCount={hoursCount} />
            </div>
        </div>
    );
}

export default CourseHeader;
