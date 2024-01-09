// importing stylesheets
import "../style/donate.css";
// importing icons
import { GoHeartFill } from "react-icons/go";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function JoinUs() {
    return (
        <>
            <div className="join-us">
                <div className="margin-block-20 padding-10">
                    <h1 className="txt-ctr heading">
                        Join Us In Our Cause
                    </h1>
                    <p className="para-50 txt-ctr margin-block-20 donation-text">
                        Become a driving force for positive change by joining our esteemed group. Your valuable contribution, whether through volunteering your time or partnering with us, holds immense significance. Together, we can effect meaningful change and make a positive impact on the world. Join our mission, and let us collaboratively create a lasting difference.
                    </p>
                </div>

                <div className="flex justify-ctr gap-10">
                    <div className="rounded-btn-light">
                        Volunteer <BiSolidDonateHeart />
                    </div>
                    <div className="rounded-btn-dark">
                        Partner With Us <FaHandshakeSimple />
                    </div>
                </div>
            </div>
        </>
    );
};
