import { Avatar, Rating } from "@mui/material";
import LikeAndDislike from "./LikeAndDislike";

const ReviewsList = ({reviews}) => {
    return (
        <div className="">
            {
                reviews.map(review => {
                    const { name, id, content, rate } = review;
                    const brief = name.split(" ").map(word => word[0]).join("");
                    return (
                        <div className="row mx-0" key={id}>
                            <Avatar className="col-4 bg-dark fs-6 fw-bold">
                                {brief}
                            </Avatar>
                            <div className="col-8">
                                <h5 className="fs-6 fw">
                                    {name}
                                </h5>
                                <div className="d-flex gap-2">
                                    <Rating name="half-rating-read"
                                        value={parseInt(rate)}
                                        precision={0.1}
                                        size="small"
                                        readOnly
                                        sx={{
                                            color: "#e59819",
                                        }}
                                    />
                                    <p
                                        className="text-muted m-0 position-relative"
                                        style={{
                                            top: "0px",
                                            fontSize: "0.8rem"
                                        }}
                                    >2 weeks ago</p>
                                </div>
                                <p className="review-content my-2">
                                    {content}
                                </p>
                                <p
                                    className="text-muted"
                                    style={{
                                        fontSize: "0.75rem"
                                    }}
                                >
                                    Was this review helpful?
                                </p>
                                <LikeAndDislike />
                            </div>
                            <hr className="my-3" />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ReviewsList;
