// importing from react
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing icons
import { FaBarsStaggered } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
// importing data
import data from "../data/data.js";

export default function Navbar() {
    // to control navigation between the pages
    const navigate = useNavigate();
    const [showNavBar, setShowNavbar] = useState(false);

    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img
                        src={
                            process.env.PUBLIC_URL + 
                            "/assets/logo-sahyog-small.png"
                        }
                        className="logo"
                    ></img>

                    <div className="w-100 flex justify-space-btween">
                        <div className={`nav-links ${showNavBar && "active"}`}>
                            {data.navigationLinks.map((nav) => (
                                <div className="dropdown">
                                    <li>
                                        <p className="nav-name">{nav.name} {nav.isDropdown && (<MdKeyboardArrowDown />)} </p>
                                    </li>
                                    {nav.isDropdown && (
                                        <div className="dropdown-content">
                                            {nav.dropdown.map((dropdown) => (
                                                <div onClick={() => { window.scrollTo(0, 0); navigate(dropdown.link) }}>{dropdown.name}</div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            <div className="dropdown login-hide">
                                <li className="nav-button" onClick={() => navigate("/donate")}>
                                    <div className="nav-name">
                                        Donate
                                    </div>
                                </li>
                            </div>
                        </div>

                        <div className="nav-buttons">
                            <div className="nav-buttons login-display">
                                <li className="nav-button" onClick={() => navigate("/donate")}>
                                    <div>
                                        Donate
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-lines" onClick={() => { setShowNavbar(prevState => !prevState) }}>
                    <FaBarsStaggered fill="white" size={30} />
                </div>
            </nav >
        </>
    );
};
