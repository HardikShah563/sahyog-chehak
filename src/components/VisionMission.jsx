// importing data
import data from "../data.json";

export default function VisionMission() {
    // the data for the vision and mission section from the json file
    const vision = data.home.vision;
    const mission = data.home.mission;

    return (
        <>
            <div className="photo-text-box flex">
                <div className="flex justify-ctr">
                    <div className="img-div">
                        {/* image of vision section */}
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/" +
                                vision.imageURL
                            }
                            alt="vision image/icon"
                            className="img"
                        />
                    </div>
                    <div className="text-div">
                        <h1 className="big-heading">
                            {/* title of vision section */}
                            {vision.title}
                        </h1>
                        <div className="para-text">
                            {/* paragraph of vision section */}
                            {vision.paragraph}
                        </div>
                    </div>
                </div>
            </div>

            <div className="photo-text-box flex">
                <div className="flex justify-ctr">
                    <div className="text-div">
                        <h1 className="big-heading">
                            {/* title of mission section */}
                            {mission.title}
                        </h1>
                        <div className="para-text">
                            {/* paragraph of mission section */}
                            {mission.paragraph}
                        </div>
                    </div>
                    <div className="img-div">
                        {/* image of mission section */}
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/" +
                                mission.imageURL
                            }
                            alt="vision image/icon"
                            className="img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
