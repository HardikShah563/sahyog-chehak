import * as faIcons from "react-icons/fa";
import * as fa6Icons from "react-icons/fa6";
import * as goIcons from "react-icons/go";
import * as biIcons from "react-icons/bi";
import * as giIcons from "react-icons/gi";
import * as ioIcons from "react-icons/io";

function getIconFromIconName(iconName, iconSize, iconClassName, iconFill) {
    if (iconName === "GoHeartFill") {
        return <goIcons.GoHeartFill size={iconSize} />;
    }
    else if (iconName === "BiSolidDonateHeart") {
        return <biIcons.BiSolidDonateHeart size={iconSize} />;
    }
    else if (iconName === "FaPeopleGroup") {
        return <fa6Icons.FaPeopleGroup size={iconSize} />;
    }
    else if (iconName === "GoLaw") {
        return <goIcons.GoLaw size={iconSize} />;
    }
    else if (iconName === "FaBookOpenReader") {
        return <fa6Icons.FaBookOpenReader size={iconSize} />;
    }
    else if (iconName === "GiFreedomDove") {
        return <giIcons.GiFreedomDove size={iconSize} />;
    }
    else if (iconName === "IoIosArrowForward") {
        return <ioIcons.IoIosArrowForward size={iconSize} />;
    }
    else if (iconName === "FaHandshakeSimple") {
        return <fa6Icons.FaHandshakeSimple />;
    }
    else if (iconName === "FaFacebook") {
        return <faIcons.FaFacebook size={iconSize} className={iconClassName} fill={iconFill} />;
    }
    else if (iconName === "FaInstagram") {
        return <faIcons.FaInstagram size={iconSize} className={iconClassName} fill={iconFill} />;
    }
    else if (iconName === "FaTwitter") {
        return <faIcons.FaTwitter size={iconSize} className={iconClassName} fill={iconFill} />;
    }
    else if (iconName === "FaLinkedin") {
        return <faIcons.FaLinkedin size={iconSize} className={iconClassName} fill={iconFill} />;
    }
}

export default getIconFromIconName;