import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import renderStars from '../../components/Courses/Starts';
import LanguageIcon from '@mui/icons-material/Language';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import CourseFixedCard from '../Courses/CourseFixedCard';
import { useState, useEffect } from 'react';
import styles from "./CourseHeader.module.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import FavoriteIcon from '@mui/icons-material/Favorite';
const CourseHeader = ({ data }) => {
    const { title, Introduction, rate, ratingCount, enrollCount: students, instructor,
        lastUpdate, image, price, originalPrice: discount, hoursCount } = data;
    const courseFixedCard = () => {
        if (window.innerWidth > 1080)
            return (<CourseFixedCard image={image} price={price} discount={discount} hoursCount={hoursCount} />);
        else
            return (null);
    }
    const [fixedCard, setFixedCard] = useState(courseFixedCard());
    const resize = () => {
        setFixedCard(courseFixedCard());
    }
    const [like, setLike] = useState(0);
    const handleLike = () => {
        setLike(2);
        setTimeout(() => {
            if (like === 0) {
                setLike(1);
                return;
            }
            setLike(0);
        }, 1000);
    }

    const LoadingElements = [
        <FavoriteBorderIcon
            className={`${styles['like-button']}`}
            onClick={handleLike}
        />,
        <FavoriteIcon
            className={`${styles['like-button']}`}
            onClick={handleLike}
        />
        ,
        <CircularProgress
            className={`${styles['loading-like']}`}
            size={25}
        />
    ];
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => { window.removeEventListener('resize', resize) }
    }, []);
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
                    <div className={`w-100 position-relative ${styles['small-screen-header']}`}>    
                        <div className={`bg-white rounded-circle p-2 ${styles['hold-play']}`}>
                            <PlayArrowIcon className={`${styles['play-icon']}`} />
                        </div>
                        <div className={`text-white fw-bold fs-6 ${styles['course-preview']}`}>
                            Preview this course
                        </div>
                        <div className={`${styles['layer']}`}></div>
                        <img src={image} className="w-100" alt="" />
                    </div>
                    <h2 className="fw-bold mt-3">
                        {title}
                    </h2>
                    <h5 className={`fw-normal ${styles['introduction']}`}>
                        {Introduction}
                    </h5>
                    <div className={`${styles['mb-customized']} rating-info d-flex`}>
                        <div className="rating fw-bold" style={{
                            fontSize: "0.87rem"
                        }}>
                            {rate} {renderStars(rate, "05")}
                        </div>
                        <a className={`${styles['rating-count']} header-font`} href="dummy">
                            ({ratingCount} ratings)
                        </a>
                        <p className="header-font m-0">
                            {students} students
                        </p>
                    </div>
                    <p className={`${styles['mb-customized']}`}>
                        Created by <span className={`${styles['instructor-par']} header-font`}>{instructor.name}</span>
                    </p>
                    <div className={`header-font ${styles['subtitles']} d-flex`}>
                        <div className={`${styles['mb-customized']}`}>
                            <NewReleasesIcon
                                sx={{
                                    fontSize: "1rem",
                                    marginRight: 1,
                                }} />
                            Last updated {lastUpdate}
                        </div>
                        <div className={`${styles['mb-customized']}`}>
                            <LanguageIcon
                                sx={{
                                    fontSize: "1rem",
                                    marginRight: 1,
                                }} />
                            English
                        </div>
                        <div className={`${styles['mb-customized']}`}>
                            <ClosedCaptionIcon
                                sx={{
                                    fontSize: "1.2rem",
                                    marginRight: 1,
                                }} />
                            English
                        </div>
                    </div>
                    <div className={`${styles['small-screen-header']} pb-4 mt-1`}>
                        <div className='d-flex gap-2'>
                            <div className={`fw-bolder ${styles['course-price']}`}>
                                E£{price}
                            </div>
                            <div className={`${styles['course-discount']} d-flex align-items-center text-decoration-line-through`}>
                                E£{discount}
                            </div>
                            <div className={`${styles['course-discount-percentage']} d-flex align-items-center`}>
                                74% off
                            </div>
                        </div>
                        <div className={`${styles['discount-alert']}`}>
                            <i className="bi bi-alarm me-2"></i>
                            <b>51 minutes</b> left at this price!
                        </div>
                        <div className='d-flex my-3 gap-1'>
                            <div className="px-0 flex-grow-1">
                                <Button
                                    variant="contained"
                                    color='secondary'
                                    className={`rounded-0 ${styles['add-to-cart']} w-100`}
                                >
                                    Add to cart
                                </Button>
                            </div>
                            <div className={`border border-1 border-white d-flex justify-content-center align-items-center ${styles['like-div']}`}>
                                {LoadingElements[+like]}
                            </div>
                        </div>
                        <p style={
                            {
                                fontSize: "0.76rem"
                            }
                        }
                            className="my-2 d-flex justify-content-center align-items-center"
                        >
                            30-Day Money-Back Guarantee
                        </p>
                        <p style={
                            {
                                fontSize: "0.76rem"
                            }
                        }
                            className="my-2 d-flex justify-content-center align-items-center mb-2"
                        >
                            Full Lifetime Access
                        </p>
                        <div className="d-flex justify-content-evenly mx-0 mt-4">
                            <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Share</a>
                            <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Gift this course</a>
                            <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Apply Coupon</a>
                        </div>
                    </div>
                </div>
                {fixedCard}

            </div>
        </div>
    );
}

export default CourseHeader;
