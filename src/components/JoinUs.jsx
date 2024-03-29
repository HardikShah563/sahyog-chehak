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
            <div className="join-us">
                <div className="margin-block-20 padding-10">
                    <h1 className="txt-ctr heading">
                        {join.title}
                    </h1>
                    <p className="txt-ctr margin-block-20 para-text">
                        {join.paragraph}
                    </p>
                </div>

                <div className="flex justify-ctr gap-10">
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
