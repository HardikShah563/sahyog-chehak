// importing from react
import { useEffect } from "react";
// importing stylesheets
import "../style/whatwedo.css";
// importing icons
import { GiWingedSword } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";
// importing data
import data from "../data.json";

export default function Roshan() {
    useEffect(() => {
        // window.scrollTo(0, 0);
    }, []);
    const roshan = data.roshan;
    return (
        <>
            <div className="flex justify-ctr margin-block-20">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/" +
                        roshan.logo
                    }
                    alt="roshan logo"
                    className="logo-img"
                />
            </div>

            <div className="flex justify-ctr margin-block-50">
                <iframe
                    className="yt-iframe"
                    src="https://www.youtube.com/embed/4BV7ERBYsNc?si=e7kIRRr-BTfGRBgY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>

            <div className="margin-block-50">
                <h1 className="heading txt-ctr">
                    Highlights
                </h1>
                <div className="highlights">
                    {roshan.highlights.map((highlight) => (
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
                    <h1 className="heading txt-ctr margin-block-20">{roshan.paragraph1.title}</h1>
                    <div className={`paragraph-div margin-block-10`}>
                        <div>
                            <div className="para-text">{roshan.paragraph1.text}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="margin-block-50">
                <hr className="dark-hr" />
                <div className="w-90 margin-a-a margin-block-20">
                    <h1 className="small-heading txt-ctr margin-block-20">Be a part of Roshan today</h1>
                    <div className="flex justify-ctr">
                        <button className="dark-button">Join Us Today</button>
                    </div>
                </div>
                <hr className="dark-hr" />
            </div>
        </>
    );
};
