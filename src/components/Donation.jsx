// importing stylesheets
import "../style/donate.css";
// importing icons
import { IoIosArrowForward } from "react-icons/io";
// importing data
import data from "../data.json";

export default function Donation() {
    const donation = data.donation;
    return (
        <>
            <div className="donation-box w-90 margin-block-50 flex">
                <div className="donation-box-inner">
                    <div>
                        <h1 className="txt-ctr heading">{donation.left.title}</h1>
                        <p className="para-text txt-ctr margin-block-20">{donation.left.paragraph}</p>
                    </div>

                    <div className="donation-options margin-block-50">
                        {donation.left.donationOptions.map((option, index) => (
                            <div className="donation-card" key={index}>
                                <div className="flex justify-space-btween align-ctr">
                                    <h1 className="small-heading">{option.title}</h1>
                                    <IoIosArrowForward className="donation-arrow cur" size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="donation-box-inner h-full">
                    <h1 className="txt-ctr heading">{donation.right.title}</h1>

                    <br />
                    <br />

                    <div className="donation-form margin-block-20 h-full">
                        <h1 className="small-heading txt-ctr">
                            {donation.right.bankDetails.heading}
                        </h1>

                        <hr className="bg-hr margin-block-20" />

                        <div className="flex flex-col justify-ctr gap-10 txt-left h-full w-80 margin-a-a">
                            <h1 className="normal-para-text text-left">
                                Bank Name: 
                                <br />
                                <b>
                                    {donation.right.bankDetails.details.bankName}
                                </b>,
                            </h1>

                            <h1 className="normal-para-text text-left">
                                Branch Name: 
                                <br />
                                <b>
                                    {donation.right.bankDetails.details.bankBranch}
                                </b>
                            </h1>
                            <h1 className="normal-para-text text-left">
                                A/C Number:
                                <br />
                                <b>
                                    {donation.right.bankDetails.details.accountNumber}
                                </b>
                            </h1>
                            <h1 className="normal-para-text text-left">
                                IFSC Code:
                                <br />
                                <b>
                                    {donation.right.bankDetails.details.ifsc}
                                </b>
                            </h1>
                            <h1 className="normal-para-text text-left">
                                {donation.right.bankDetails.closingStatement}
                            </h1>
                        </div>

                        <hr className="bg-hr margin-block-20" />

                        <div className="para-text txt-ctr">
                            ! Thank you for your donations !
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
