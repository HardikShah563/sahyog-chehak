// importing stylesheets
import "../style/home.css";
// importing icons
// solidarity
import { FaPeopleGroup } from "react-icons/fa6";
// integrity
import { GoLaw } from "react-icons/go";
// learning
import { FaBookOpenReader } from "react-icons/fa6";
// freedom
import { GiFreedomDove } from "react-icons/gi";
// importing data
import data from "../data/data.js";

export default function Values() {
    return (
        <>
            <div>
                <h1 className="heading txt-ctr margin-block-50">
                    {data.values_title}
                </h1>

                <div className="flex justify-ctr gap-20 flex-wrap">
                    {data.values.map((value) => (
                        <div className="value-card">
                            {value.icon}
                            <div className="value-card-title">{value.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
