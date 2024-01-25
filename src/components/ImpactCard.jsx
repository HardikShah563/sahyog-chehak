// importing from react
import { useState } from "react";

export default function ImpactCard(props) {
    const [showFull, setShowFull] = useState(false);
    return (
        <>
            <div className="impact-card margin-a-a">
                <h1 className="small-heading">
                    {props.title}
                </h1>

                <p className="para-text margin-block-10">
                    {
                        showFull
                            ? props.full
                            : props.short
                    }
                    ...
                </p>

                <span className="para-text show-more" onClick={() => { setShowFull(prevState => !prevState) }}>
                    {
                        showFull
                            ? "Show less"
                            : "Show more"
                    }
                </span>
            </div>
        </>
    );
};
