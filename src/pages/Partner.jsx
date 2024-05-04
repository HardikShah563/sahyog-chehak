// importing data
import data from "../data.json";
// importing icons
import getIconFromIconName from "../config/icons";

export default function Partner() {
    const partner = data.partnerWithUs;

    return (
        <>
            <div className="w-90 margin-a-a margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {partner.title}
                </h1>

                <h3 className="w-90 margin-a-a margin-block-50 txt-ctr font-normal">
                    {partner.paragraph}
                </h3>

                <div className="margin-block-50">
                    <h3 className="margin-block-20 txt-ctr">
                        {partner.getInTouch}
                    </h3>
                    <div className="margin-block-20 flex flex-wrap justify-ctr align-ctr gap-20">
                        <h3 className="flex justify-ctr align-ctr gap-10">
                            {getIconFromIconName("IoMdMail", 25)}: <a href={`mailto:${partner.contactDetails.email}`}>{partner.contactDetails.email}</a>
                        </h3>
                        <h3 className="flex justify-ctr align-ctr gap-10">
                            {getIconFromIconName("IoIosCall", 25)}: <a href={`tel:${partner.contactDetails.phone}`}>{partner.contactDetails.phone}</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};
