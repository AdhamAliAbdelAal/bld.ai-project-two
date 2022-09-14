import styles from "./BlackHeader.module.css";
const BlackHeader = ({ rate, ratingCount, students, title ,price,originalPrice}) => {
    return (
        <div className={`position-fixed ${styles['black-header']} w-100 px-4 row justify-content-between p-2 mx-0`}>
            <div className={`col-6 p-0 align-items-center ${styles['title-holder']}`}>
                <div className="w-100">
                    <h6 className={`text-white fw-bolder ${styles['title']} w-100`}>{title}</h6>
                    <div className="rating-info d-flex">
                        <div className="rating fw-bold" style={{
                            fontSize: "0.87rem"
                        }}>
                            {rate} <i className={`bi bi-star-fill mx-1`}></i>
                        </div>
                        <a className={`${styles['rating-count']} header-font`} href="dummy">
                            ({ratingCount} ratings)
                        </a>
                        <p className="header-font text-white my-0">
                            {students} students
                        </p>
                    </div>
                </div>
            </div>
            <div className={`${styles['price-div']} p-0 d-flex col-6 justify-content-end gap-3`}>
                <div>
                    <div className={`fw-bolder fs-4 ${styles['black-header-price']}`}>E£{price}</div>
                    <div className={`${styles['black-header-discount']} text-decoration-line-through`}>E£{originalPrice}</div>
                </div>
                <div className={`${styles['buy-button-container']} d-flex justify-content-center align-items-center`}>
                    <div className={`${styles['buy-button']}`}>
                        Buy Now
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlackHeader;
