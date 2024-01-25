// importing data
import data from "../data.json";
// importing icons
import getIconFromIconName from "../config/icons";
// importing components
import ImpactCard from "../components/ImpactCard";

export default function Impact() {
    // the data for the impact page from the json file
    const impact = data.impact;

    return (
        <>
            <div className="">
                <div className="margin-block-50">
                    <h1 className="big-heading txt-ctr">
                        {impact.title}
                    </h1>
                    <h1 className="para-text w-80 margin-a-a txt-ctr margin-block-10">
                        {impact.paragraph}
                    </h1>
                </div>

                <div className="w-80 margin-a-a grid-2 gap-10">
                    {impact.stories.map((story) => (
                        <div className="margin-block-50">
                            <ImpactCard
                                title={story.title}
                                short={story.short}
                                full={story.full}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
