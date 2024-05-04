// impoting data
import data from "../data.json";
// importing icons
import { FaStar } from "react-icons/fa";

export default function Umang() {
    const umang = data.umang;

    return (
        <>
            {umang.logo ? (
                <div className="flex justify-ctr margin-block-20">
                    <img
                        src={
                            process.env.PUBLIC_URL
                            + "/assets/"
                            + umang.logo
                        }
                        alt="umang logo"
                        className="logo-img"
                    />
                </div>
            ) : (
                <div className="margin-block-50">
                    <h1 className="big-heading txt-ctr">
                        {umang.title}
                    </h1>
                </div>
            )}

            <div className="flex justify-ctr margin-block-50">
                <iframe
                    className="yt-iframe"
                    src="https://www.youtube.com/embed/UM1kHnQBgXs?si=ug2r-TCpQxgUxn3L"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    Highlights
                </h1>
                <div className="highlights">
                    {umang.highlights.map((highlight) => (
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
                    <h1 className="heading txt-ctr margin-block-20">{umang.paragraph1.title}</h1>
                    <div className={`paragraph-div margin-block-10`}>
                        <div>
                            <div className="para-text">{umang.paragraph1.text}</div>
                        </div>
                    </div>
                </div>

                <div className="w-90 margin-a-a whatwedo-div between-para">
                    {umang.betweenParaImages.map((photo) => (
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
                        </div>
                    ))}
                </div>

                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="heading txt-ctr margin-block-20">{umang.paragraph2.title}</h1>
                    <div className={`paragraph-div margin-block-10`}>
                        <div>
                            <div className="para-text">{umang.paragraph2.text}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="margin-block-50">
                <hr className="dark-hr" />
                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="small-heading txt-ctr margin-block-20">Be a part of Umang today</h1>
                    <div className="flex justify-ctr">
                        <button className="dark-button">Join Us Today</button>
                    </div>
                </div>
                <hr className="dark-hr" />
            </div>

            <div className="about-us w-90 margin-block-50">
                <h1 className="small-heading flex justify-ctr align-ctr txt-ctr">
                    <FaStar fill="#feb518" />
                    &nbsp;&nbsp;
                    664 girls have undergone the Jhula Life Skills Programme
                    &nbsp;&nbsp;
                    <FaStar fill="#feb518" />
                </h1>
            </div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    What we do?
                </h1>

                <div className="w-90 margin-a-a whatwedo-div">
                    {umang.photographs.images.map((photo) => (
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
                                    --&nbsp;
                                    {photo.label}
                                    &nbsp;--
                                </h3>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            <div className="margin-block-50">.</div>

            <div className="flex justify-ctr">
                <img
                    src={process.env.PUBLIC_URL
                        + "/assets/"
                        + umang.footerURL
                    }
                    alt="footer image"
                    className="footer-img"
                />
            </div>
        </>
    );
};
