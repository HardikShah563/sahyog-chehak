// importing data
import data from "../data.json";

export default function Finances() {
    const finances = data.finances;
    return (
        <>
            <div className="w-90 margin-a-a margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {finances.title}
                </h1>

                <h1 className="margin-block-50 small-heading txt-ctr">
                    {finances.subTitle}
                </h1>

                <div className="margin-block-50">
                    <h1 className="small-heading txt-ctr margin-block-50">
                        Sahyog Chehak Trust Financial Report for 2018-2023
                    </h1>
                    
                    <iframe
                        src="https://sahyogchehak.org.in/wp-content/uploads/2024/02/Financial-Report-2019-2023-page-for-website.pdf"
                        width="100%"
                        height="600"
                    ></iframe>
                </div>
            </div>
        </>
    );
};
