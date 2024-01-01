// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/footer.css";
// importing icons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    // to control navigation between the pages
    const navigate = useNavigate();

    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer-sections">
                    <div className="foot-section">
                        <img
                            className="footer-logo"
                            src={
                                process.env.PUBLIC_URL + "/assets/logo-sahyog-small.png"
                            }
                            alt="jalaram bhakt mandal logo"
                        />
                        <div className="social-media-icons">
                            <FaFacebook size={30} className="icon-dark" />
                            <FaTwitter size={30} className="icon-dark" />
                            <FaLinkedin size={30} className="icon-dark" />
                        </div>
                    </div>

                    <div
                        className="foot-section">
                        <li className="heading">
                            <span className="yellow-text">About</span>
                        </li>
                        <li>
                            <div onClick={() => navigate("/vision-and-mission")}>Our Values and Mission</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/values")}>Our Values</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/our-trestees")}>Our Trustees</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/how-we-began")}>How we began</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/photo-gallery")}>Photo Gallery</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/our-team")}>Our Team</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/our-partners-and-supporters")}>Our Partners and Supporters</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/stories-of-change")}>Stories of Change</div>
                        </li>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            <span className="yellow-text">Programs</span>
                        </li>
                        <li>
                            <div onClick={() => navigate("/sahyog-sangharsh")}>Sahyog Sangharsh</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/sahyog-roshan")}>Sahyog Roshan</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/sahyog-scholarship-and-mentorship-program")}>Sahyog Scholarship Mentorship Program</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/sahyog-jhula")}>Sahyog Jhula</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/add-element")}>Sahyog Jhula</div>
                        </li>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            <span className="yellow-text">Reports</span>
                        </li>
                        <li>
                            <div onClick={() => navigate("/reports")}>Annual Reports</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/financials")}>Financials</div>
                        </li>
                    </div>

                    <div className="foot-section">
                        <li className="heading">
                            <span className="yellow-text">Other</span>
                        </li>
                        <li>
                            <div onClick={() => navigate("/sangarsh-campaign")}>Sangarsh Campaign</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/covid-19-relief")}>Covid-19 Relief</div>
                        </li>
                        <li>
                            <div onClick={() => navigate("/donate")}>Donate Now</div>
                        </li>
                    </div>
                </div>
                <hr />
                <div className="below-footer-links">
                    <div className="below-footer-section privacy-policy">
                        <li><div onclick={() => navigate("/")}><span className="yellow-text">Terms</span></div></li>
                        <li><div onclick={() => navigate("/")}><span className="yellow-text">Privacy</span></div></li>
                        <li><div onclick={() => navigate("/")}><span className="yellow-text">Policy</span></div></li>
                    </div>

                    <div className="below-footer-section">
                        <span>@2023&nbsp;</span>
                        <span>|&nbsp;All Rights Reserved by Chehak Trust</span>
                    </div>
                </div>
            </footer>
        </>
    );
};
