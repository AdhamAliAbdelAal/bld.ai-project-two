import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useReducer } from 'react';

const LikeAndDislike = () => {
    const iconStyling = {
        fontSize: "1.4rem",
        cursor: "pointer"
    };
    const reducer = (state, action) => {
        switch (action) {
            case "like":
                return [1, 0];
            case "dislike":
                return [0, 1];
            default:
                return [0, 0];
        }
    }
    const [like, dispatch] = useReducer(reducer, [0, 0]);
    const likeIcons = [
        <ThumbUpOffAltIcon sx={iconStyling} onClick={() => dispatch("like")} />,
        <ThumbUpAltIcon sx={iconStyling} onClick={() => dispatch("removeLike")} />
    ];
    const dislikeIcons = [
        <ThumbDownOffAltIcon sx={iconStyling} onClick={() => dispatch("dislike")} />,
        <ThumbDownAltIcon sx={iconStyling} onClick={() => dispatch("removeDislike")} />
    ];
    return (
        <div className="d-flex gap-3">
            <div className="p-2 border border-dark rounded-circle border-2">
                {likeIcons[like[0]]}
            </div>
            <div className="p-2 border border-dark rounded-circle border-2">
                {dislikeIcons[like[1]]}
            </div>

        </div>
    );
}

export default LikeAndDislike;
