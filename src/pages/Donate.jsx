// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheets
import "../style/form.css";
import "../style/donate.css";
// importing icons
import { GoHeartFill } from "react-icons/go";
import { BiSolidDonateHeart } from "react-icons/bi";
// importing components
import Donation from "../components/Donation";

export default function Donate() {
    const navigate = useNavigate();

    return (
        <>
            <div className="margin-block-20 padding-10">
                <h1 className="txt-ctr big-heading">Support our cause <br/> Make a difference today!</h1>
            </div>

            <div className="flex justify-ctr">
                <button className="dark-button" onClick={() => {navigate("/join-us")}}>
                    Volunteer <BiSolidDonateHeart />
                </button>
            </div>

            <Donation />
        </>
    );
};
