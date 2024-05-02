// importing data
import data from "../data.json";
// importing stylesheets
import "../style/whatwedo.css";

export default function Photos() {
    const photos = data.photoGallery;
    return (
        <>
            <div className="margin-block-50">
                <h1 className="big-heading txt-ctr">
                    {photos.title}
                </h1>

                <div className="w-90 margin-a-a margin-block-50 whatwedo-div">
                    {photos.photos.map((photo) => (
                        <div>
                            <div className="whatwedo-img">
                                <img
                                    src={
                                        process.env.PUBLIC_URL
                                        + "/assets/"
                                        + photo.imageURL
                                    }
                                    alt={photo.imageTitle}
                                    className="img"
                                />
                            </div>
                            {photo.imageURL && photo.imageTitle && (
                                <h3 className="whatwedo-label txt-ctr">
                                    --&nbsp;
                                    {photo.label}
                                    &nbsp;--
                                </h3>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
