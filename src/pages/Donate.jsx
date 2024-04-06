// importing stylesheets
import "../style/form.css";
import "../style/donate.css";
// importing icons
import { GoHeartFill } from "react-icons/go";
import { BiSolidDonateHeart } from "react-icons/bi";
// importing components
import Donation from "../components/Donation";

export default function Donate() {
    return (
        <>
            <div className="margin-block-50 padding-10">
                <h1 className="txt-ctr heading">Support our cause - Make a difference today!</h1>
                <p className="para-50 txt-ctr margin-block-20 donation-text">Thank you for considering a donation to Sahyog Chehak. Your Support is instrumental in furthering our mission to provide care, nourishment, and protection to our beloved children while promoting a harmonious way of life deeply rooted in our cultural heritage.</p>
            </div>

            <div className="flex justify-ctr gap-10">
                <div className="light-button">
                    Donate Us <GoHeartFill />
                </div>
                <div className="dark-button">
                    Volunteer <BiSolidDonateHeart />
                </div>
            </div>

            <Donation />
        </>
    );
};
