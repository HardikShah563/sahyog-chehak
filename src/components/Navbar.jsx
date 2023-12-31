// importing from react
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing icons
import { FaBarsStaggered } from "react-icons/fa6";

export default function Navbar() {
    // to control navigation between the pages
    const navigate = useNavigate();
    // setting admin state
    let [admin, setAdmin] = useState(true);
    let iterate = 0;
    const showNavBar = () => {
        document.querySelector(".nav-links").classList.toggle("active");
    }

    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img src={
                        process.env.PUBLIC_URL + "/assets/logo-sahyog-small.png"
                    } className="logo"></img>
                    <div className="nav-links">
                        <div className="dropdown">
                            <li>
                                <p href="#main">About</p>
                            </li>
                            <div className="dropdown-content">
                                <div onClick={() => navigate("/vision-and-mission")}>Our Values and Mission</div>
                                <div onClick={() => navigate("/values")}>Our Values</div>
                                <div onClick={() => navigate("/team")}>Our Team</div>
                                <div onClick={() => navigate("/how-we-began")}>How we began</div>
                                <div onClick={() => navigate("/photo-gallery")}>Photo Gallery</div>
                                <div onClick={() => navigate("/our-partners-and-supporters")}>Our Partners and Supporters</div>
                                <div onClick={() => navigate("/stories-of-change")}>Stories of Change</div>
                                {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <p href="#main">Programs</p>
                            </li>
                            <div className="dropdown-content">
                                <div onClick={() => navigate("/sahyog-sangharsh")}>Sahyog Sangharsh</div>
                                <div onClick={() => navigate("/sahyog-roshan")}>Sahyog Roshan</div>
                                <div onClick={() => navigate("/sahyog-scholarship-and-mentorship-program")}>Sahyog Scholarship Mentorship Program</div>
                                <div onClick={() => navigate("/sahyog-jhula")}>Sahyog Jhula</div>
                                {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div onClick={() => navigate("/finances")}>Finances</div>
                            </li>
                            <div className="dropdown-content">
                                {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                            </div>
                        </div>

                        <div className="dropdown">
                            <li>
                                <div onClick={() => navigate("/sangarsh-campaign")}>Sangarsh Campaign</div>
                            </li>
                            <div className="dropdown-content">
                                {admin ? <div className="add-item" onClick={() => navigate("/add-element")}>+ Add Item</div> : ""}
                            </div>
                        </div>

                        <div className="dropdown login-hide">
                            <li className="nav-button" onClick={() => navigate("/donate")}>
                                <div>
                                    Donate
                                </div>
                            </li>
                        </div>

                        {admin ?
                            <div className="dropdown add-item add-nav-item">
                                <li>
                                    <div onClick={() => navigate("/add-list-item")}>+ Add Item</div>
                                </li>
                            </div> : ""}
                    </div>
                </div>

                <div className="nav-buttons login-display">
                    <li className="nav-button" onClick={() => navigate("/donate")}>
                        <div>
                            Donate
                        </div>
                    </li>
                </div>
                <div className="nav-lines" onClick={showNavBar}>
                    <FaBarsStaggered fill="white" size={30} />
                </div>
            </nav>
        </>
    );
};
