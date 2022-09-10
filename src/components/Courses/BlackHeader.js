const BlackHeader = ({rate,ratingCount,students,title}) => {
    return (
        <div className='position-fixed top-0 bg-dark black-header w-100 py-3 px-4'>
            <h6 className='text-white fw-bolder'>{title}</h6>
            <div className="rating-info d-flex">
                <div className="rating fw-bold" style={{
                    fontSize: "0.87rem"
                }}>
                    {rate} <i className={`bi bi-star-fill mx-1`}></i>
                </div>
                <a className="rating-count header-font" href="dummy">
                    ({ratingCount} ratings)
                </a>
                <p className="students-count header-font text-white">
                    {students} students
                </p>
            </div>
        </div>
    );
}

export default BlackHeader;
