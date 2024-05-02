// importing data
import data from "../data.json";

export default function Team() {
    const team = data.team;

    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {team.title}
                </h1>
            </div>
        </>
    );
};
