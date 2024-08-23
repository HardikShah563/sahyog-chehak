// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/footer.css";
// importing icons
import getIconFromIconName from "../config/icons";
// import data
import data from "../data.json";

export default function Footer() {
    // to control navigation between the pages
    const navigate = useNavigate();
    // 
    const navbar = data.navbar;
    const footer = data.footer;

    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer-sections">
                    <div className="foot-section">
                        <img
                            className="footer-logo"
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/" +
                                footer.logo
                            }
                            alt="footer-logo"
                        />
                        {/* social media icons */}
                        <div className="social-media-icons">
                            {footer.socialMedia.map((icon, index) => (
                                <a
                                    key={index}
                                    target="_blank"
                                    href={icon.link}
                                >
                                    {getIconFromIconName(icon.icon, 30, "footer-icon", "grey")}
                                </a>
                            ))}
                        </div>
                    </div>

                    {navbar.navigationLinks.map((footerDiv) => (
                        <div className="foot-section">
                            <li className="heading">
                                <span className="title-text">{footerDiv.name}</span>
                            </li>
                            {footerDiv.dropdown.map((child) => (
                                <div className="footer-links" onClick={() => navigate(child.link)}>{child.name}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <hr />
                <div className="below-footer-links">
                    <div className="below-footer-section flex gap-20 margin-block-10">
                        <span className="hover-light-green cur" onclick={() => navigate("/")}>Terms</span>
                        <span className="hover-light-green cur" onclick={() => navigate("/")}>Privacy</span>
                        <span className="hover-light-green cur" onclick={() => navigate("/")}>Policy</span>
                    </div>

                    <div className="margin-block-10">
                        © <span className="color-light">{(new Date().getFullYear())}</span>&nbsp;|&nbsp;<span className="color-light">Chehak Trust</span>&nbsp;All Rights Reserved
                    </div>
                </div>

                <div className="below-footer-links">
                    <div>
                        <h4 className="padding-10">Developed and powered by:</h4>
                        <a href="https://www.valueye.in">
                            <img
                                src={
                                    process.env.PUBLIC_URL
                                    + "/assets/name.png"
                                }
                                alt=""
                                className="valueye-img"
                            />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
