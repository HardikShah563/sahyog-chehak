// importing data
import data from "../data.json";
// importing icons
import { FaStar } from "react-icons/fa";

export default function SAM() {
    const sam = data.scholarship_mentorship;

    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {sam.title}
                </h1>

                <div className="about-us w-90 margin-block-50">
                    <h1 className="small-heading flex justify-ctr align-ctr txt-ctr">
                        <FaStar fill="#feb518" />
                        &nbsp;&nbsp;
                        Since 2003 Sangharsh has reached out to over 250 children with Disability
                        &nbsp;&nbsp;
                        <FaStar fill="#feb518" />
                    </h1>
                </div>

                <div className="margin-block-50">
                    <div className="w-90 margin-a-a whatwedo-div between-para">
                        {sam.imageURL.map((photo) => (
                            <div>
                                <div className="whatwedo-img">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL
                                            + ""
                                            + `/assets/${photo}`
                                        }
                                        alt={photo}
                                        className="img"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-90 margin-a-a margin-block-20">
                        <h1 className="heading txt-ctr margin-block-20">{sam.aboutUs.title}</h1>
                        <div className={`paragraph-div margin-block-10`}>
                            <div className="txt-justify">
                                {sam.aboutUs.paragraph.map((para) => (
                                    <div className="para-text margin-block-20">
                                        {para}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-ctr">
                    <img
                        src={process.env.PUBLIC_URL
                            + "/assets/"
                            + sam.footerURL
                        }
                        alt="footer image"
                        className="footer-img"
                    />
                </div>
            </div>
        </>
    );
};
