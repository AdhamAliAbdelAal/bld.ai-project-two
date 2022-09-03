import { useRef,useContext } from "react";
import SearchContext from "../../context/SearchContext";
const Navbar = () => {
    const inputRef=useRef(null);
    const {setSearch}=useContext(SearchContext);
    return (
        <nav>
            <a href="https://www.udemy.com"><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                width="91" height="34" alt="undemy icon" /></a>
            <div>
                <a href="dummy">categories</a>
            </div>
            <form className="search-div" action="">
                <div>
                    <button type="submit" onClick={(e)=>{
                        e.preventDefault();
                        setSearch(inputRef.current.value);
                    }}><i className="bi bi-search"></i></button>
                </div>
                <input ref={inputRef} type="text" placeholder="Search for anything" />
            </form>
            <div className="udemy-business">
                <a href="dummy">udemy business</a>
            </div>
            <div className="teach-on-udemy">
                <a href="dummy">teach on udemy</a>
            </div>
            <div>
                <a href="dummy">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
            </div>
            <div className="login-button">
                <a href="dummy">log in</a>
            </div>
            <div className="signup-button">
                <a href=" ">sign up</a>
            </div>
            <div className="global-button">
                <a href=" "><i className="fa-solid fa-globe "></i></a>
            </div>
            <div className="menu">
                <i className="bi bi-list"></i>
            </div>
        </nav>
    );
}

export default Navbar;
