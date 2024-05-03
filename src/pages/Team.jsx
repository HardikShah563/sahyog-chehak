// importing data
import data from "../data.json";
// importing stylesheet
import "../style/partners.css";

export default function Team() {
    const team = data.team;

    return (
        <>
            <div className="margin-block-50">
                {team.title && (
                    <h1 className="big-heading txt-ctr">
                        {team.title}
                    </h1>
                )}

                {team.teamArray.map((t) => (
                    <div className="margin-a-a margin-block-50">
                        <h1 className="big-heading txt-ctr margin-block-20">
                            {t.name}
                        </h1>

                        <div className="team-members">
                            {t.array.map((teamMember, i) => (
                                <div key={teamMember.imageURL} className="team-member">
                                    <div>
                                        <img
                                            src={
                                                process.env.PUBLIC_URL
                                                + "/assets/team/"
                                                + teamMember.imageURL
                                            }
                                            alt={teamMember.imageURL}
                                            height={200}
                                            width={200}
                                        />
                                    </div>
                                    <div>
                                        <div className="margin-block-20">
                                            <h1 className="small-heading">{teamMember.title}</h1>
                                            <p className="para-text">{teamMember.subTitle}</p>

                                            {teamMember.email && (
                                                <a href={`mailto:${teamMember.email}`}>({teamMember.email})</a>
                                            )}
                                        </div>
                                        <p className="team-detail">{teamMember.paragraph}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
