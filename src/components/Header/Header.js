import alarm from '../../images/header image.svg';
const Header = () => {
    return (
        <header>
            <div>
                <h1 className="fw-bold fs-3">learning that gets you</h1>
                <p>skills for your present (and your future). Get started with us.</p>
            </div>
            <img src={alarm} alt="laptop" />
        </header>
    );
}

export default Header;
