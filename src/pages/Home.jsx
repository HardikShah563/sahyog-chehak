// importing from react
import { Carousel } from "react-responsive-carousel";
// importing stylesheets
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// importing components
import AboutUs from "../components/AboutUs";
import Values from "../components/Values";
import VisionMission from "../components/VisionMission";
import AreasOfWork from "../components/AreasOfWork";
import JoinUs from "../components/JoinUs";
// importing icons
import { GoHeartFill } from "react-icons/go";
import { BiSolidDonateHeart } from "react-icons/bi";

export default function Home() {
    return (
        <>
            <div className="">
                <div className="main flex justify-space-btween">
                    {/* left section for the text */}
                    <div className="main-section margin-block-50">
                        <h1 className="big-heading">Sahyog Chehak</h1>
                        <h1 className="small-heading margin-block-10">
                            Women.Childen.Change.Communities
                        </h1>
                        <p className="para-text">A world where women and children can realise their potential and drive positive change in their communities.</p>

                        <div className="flex gap-10 margin-block-20 main-btn">
                            <div className="rounded-btn-light">
                                Donate Us <GoHeartFill />
                            </div>
                            <div className="rounded-btn-dark">
                                Volunteer <BiSolidDonateHeart />
                            </div>
                        </div>
                    </div>

                    {/* right section for the carousel */}
                    <Carousel
                        autoPlay
                        emulateTouch
                        infiniteLoop
                        interval={5000}
                        showArrows={false}
                        showStatus={false}
                        showIndicators={true}
                        showThumbs={false}
                        className="txt-ctr main-carousel"
                    >
                        <div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/logo-sahyog-small.png"
                                }
                                alt="main carousel"
                                className="img"
                            />
                        </div>
                        <div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/logo-sahyog-small.png"
                                }
                                alt="main carousel"
                                className="img"
                            />
                        </div>
                        <div>
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/logo-sahyog-small.png"
                                }
                                alt="main carousel"
                                className="img"
                            />
                        </div>
                    </Carousel>
                </div>

                <div className="margin-block-100">
                    <AboutUs />
                </div>

                <div className="margin-block-100">
                    <Values />
                </div>

                <div className="margin-block-100">
                    <VisionMission />
                </div>

                <div className="margin-block-100">
                    <AreasOfWork />
                </div>

                <div className="margin-block-100">
                    <JoinUs />
                </div>
            </div>
        </>
    );
};
