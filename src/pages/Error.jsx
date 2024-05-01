// importing styles
import "../style/index.css";

export default function Error() {
    return (
        <>
            <div className="flex flex-col align-ctr justify-ctr margin-block-100">
                <img
                    src={
                        process.env.PUBLIC_URL +
                        "/assets/404.png"
                    }
                    className="error-logo"
                    width={200}
                ></img>
                <h1 className="txt-ctr">Page Not Found</h1>
                <h3 className="txt-ctr margin-block-20 w-40">This page might be under developement or you arrived at an incorrect URL</h3>
            </div>
        </>
    );
};
