// importing data
import data from "../data.json";

export default function AboutUs() {
    const aboutUs = data.aboutUs;
    return (
        <>
            <div className="margin-block-50">
                {aboutUs.sections.map((section) => (
                    <div className="margin-block-100">
                        <h1 className="big-heading txt-ctr">
                            {section.title}
                        </h1>
                        <h1 className="small-heading txt-ctr">
                            {section.subTitle}
                        </h1>
                        <div className="margin-block-50">
                            {section.paragraph.map((para) => (
                                <div className="w-60 margin-a-a para-text txt-justify">
                                    {para.title && (
                                        <div className="margin-block-10 small-heading">
                                            <b>{para.title}</b>
                                        </div>
                                    )}
                                    <div className="font-normal">
                                        {para.text}
                                    </div>
                                    <br />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
