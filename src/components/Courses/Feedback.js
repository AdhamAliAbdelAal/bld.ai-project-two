import { Rating } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from "react";
import FeedbackContext from "../../contexts/FeedbackContext";
import styles from './Feedback.module.css';
const Feedback = ({ studentFeedback, rate }) => {
    const { setRating } = useContext(FeedbackContext);
    const ratings = [5, 4, 3, 2, 1];
    const [opacity, setOpacity] = useState([0.5, 0.5, 0.5, 0.5, 0.5]);
    const handleActive = (index) => {
        const newOpacity = new Array(5).fill(0.5);
        newOpacity[index] = 1;
        setOpacity(newOpacity);
        setRating(ratings[index]);
    }
    const handleActiveAll = (index) => {
        if (opacity[index] === 1) {
            setOpacity(new Array(5).fill(1));
            setRating(-1);
        }
    }
    return (
        <div className="main-container my-5">
            <div className="course-container">
                <h4 className="fw-bold fs-4 mb-2">
                    Students feedback
                </h4>
                <div className="d-flex flex-sm-row flex-column gap-sm-4">
                    <div className="d-flex flex-column">
                        <span className="num">
                            {rate}
                        </span>
                        <Rating name="read-only"
                            value={rate}
                            precision={0.1}
                            readOnly
                            sx={{
                                color: "#e59819",
                                fontSize: "1.3rem",
                                top: "-15px"
                            }}
                            className='position-relative'
                        />
                        <span
                            className='position-relative'
                            style={{
                                color: "#b4690e",
                                fontWeight: "bolder",
                                top: "-10px"
                            }}
                        >
                            Course Rating
                        </span>
                    </div>
                    <div className="flex-grow-1 mt-2">
                        {
                            studentFeedback.map((ele, index) => {
                                return (
                                    <div key={ratings[index]}
                                        className="mx-0 d-flex p-0 pt-2"
                                        style={{
                                            opacity: opacity[index],
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div className={`${styles['progress-container']}`}
                                            onClick={() => { handleActive(index) }}
                                        >
                                            <div className="progress rounded-0" style={{
                                                height: "0.5rem",
                                                backgroundColor: "#d1d7dc"
                                            }}>
                                                <div className="progress-bar" style={{
                                                    width: `${ele}%`,
                                                    backgroundColor: "#6a6f73"
                                                }}>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                                onClick={() => { handleActive(index) }}
                                                className={`${styles['rating-container']} d-flex justify-content-center position-relative`}
                                                >
                                                <Rating name="read-only"
                                                    value={ratings[index]}
                                                    precision={0.1}
                                                    readOnly
                                                    sx={{
                                                        color: "#e59819",
                                                        fontSize: "1.3rem",
                                                        margin:"auto"
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="text-decoration-underline position-relative"
                                                style={{
                                                    color: "#5624d0",
                                                    cursor: "pointer",
                                                    top: "-8px",
                                                    flexGrow:1,
                                                    minWidth:"33px"
                                                }}
                                                onClick={() => {
                                                    handleActive(index);
                                                }}
                                            >
                                                {ele}%
                                            </div>
                                            <div
                                                onClick={() => {
                                                    handleActiveAll(index);
                                                }}
                                                className={`position-relative ${styles['close-icon']}`}
                                            >
                                                <CloseIcon fontSize="small" />
                                            </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;
