import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './CourseFixedCard.module.css';

const CourseFixedCard = ({image, price, discount, hoursCount }) => {
  const buttonTheme = createTheme(
    {
      palette: {
        primary: {
          main: "#000",
        }
      }
    }
  );
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

  const courseCardRef = useRef(null);
  const imageDivRef = useRef(null);
  let prevScroll = 0;
  const footerHeight=500;

  const handleScroll = () => {
    const maxScroll =document.body.scrollHeight-footerHeight-window.innerHeight ;
    if (window.scrollY >= maxScroll) {
      courseCardRef.current.style.transition = "0s";
      const curr = window.scrollY - maxScroll;
      courseCardRef.current.style.bottom = `${curr}px`;
      courseCardRef.current.style.top = `auto`;
      courseCardRef.current.style.zIndex = 0;
    }
    else if (window.scrollY > 470) {
      if (prevScroll > 470 && prevScroll < maxScroll)
        return;
      courseCardRef.current.style.zIndex = 1000000;
      courseCardRef.current.style.bottom = "20px";
      courseCardRef.current.style.top = "20px";
      courseCardRef.current.style.position = "fixed";
      imageDivRef.current.style.display = "none";
      courseCardRef.current.style.opacity = 0;
      //for transition
      setTimeout(() => {
        if (window.scrollY <= 470)
          return;
        courseCardRef.current.style.transition = "0.5s";
        courseCardRef.current.style.opacity = 1;
      }, 500);

    }
    else {
      if (prevScroll <= 470)
        return;
      courseCardRef.current.style.bottom = "auto";
      courseCardRef.current.style.transition = "0s";
      courseCardRef.current.style.opacity = 1;
      courseCardRef.current.style.top = "103px";
      courseCardRef.current.style.position = "absolute";
      imageDivRef.current.style.display = "block";
    }
    prevScroll = window.scrollY;
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${styles['course-card2']} bg-white text-dark`} ref={courseCardRef}>
      <div className='w-100 position-relative' style={{ height: "191px" }} ref={imageDivRef}>
        <div className={`${styles['course-video']} d-flex gap-3 flex-column justify-content-end align-items-center w-100 h-100 position-absolute`}>
          <div className={`bg-white rounded-circle p-2 ${styles['hold-play']}`}>
            <PlayArrowIcon className={`${styles['play-icon']}`} />
          </div>
          <div className={`text-white fw-bold fs-6 ${styles['course-preview']}`}>
            Preview this course
          </div>
        </div>
        <div className={`${styles['layer']}`}></div>
        <img src={image} className="w-100 h-100" alt="" />

      </div>
      <div className='px-4 pt-4 pb-3'>
        <div className='d-flex gap-2'>
          <div className={`fw-bolder fs-2`}>
            E£{price}
          </div>
          <div className={`${styles['course-discount']} d-flex align-items-center text-muted text-decoration-line-through`}>
            E£{discount}
          </div>
          <div className='d-flex align-items-center'>
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
          <div className={`border border-1 border-dark d-flex justify-content-center align-items-center ${styles['like-div']}`}>
            {LoadingElements[+like]}
          </div>
        </div>
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="outlined"
              className={`rounded-0 py-2 fw-bold ${styles['myButton']}  w-100`}
              color="primary"
            >
              Buy now
            </Button>
          </ThemeProvider>
        </div>
        <p style={
          {
            fontSize: "0.76rem"
          }
        }
          className="text-muted my-3 d-flex justify-content-center align-items-center"
        >
          30-Day Money-Back Guarantee
        </p>
        <h6 className='fw-bolder'>
          This course includes:
        </h6>
        <ul className={`${styles['course-includes']} mx-0 px-0`}>
          <li className='d-flex gap-3'>
            <i className="bi bi-play-btn"></i>
            <p className='m-0'>
              {hoursCount} on-demand video
            </p>
          </li>
          <li className='d-flex gap-3'>
            <i className="bi bi-file-earmark"></i>
            <p className='m-0'>
              1 article
            </p>
          </li>
          <li className='d-flex gap-3'>
            <i className="bi bi-file-earmark-arrow-down"></i>
            <p className='m-0'>
              3 downloadable resources
            </p>
          </li>
          <li className='d-flex gap-3'>
            <i className="bi bi-infinity"></i>
            <p className='m-0'>
              Full lifetime access
            </p>
          </li>
          <li className='d-flex gap-3'>
            <i className="bi bi-phone"></i>
            <p className='m-0'>
              Access on mobile and TV
            </p>
          </li>
          <li className='d-flex gap-3'>
            <i className="bi bi-trophy"></i>
            <p className='m-0'>
              Certificate of completion
            </p>
          </li>
        </ul>
        <div className="d-flex justify-content-evenly mx-0">
          <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Share</a>
          <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Gift this course</a>
          <a href="dummy" className="text-center text-decoration-underline fw-bold course-link2 px-0">Apply Coupon</a>
        </div>
      </div>
      <hr className='m-0' />
      <div className='px-4 py-3' >
        <h5>Training 5 or more people?</h5>
        <p className={`${styles['team-access']}`}>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="outlined"
              className={`rounded-0 py-2 fw-bold ${styles['myButton']}  w-100`}
              color="primary"
            >
              Try Udemy Business
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default CourseFixedCard;
