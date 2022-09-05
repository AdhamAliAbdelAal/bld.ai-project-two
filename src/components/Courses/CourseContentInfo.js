import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';
const CourseContentInfo = ({sectionsCount,lecturesCount,totalLength}) => {
    return (
        <div>
            <p className='content-item'>{sectionsCount}&nbsp;sections&nbsp;
                <FiberManualRecordIcon
                    sx={{
                        fontSize: "0.4rem",
                        color: grey[900]
                    }}
                /> {lecturesCount}&nbsp;lectures&nbsp;
                <FiberManualRecordIcon sx={{
                    fontSize: "0.4rem",
                    color: grey[900]
                }} />
                &nbsp;{totalLength}&nbsp;total length</p>
        </div>
    );
}

export default CourseContentInfo;
