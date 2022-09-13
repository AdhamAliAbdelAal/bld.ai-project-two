import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from './CourseFixedCard.module.css';

const CourseFixedCard = ({ image, price, discount, hoursCount }) => {
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



  return (
  );
}

export default CourseFixedCard;
