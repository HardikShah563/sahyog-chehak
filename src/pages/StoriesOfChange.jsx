// importing from react
import { useState, useEffect } from "react";
// importing data
import data from "../data.json";
// importing stylesheets
import "../style/getinvolved.css";

export default function StoriesOfChange() {
    const stories = data.storiesOfChange;

    const [storyData, setStoryData] = useState(stories.stories);

    console.log(storyData);

    function changeView(storyToBeChanged) {
        const newArr = [];
        storyData.map((story, i) => {
            if (story.id === storyToBeChanged) {
                const newValue = { ...story, viewMore: !story.viewMore };
                newArr.push(newValue)
            }
            else {
                newArr.push(story);
            }
        });
        setStoryData(newArr);
    }

    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {stories.title}
                </h1>
                <h3 className="txt-ctr">
                    {stories.paragraph}
                </h3>

                <div className="w-90 margin-a-a grid-2">
                    {storyData.map((story) => (
                        <div className="getinvolved-div" key={story.id}>
                            <h1 className="small-heading">
                                {story.title}
                            </h1>

                            {story.viewMore
                                ? (
                                    <div className="para-text font-normal margin-block-20">
                                        {story.full.map((para) => (
                                            <div className="margin-block-20">{para}</div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="para-text font-normal margin-block-20">
                                        <div className="margin-block-20">{story.short}</div>
                                    </div>
                                )
                            }
                            
                            <h3
                                className="cur"
                                onClick={() => {
                                    !story.viewMore && window.scrollTo(0, 0);
                                    changeView(story.id);
                                }}
                            >
                                (Read {story.viewMore ? "Less" : "More"})
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
