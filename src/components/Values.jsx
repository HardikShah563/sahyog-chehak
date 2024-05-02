// importing data
import data from "../data.json";
// importing icons
import getIconFromIconName from "../config/icons.js";

export default function Values() {
    const values = data.home.values;
    return (
        <>
            <div className="w-90 margin-a-a">
                <h1 className="big-heading txt-ctr margin-block-50">
                    {values.title}
                </h1>

                <div className="values">
                    {values.values.map((value) => (
                        <div className="value-card">
                            {/* {getIconFromIconName(value.icon, value.size)} */}
                            <img
                                src={
                                    process.env.PUBLIC_URL
                                    + "/assets/"
                                    + value.imageURL
                                }
                                alt={value.title}
                                width={150}
                            />
                            <div className="value-card-title">
                                {value.title}
                            </div>
                            <div className="value-card-subtitle">
                                {value.subTitle}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
