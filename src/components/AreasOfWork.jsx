// importing from react
import { Link } from "react-router-dom";
// importing css
import "../style/areas.css";
// importing data
import data from "../data.json";
// importing icons
import { RxCaretRight } from "react-icons/rx";

export default function AreasOfWork() {
    // the data for the areas of work section from the json file
    const areas = data.home.areasOfWork;

    return (
        <>
            <div className="w-90 margin-a-a">
                <h1 className="big-heading txt-ctr margin-block-50">
                    {areas.title}
                </h1>

                <div className="area-images">
                    {areas.areas.map((area) => (
                        <div className="areas-img-div">
                            <div className="img-div">
                                <img
                                    className="img"
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/" +
                                        area.imageURL
                                    }
                                    alt={area.subTitle}
                                />
                            </div>

                            <div className="area-img-subtitle">
                                {area.subTitle}
                            </div>

                            <Link
                                to={area.link}
                                className="light-button margin-a-a areas-button"
                            >
                                {area.title} <RxCaretRight size={20} stroke-width="1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
