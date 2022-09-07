import { Rating } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const Feedback = ({ studentFeedback, rate }) => {
    const ratings = [5, 4, 3, 2, 1];
    const [opacity, setOpacity] = useState([1, 0.5, 0.5, 0.5, 0.5]);
    const handleActive = (index) => {
        const newOpacity = new Array(5).fill(0.5);
        newOpacity[index] = 1;
        setOpacity(newOpacity);
    }
    const handleActiveAll = (index) => {
        //console.log(opacity, index);
        if (opacity[index] === 1)
            setOpacity(new Array(5).fill(1));
    }
    return (
        <div className="container w-75 my-5">
            <div className="course-container">
                <h4 className="fw-bold fs-4 mb-2">
                    Students feedback
                </h4>
                <div className="d-flex flex-sm-row flex-column gap-sm-5">
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
                                        className="row p-0 pt-2 gap-1 rating-item"
                                        style={{
                                            opacity: opacity[index],
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div className="col-8 p-0"
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
                                        <div className="p-0 col-3 d-flex gap-1 position-relative"
                                            style={{
                                                top: "-8px"
                                            }}
                                        >
                                            <div onClick={() => { handleActive(index) }}>
                                                <Rating name="read-only"
                                                    value={ratings[index]}
                                                    precision={0.1}
                                                    readOnly
                                                    sx={{
                                                        color: "#e59819",
                                                        fontSize: "1.3rem",
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className="text-decoration-underline"
                                                style={{
                                                    color: "#5624d0",
                                                    cursor: "pointer"
                                                }}
                                                onClick={() => {
                                                    handleActive(index);
                                                }}
                                            >
                                                {ele}%
                                            </div>
                                            <div onClick={() => {
                                                handleActiveAll(index);
                                            }}>
                                                <CloseIcon fontSize="small" />
                                            </div>
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
