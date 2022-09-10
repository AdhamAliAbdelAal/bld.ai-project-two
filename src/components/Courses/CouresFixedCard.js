import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
const CouresFixedCard = () => {
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
      className='like-button'
      onClick={handleLike}
    />,
    <FavoriteIcon
      className='like-button'
      onClick={handleLike}
    />
    ,
    <CircularProgress
      className='loading-like'
      size={25}
    />
  ]


  const courseCardRef = useRef(null);
  const imageDivRef = useRef(null);
  let prevScroll = 0;

  const handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 470) {
      if (prevScroll > 470)
        return;
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
    return () => { document.removeEventListener("scroll", handleScroll) };
  }, [])
  return (
    <div className='course-card2 bg-white text-dark' ref={courseCardRef}>
      <div className='w-100 image-div position-relative' style={{ height: "191px" }} ref={imageDivRef}>
        <div className='course-video d-flex gap-3 flex-column justify-content-end align-items-center w-100 h-100 position-absolute'>
          <div className="bg-white rounded-circle p-2 hold-play">
            <PlayArrowIcon className="play-icon" />
          </div>
          <div className='text-white fw-bold fs-6 course-preview'>
            Preview this course
          </div>
        </div>
        <div className="layer"></div>

      </div>
      <div className='px-4 pt-4 pb-3'>
        <div className='d-flex gap-2'>
          <div className='fw-bolder fs-2 course-price'>
            E£179.99
          </div>
          <div className='course-discount d-flex align-items-center text-muted text-decoration-line-through'>
            E£679.99
          </div>
          <div className='d-flex align-items-center'>
            74% off
          </div>
        </div>
        <div className='discount-alert'>
          <i className="bi bi-alarm me-2"></i>
          <b>51 minutes</b> left at this price!
        </div>
        <div className='d-flex my-3 gap-1'>
          <div className="px-0 flex-grow-1">
            <Button
              variant="contained"
              color='secondary'
              className='rounded-0 add-to-cart w-100'
            >
              Add to cart
            </Button>
          </div>
          <div className="border border-1 border-dark d-flex justify-content-center align-items-center like-div">
            {LoadingElements[+like]}
          </div>
        </div>
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="outlined"
              className="rounded-0 py-2 fw-bold myButton w-100"
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
        <ul className='course-includes mx-0 px-0'>
          <li className='d-flex gap-3'>
            <i className="bi bi-play-btn"></i>
            <p className='m-0'>
              14 hours on-demand video
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
        <p className='team-access'>
          Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        </p>
        <div>
          <ThemeProvider theme={buttonTheme}>
            <Button
              variant="outlined"
              className="rounded-0 py-2 fw-bold myButton w-100"
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

export default CouresFixedCard;
