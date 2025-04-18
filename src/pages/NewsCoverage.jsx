// importing data
import data from "../data.json";

export default function NewsCoverage() {
    const news = data.news;
    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {news.title}
                </h1>
                <h1 className="small-heading- txt-ctr margin-block-20">
                    {news.subTitle}
                </h1>
            </div>

            <a
                target="_blank"
                href="https://globalfundforchildren.org/story/unstoppable-tauseens-story-of-resilience/"
                className="w-90 flex margin-a-a margin-block-20 para-text"
            >
                Read Full Article
            </a>

            <div className="flex margin-block-50">
                <iframe
                    width="1000"
                    height="1000"
                    src="https://globalfundforchildren.org/story/unstoppable-tauseens-story-of-resilience/"
                    frameborder="0"
                    allowfullscreen
                    className="w-90 h-80 margin-a-a"
                ></iframe>
            </div>
        </>
    );
};
