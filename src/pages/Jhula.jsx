// importing from react
import { useNavigate } from "react-router-dom";
// importing stylesheets
import "../style/whatwedo.css";
// importing icons
import { FaStar } from "react-icons/fa6";
// importing data
import data from "../data.json";

export default function Jhula() {
    const jhula = data.jhula;

    const navigate = useNavigate();

    return (
        <>
            {jhula.logo ? (
                <div className="flex justify-ctr margin-block-20">
                    <img
                        src={
                            process.env.PUBLIC_URL
                            + "/assets/"
                            + jhula.logo
                        }
                        alt="umang logo"
                        className="logo-img"
                    />
                </div>
            ) : (
                <div className="margin-block-50">
                    <h1 className="big-heading txt-ctr">
                        {/* {jhula.title} */}
                    </h1>
                </div>
            )}

            <div className="h-aim-card flex justify-ctr">
                <img
                    src={
                        process.env.PUBLIC_URL
                        + "/assets/"
                        + jhula.image
                    }
                    alt={`${jhula.image}`}
                    width={500}
                    height={400}
                    className="margin-a-a h-full w-40"
                />
            </div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    Highlights
                </h1>
                <div className="highlights">
                    {jhula.highlights.map((highlight) => (
                        <>
                            <b className="w-100 txt-ctr highlight">
                                <h1>{highlight.h1}</h1>
                                {highlight.text}
                            </b>
                        </>
                    ))}
                </div>
            </div>

            <div className="margin-block-50">
                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="heading txt-ctr margin-block-20">{jhula.paragraph1.title}</h1>
                    <div className={`paragraph-div margin-block-10`}>
                        <div>
                            <div className="para-text">{jhula.paragraph1.text1}</div>
                            <br />
                            <div className="para-text">{jhula.paragraph1.text2}</div>
                            <br />
                            <div className="para-text">{jhula.paragraph1.text3 && jhula.paragraph1.text3}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-us w-90 margin-block-50">
                <h1 className="small-heading flex justify-ctr align-ctr txt-ctr">
                    <FaStar fill="#feb518" />
                    &nbsp;&nbsp;
                    {jhula.highlight}
                    &nbsp;&nbsp;
                    <FaStar fill="#feb518" />
                </h1>
            </div>

            <div className="w-90 margin-a-a margin-block-50">
                <h1 className="heading txt-ctr margin-block-50">
                    {jhula.aim.title}
                </h1>

                <div className="whatwedo-aims">
                    {jhula.aim.cards.map((card) => (
                        <div className="whatwedo-aim-card txt-ctr">
                            <div className="h-aim-card">
                                <img
                                    src={
                                        process.env.PUBLIC_URL
                                        + "/assets/"
                                        + card.imageURL
                                    }
                                    alt={card.imageURL}
                                    height={200}
                                    className="margin-a-a"
                                />
                            </div>
                            <h2 className="">
                                {card.title}
                            </h2>
                            <h4 className="w-80 margin-a-a margin-block-10">
                                {card.subTitle}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="margin-block-50">
                <hr className="dark-hr" />
                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="small-heading txt-ctr margin-block-20">Be a part of Sahyog Jhula today</h1>
                    <div className="flex justify-ctr">
                        <button
                            className="dark-button"
                            onClick={() => { window.scrollTo(0, 0); navigate("/join-us") }}
                        >Join Us Today</button>
                    </div>
                </div>
                <hr className="dark-hr" />
            </div>

            <div className="margin-block-50">.</div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    {jhula.photographs.title}
                </h1>

                <div className="w-90 margin-a-a whatwedo-div">
                    {jhula.photographs.images.map((photo) => (
                        <>
                            <div>
                                <div className="whatwedo-img">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            `/assets/${photo.url}`
                                        }
                                        alt={photo.url}
                                        className="img"
                                    />
                                </div>
                                <h3 className="whatwedo-label txt-ctr">
                                    {photo.label && "--"}&nbsp;
                                    {photo.label}
                                    &nbsp;{photo.label && "--"}
                                </h3>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="flex justify-ctr">
                <img
                    src={process.env.PUBLIC_URL
                        + "/assets/"
                        + jhula.footerURL
                    }
                    alt="footer image"
                    className="footer-img"
                />
            </div>
        </>
    );
};
