import CircularProgress from '@mui/material/CircularProgress';
const Loading = () => {
    return (
        <div className="w-100 my-5 d-flex justify-content-center align-items-center" style={{
            height: "200px"
        }}>
            <CircularProgress
                sx={{
                    color: "#000"
                }}
            />
        </div>
    );
}

export default Loading;
