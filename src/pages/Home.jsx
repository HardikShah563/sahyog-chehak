// importing from react
import { Carousel } from "react-responsive-carousel";
// importing stylesheets
import "../style/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// importing components
import AboutUs from "../components/AboutUs";
import Values from "../components/Values";
import VisionMission from "../components/VisionMission";
import AreasOfWork from "../components/AreasOfWork";
import JoinUs from "../components/JoinUs";
import ContactUs from "../components/ContactUs";
// importing icons
import getIconFromIconName from "../config/icons";
// importing data
import data from "../data.json";

export default function Home() {
    // the data for the home page from the json file
    const home = data.home;

    return (
        <>
            <div className="">
                <div className="main flex justify-space-btween">
                    {/* left section for the text */}
                    <div className="main-section margin-block-50">
                        <h1 className="big-heading">
                            {home.main.title}
                        </h1>
                        <h1 className="small-heading margin-block-10">
                            {home.main.subTitle}
                        </h1>
                        <p className="para-text">{home.main.paragraph}</p>

                        <div className="flex gap-10 margin-block-20 main-btn">
                            {home.main.buttons.map((button) => (
                                <div className={`rounded-btn-${button.type}`}>
                                    {button.text} {getIconFromIconName(button.icon)}
                                </div>
                            ))}
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
                        {home.main.carousel.map((carouselEl) => (
                            <div>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/" +
                                        carouselEl.imageURL
                                    }
                                    alt={carouselEl.subTitle}
                                />
                            </div>
                        ))}
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

                <div className="margin-block-100">
                    <ContactUs />
                </div>
            </div >
        </>
    );
};
