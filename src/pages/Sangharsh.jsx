// importing from react
import { useEffect } from "react";
// importing stylesheets
import "../style/whatwedo.css";
// importing icons
import { GiWingedSword } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
// importing data
import data from "../data.json";

export default function Sangharsh() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    const sangharsh = data.sangharsh;
    return (
        <>
            <div className="flex justify-ctr margin-block-20">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/logo-sangharsh.png"
                    }
                    alt="sangharsh logo"
                    className="logo-img"
                />
            </div>

            <div className="flex justify-ctr margin-block-50">
                <iframe
                    className="yt-iframe"
                    src="https://www.youtube.com/embed/jQr6hlf-OMk?si=J8b-aMjDkcBmdPcX"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                ></iframe>
            </div>

            {/* <div className="about-us w-90 margin-block-20">
                <h1 className="small-heading txt-ctr">
                    {sangharsh.quote.saidBy}
                </h1>
                <div className="para-text margin-a-a margin-block-20 txt-ctr">
                    {sangharsh.quote.statement}
                </div>
            </div> */}

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    Highlights
                </h1>
                <div className="flex">
                    <div>4:1 student teacher ratio</div>
                    <div>50+ Students mainstreamed into special schools and vocational training</div>
                    <div>Women driven community</div>
                    <div>Therapeutic environment</div>
                </div>
            </div>

            <div className="w-90 margin-a-a margin-block-50">
                {sangharsh.paragraph.map((para) => (
                    <div className="margin-block-20">
                        <h1 className="heading margin-block-10">{para.title}</h1>
                        <div className={`paragraph-div margin-block-10 ${para.imagePosition === "right" && "row-reverse"}`}>
                            <div>
                                <div className="para-text">{para.text}</div>
                            </div>
                            <div>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        para.imageURL
                                    }
                                    alt="para-img"
                                    className="para-img"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="margin-block-50">
                <hr className="dark-hr" />
                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="small-heading txt-ctr margin-block-20">Be a part of Sangharsh today</h1>
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
                    Since 2003 Sangharsh has reached out to over 250 children with Disability
                    &nbsp;&nbsp;
                    <FaStar fill="#feb518" />
                </h1>
            </div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    What we do?
                </h1>

                <div className="w-90 margin-a-a whatwedo-div">
                    {sangharsh.photographs.images.map((photo) => (
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




            <div className="about-us w-90 margin-block-50">
                <h1 className="small-heading txt-ctr margin-block-20">
                    "I have never taken my handicap as an excuse, in fact it has become my strength."
                </h1>
                <div className="para-text flex justify-ctr align-ctr margin-block-20 txt-ctr">
                    <FaStar fill="#feb518" />
                    &nbsp;&nbsp;
                    <h4 className="txt-ctr">
                        Deepa Malik (Silver Medallist at 2016 Paralympics Games)
                    </h4>
                    &nbsp;&nbsp;
                    <FaStar fill="#feb518" />
                </div>
            </div>

            <div className="margin-block-50"></div>
        </>
    );
};
