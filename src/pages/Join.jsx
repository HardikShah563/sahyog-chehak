// importing data
import data from "../data.json";
// importing stylesheet
import "../style/getinvolved.css";
// importing icons
import getIconFromIconName from "../config/icons";
import { FaStar } from "react-icons/fa";

export default function Join() {
    const join = data.joinUs;

    return (
        <>
            <div className="margin-block-50">
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
                            <a
                                className={`${button.type}-button`}
                                href={button.link}
                                target="_blank"
                            >
                                {button.text} {getIconFromIconName(button.icon)}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="about-us w-90 margin-block-50">
                    <h1 className="small-heading flex justify-ctr align-ctr txt-ctr">
                        <FaStar fill="#feb518" />
                        &nbsp;&nbsp;
                        “Alone we can do so little, together we can do so much” - Helen Keller
                        &nbsp;&nbsp;
                        <FaStar fill="#feb518" />
                    </h1>
                </div>

                <div className="grid-2">
                    {join.volunteerRole.map((role) => (
                        <div className="getinvolved-div">
                            <h1 className="small-heading txt-ctr">
                                {role.title}
                            </h1>
                            <h3 className="font-normal margin-block-20">
                                {role.paragraph}
                            </h3>

                            <ul className="volunteer-list">
                                {role.list.map((li) => (
                                    (
                                        <li className="para-text margin-block-10"><b>{li} </b></li>
                                    )
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
