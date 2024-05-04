// importing from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// importing stylesheet
import "../style/navbar.css";
// importing icons
import getIconFromIconName from "../config/icons.js";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
// importing data
import data from "../data.json";

export default function Navbar() {
    // to control navigation between the pages
    const navigate = useNavigate();
    const [showNavBar, setShowNavbar] = useState(false);
    const navbar = data.navbar;

    return (
        <>
            <nav className="nav">
                <div className="nav-items">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/" +
                            navbar.logo
                        }
                        className="logo cur"
                        onClick={() => { setShowNavbar(false); navigate("/"); }}
                    ></img>

                    <div className="w-100 flex justify-space-btween" onClick={() => { setShowNavbar(false) }}>
                        <div className={`nav-links ${showNavBar && "active"}`}>
                            {navbar.navigationLinks.map((nav) => (
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
                                <li className="dark-button" onClick={() => navigate("/donate")}>
                                    <div>
                                        Donate
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-lines" onClick={() => { setShowNavbar(prevState => !prevState) }}>
                    <FaBarsStaggered fill="white" size={20} />
                </div>
            </nav >
        </>
    );
};
