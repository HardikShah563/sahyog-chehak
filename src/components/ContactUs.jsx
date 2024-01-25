// importing from react
import { useState } from "react";
// importing stylesheet
import "../style/donate.css";
// importing icons
import getIconFromIconName from "../config/icons";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        nameError: "",
        email: "",
        emailError: "",
        message: "",
        messageError: "",
    });

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formData.nameError) {
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    nameError: "Name cannot be empty"
                }
            });
        }
    }
    return (
        <>
            <div className="w-40 margin-a-a">
                <form onSubmit={handleSubmit}>
                    <div className="input-div">
                        <div className="label">Name</div>
                        <input
                            className={`input ${formData.nameError && "error-border"}`}
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {formData.nameError && <div className="error">{formData.nameError}</div>}
                    </div>

                    <div className="input-div">
                        <div className="label">Phone Number</div>
                        <input
                            className={`input ${formData.emailError && "error-border"}`}
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {formData.emailError && <div className="error">{formData.emailError}</div>}
                    </div>

                    <div className="input-div">
                        <div className="label">Phone Number</div>
                        <textarea
                            className={`input textarea ${formData.messageError && "error-border"}`}
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        {formData.messageError && <div className="error">{formData.messageError}</div>}
                    </div>

                    <div className="input-div">
                        <button className="submit-btn flex gap-5 align-ctr">
                            Send Message {getIconFromIconName("IoIosArrowForward")}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
