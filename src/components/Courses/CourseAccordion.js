import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';
import ShowMore from 'react-show-more-button';
import styles from './CourseAccordion.module.css';
//{`${styles[]}`}
const CourseAccordion = ({ sections }) => {
    return (
        <ShowMore 
        maxHeight={395}
        className={`${styles['show-more-div']}`}
        classNameButton={`flex-grow-1 ${styles['show-more-button']}`}
        classNameButtonDiv={`${styles['button-div']}}`}
        >
            <div className="border border-1">
                {sections.map(sec => {
                    const { index, title, lecture_count, content_length, items } = sec;
                    return (
                        <Accordion elevation={0}
                            square
                            key={index}
                            disableGutters
                        >
                            <AccordionSummary
                                expandIcon={
                                    <ExpandMoreIcon
                                        className="text-dark"
                                    />
                                }
                                className="bg-light flex-row-reverse gap-2"
                            >
                                <div className="d-flex justify-content-between flex-grow-1">
                                    <Typography
                                        className={`fw-bolder ${styles['title']}`} >
                                        {title}
                                    </Typography>
                                    <p className={`p-0 m-0 ${styles['duration-info']}`}>
                                        {lecture_count}&nbsp;lectures&nbsp;
                                        <FiberManualRecordIcon
                                            sx={{
                                                fontSize: "0.4rem",
                                                color: grey[900]
                                            }}
                                        />
                                        &nbsp;{Math.ceil(content_length / 60)}&nbsp;min
                                    </p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <ul className={`${styles['vidoes-list']}`}>
                                        {items.map(item => {
                                            const { title, content_summary } = item;
                                            return (
                                                <li className="my-3 d-flex gap-3" key={title}>
                                                    <i className="bi bi-play-circle-fill"></i>
                                                    <p className="flex-grow-1 mb-0">{title}</p>
                                                    <p className={`${styles["video-duration"]}`}>{content_summary}</p>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </div>
        </ShowMore>

    );
}

export default CourseAccordion;
