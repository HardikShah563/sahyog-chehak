// importing from react
import { Link } from "react-router-dom";
// importing data
import data from "../data.json";

export default function HomePartners() {
    const partners = data.home.homePartners;

    return (
        <>
            <div className="w-90 margin-a-a margin-block-50">
                <h1 className="small-heading txt-ctr gray-text margin-block-50">
                    {partners.title}
                </h1>

                <div className="flex justify-evenly flex-wrap">
                    {partners.logos.map((logo) => (
                        <div className="padding-10">
                            <img
                                src={
                                    process.env.PUBLIC_URL
                                    + "/assets/logos/"
                                    + logo
                                }
                                alt={logo}
                                className="home-partners"
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-ctr margin-block-50">
                    <Link onClick={() => { window.scrollTo(0, 0); }} className="light-button" to="/partners&supporters">View All Our Supporters</Link>
                </div>
            </div>
        </>
    );
};
