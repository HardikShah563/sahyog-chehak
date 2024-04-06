// importing from react
import { useState } from "react";
// importing stylesheets
import "../style/donate.css";
// importing icons
import { MdError } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
// importing data
import data from "../data.json";

export default function Donation() {
    // the data for the donation section from the json file
    const donation = data.donation;

    const [formData, setFormData] = useState({
        name: "",
        nameError: "",
        phone: "",
        phoneError: "",
        email: "",
        emailError: "",
        amount: 0,
        amountError: "",
        paymentType: "",
        paymentTypeError: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value,
            }
        });
    }

    function contactCheck() {
        if (!formData.nameError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: "Name cannot be empty"
                }
            });
        }
        if (!formData.phoneError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    phoneError: "Phone Number cannot be empty"
                }
            });
        }
        if (formData.phoneError.length != 10) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    phoneError: "Length should be 10 digits long"
                }
            });
        }
        if (!formData.emailError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    emailError: "Email cannot be empty"
                }
            });
        }
    }

    function amountCheck() { }

    function paymentCheck() { }

    const [step, setStep] = useState(1);

    function stepShow() {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="input-div">
                            <div className="label">Name</div>
                            <input
                                className={`input ${formData.nameError && "error-border"}`}
                                type="text"
                                name="name"
                                id="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {formData.nameError && <div className="error">{formData.nameError}</div>}
                        </div>

                        <div className="input-div">
                            <div className="label">Phone Number</div>
                            <input
                                className={`input ${formData.phoneError && "error-border"}`}
                                type="number" s
                                name="phone"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            {formData.phoneError && <div className="error">{formData.phoneError}</div>}
                        </div>

                        <div className="input-div">
                            <div className="label">E-mail</div>
                            <input
                                className={`input ${formData.emailError && "error-border"}`}
                                type="email"
                                name="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {formData.emailError && <div className="error">{formData.emailError}</div>}
                        </div>

                        <div className="input-div">
                            <div className="submit-btn flex gap-5 align-ctr">
                                Proceed Further <IoIosArrowForward />
                            </div>
                        </div>
                    </>
                );
        }
    }

    console.log(formData);

    return (
        <>
            <div className="donation-box w-90 margin-block-50 flex">
                <div className="donation-box-inner">
                    <div>
                        <h1 className="txt-ctr heading">Popular Donation Options</h1>
                        <p className="txt-ctr margin-block-20">Thank you for considering a donation to Sahyog Chehak. Your Support is instrumental in furthering our mission to provide care, nourishment, and protection to our beloved children while promoting a harmonious way of life deeply rooted in our cultural heritage.</p>
                    </div>

                    <div className="flex gap-10 flex-wrap justify-ctr">
                        {donation.left.donationOptions.map((option, index) => (
                            <div className="donation-card" key={index}>
                                <div className="flex justify-space-btween align-ctr">
                                    <h1 className="heading">{option.amount}</h1>
                                    <IoIosArrowForward className="donation-arrow" size={20} />
                                </div>
                                <p className="donation-text">Proceed with this plan</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="donation-box-inner">
                    <h1 className="txt-ctr heading">{donation.right.title}</h1>

                    <div className="donation-form margin-block-20">
                        <div className="stages flex">
                            <div className="flex align-ctr gap-10 cur">
                                <div className="donation-arrow txt-ctr">
                                    <b>1</b>
                                </div>
                                <b>Contact</b>
                            </div>

                            <IoIosArrowForward size={20} />

                            <div className="flex align-ctr gap-10 cur">
                                <div className="donation-arrow txt-ctr">
                                    <b>2</b>
                                </div>
                                <b>Amount</b>
                            </div>

                            <IoIosArrowForward size={20} />

                            <div className="flex align-ctr gap-10 cur">
                                <div className="donation-arrow txt-ctr">
                                    <b>3</b>
                                </div>
                                <b>Payment</b>
                            </div>
                        </div>

                        <hr className="bg-hr margin-block-20" />

                        <form>
                            {stepShow(step)}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
