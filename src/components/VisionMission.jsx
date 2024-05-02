// importing data
import data from "../data.json";
// importing style
import "../style/visionmission.css";

export default function VisionMission() {
    // the data for the vision and mission section from the json file
    const vision = data.home.vision;
    const mission = data.home.mission;

    return (
        <>
            <div className="margin-a-a visionmission">
                <div className="vision-box">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/assets/" +
                            vision.imageURL
                        }
                        alt="vision image/icon"
                        className="img"
                    />

                    <div className="text-div">
                        <h1 className="big-heading margin-block-10">
                            {mission.title}
                        </h1>
                        <div className="para-text margin-block-10">
                            {mission.paragraph}
                        </div>
                    </div>
                </div>

                <div className="mission-box">
                    <div className="text-div">
                        <h1 className="big-heading margin-block-10">
                            {vision.title}
                        </h1>
                        <div className="para-text margin-block-10">
                            {vision.paragraph}
                        </div>
                    </div>

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
        </>
    );
};
