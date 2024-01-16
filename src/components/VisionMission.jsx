export default function VisionMission() {
    return (
        <>
            <div className="photo-text-box flex">
                <div className="flex justify-ctr">
                    <div className="img-div">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/vision.png"
                            }
                            alt="vision image/icon"
                            className="img"
                        />
                    </div>
                    <div className="text-div">
                        <h1 className="big-heading">Our Vision</h1>
                        <div className="para-text">
                            A world where women and children can realise their potential and drive positive change in their communities.
                        </div>
                    </div>
                </div>
            </div>

            <div className="photo-text-box flex">
                <div className="flex justify-ctr">
                    <div className="text-div">
                        <h1 className="big-heading">Our Mission</h1>
                        <div className="para-text">
                            We work for sustainable change in women and children from marginalised communities by providing them with enrichment education, special education, life skills and access to vocational opportunities.
                        </div>
                    </div>
                    <div className="img-div">
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/vision.png"
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
