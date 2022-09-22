import "./Footer.css";
import LanguageIcon from '@mui/icons-material/Language';
const Footer = () => {
    return (
        <footer className='fluid bg-dark text-white m-0 mt-5'>
            <div className="fluid mx-auto w-100 d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
                <h5 className="mb-0">
                    Top companies choose <span className="udemy-span">Udemy Business</span> to build in-demand career skills.
                </h5>
                <div className="d-flex gap-customized flex-wrap">
                    <img alt="Nasdaq" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
                    <img alt="Volkswagen" height="44" width="44" src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
                    <img alt="Box" height="44" width="67" src="https://s.udemycdn.com/partner-logos/v4/box-light.svg" />
                    <img alt="NetApp" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
                    <img alt="Eventbrite" height="44" width="115" src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
                </div>
            </div>
            <hr className="m-0" />
            <div className="fluid mx-auto w-100 row">
                <div className="row col-9 footer-links p-0 m-0">
                    <div className="col-sm-4">Udemy Business</div>
                    <div className="col-sm-4">Careers</div>
                    <div className="col-sm-4">Terms</div>
                    <div className="col-sm-4">Teach on Udemy</div>
                    <div className="col-sm-4">Blog</div>
                    <div className="col-sm-4">Privacy policy</div>
                    <div className="col-sm-4">Get the app</div>
                    <div className="col-sm-4">Help and Support</div>
                    <div className="col-sm-4">Cookie settings</div>
                    <div className="col-sm-4">About us</div>
                    <div className="col-sm-4">Affiliate</div>
                    <div className="col-sm-4">Sitemap</div>
                    <div className="col-sm-4">Contact us</div>
                    <div className="col-sm-4">Investors</div>
                    <div className="col-sm-4">Accessibility statement</div>
                </div>
                <div className="col-3 position-relative">
                    <div className="d-flex gap-2 border border-2 border-white english-button position-absolute py-2 px-3">
                        <LanguageIcon sx={{ fontSize: "1.4rem" }} />
                        <div className="position-relative" style={{
                            top: "-1px"
                        }}>
                            English
                        </div>
                    </div>
                </div>
            </div>
            <div className="fluid mx-auto w-100 d-flex justify-content-between" style={{paddingBottom:"100px"}}>
                <img src="	https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                    width="91" height="34" alt="undemy icon" />
                <p style={{
                    fontSize:"0.8rem"
                }}>© 2022 Udemy, Inc.</p>
            </div>
        </footer>
    );
}

export default Footer;
