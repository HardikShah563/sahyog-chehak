// importing data
import data from "../data.json";
// importing stylesheet
import "../style/partners.css";

export default function Partners() {
    const partners = data.partners;
    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {partners.title}
                </h1>
                <h1 className="small-heading- txt-ctr margin-block-20">
                    {partners.subTitle}
                </h1>
            </div>

            <div className="partners">
                {partners.partners.map((partner) => (
                    <div className="margin-block-50">
                        <h1 className="investor-title">
                            {partner.title}
                        </h1>

                        <div className="partner-logos">
                            {[...Array(partner.logoCount)].map((e, i) => (
                                <div className="margin-a-a">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL
                                            + "/assets/logos/"
                                            + partner.logoInitial
                                            + (i + 1)
                                            + partner.logoExtension
                                        }
                                        alt={partner.logoInitial + i}
                                        className="partner-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
