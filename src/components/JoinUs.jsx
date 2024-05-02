// importing data
import data from "../data.json";
// importing icons
import getIconFromIconName from "../config/icons";
// importing stylesheets
import "../style/donate.css";
// importing icons
import { GoHeartFill } from "react-icons/go";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshakeSimple } from "react-icons/fa6";

export default function JoinUs() {
    // the data for the join us section from the json file
    const join = data.home.joinUs;

    return (
        <>
            <div className="join-us w-90 margin-a-a">
                <div className="">
                    <h1 className="big-heading txt-ctr">
                        {join.title}
                    </h1>
                    <p className="para-text margin-a-a margin-block-20 txt-ctr">
                        {join.paragraph}
                    </p>
                </div>

                <div className="margin-block-50 flex justify-ctr gap-10">
                    {join.buttons.map((button) => (
                        <div className={`${button.type}-button`}>
                            {button.text} {getIconFromIconName(button.icon)}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
