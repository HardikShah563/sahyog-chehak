// importing css
import "../style/about.css";
// importing data
import data from "../data.json";

export default function AboutUs() {
    // the data for the about section from the json file
    const about = data.home.about;

    return (
        <>
            <div className="about-us w-90">
                <h1 className="heading txt-ctr">
                    {about.title}
                </h1>
                <div className="para-text margin-a-a margin-block-20 txt-ctr">
                    {about.paragraph}
                </div>
            </div>
        </>
    );
};
