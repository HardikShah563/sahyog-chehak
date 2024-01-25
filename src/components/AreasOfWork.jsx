// importing data
import data from "../data.json";

export default function AreasOfWork() {
    // the data for the areas of work section from the json file
    const areas = data.home.areasOfWork;

    return (
        <>
            <div>
                <h1 className="heading txt-ctr">
                    {areas.title}
                </h1>
                <div className="flex justify-ctr gap-20 margin-block-50 area-images">
                    {areas.areas.map((area) => (
                        <div className="areas-img-div">
                            <img
                                className="img"
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/" +
                                    area.imageURL
                                }
                                alt={area.subTitle}
                            />

                            <h1 className="small-heading txt-ctr">
                                {area.subTitle}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
