// importing from react
import { useNavigate } from "react-router-dom";
// impoting data
import data from "../data.json";
// importing icons
import { FaStar } from "react-icons/fa";

export default function Umang() {
    const umang = data.umang;
    const navigate = useNavigate();

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
                            <div className="para-text">{umang.paragraph1.text.map((text) => (
                                <div>
                                    {text}
                                    <br />
                                    <br />
                                </div>
                            ))}</div>
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
                            <div className="para-text">{umang.paragraph2.text.map((text) => (
                                <div>
                                    {text}
                                    <br />
                                    <br />
                                </div>
                            ))}</div>
                        </div>
                    </div>
                </div>
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

            <div className="w-90 margin-a-a margin-block-50">
                <h1 className="heading txt-ctr margin-block-50">
                    {umang.aim.title}
                </h1>

                <div className="whatwedo-aims">
                    {umang.aim.cards.map((card) => (
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

            <div className="w-90 margin-a-a margin-block-20">
                <h1 className="heading txt-ctr margin-block-20">
                    {umang.scholarship_mentorship.title}
                </h1>

                <div className="about-us w-90 margin-block-50">
                    <h1 className="small-heading flex justify-ctr align-ctr txt-ctr">
                        <FaStar fill="#feb518" />
                        &nbsp;&nbsp;
                        {umang.scholarship_mentorship.highlight}
                        &nbsp;&nbsp;
                        <FaStar fill="#feb518" />
                    </h1>
                </div>

                <div>
                    {umang.scholarship_mentorship.data.map((para) => (
                        <div className="margin-block-10">
                            {para.title && (
                                <div className="margin-block-10 small-heading">
                                    <b>{para.title}</b>
                                </div>
                            )}
                            <div className="para-text font-normal">
                                {para.text}
                            </div>
                            <br />
                        </div>
                    ))}
                </div>

                <p className="para-text">{umang.scholarship_mentorship.list.heading}</p>
                <ul className="list">
                    {umang.scholarship_mentorship.list.listItems.map((li) => (
                        <li className="list list-item font-normal">
                            {li}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-90 margin-a-a margin-block-20">
                <h1 className="heading txt-ctr margin-block-20">
                    {umang.whatwedo.title}
                </h1>

                <div className="margin-block-50">
                    {umang.whatwedo.data.map((para) => (
                        <div className="margin-block-10">
                            {para.title && (
                                <div className="margin-block-10 small-heading">
                                    <b>{para.title}</b>
                                </div>
                            )}
                            <div className="para-text font-normal">
                                {para.text}
                            </div>
                            {para.data && <ul className="list">
                                <br />
                                {para.data && para.data.map((paragraph) => (
                                    <li className="list list-item para-text font-normal">
                                        {paragraph}
                                    </li>
                                ))}
                            </ul>}
                            <br />
                        </div>
                    ))}
                </div>
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
