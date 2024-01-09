export default function AreasOfWork() {
    return (
        <>
            <div>
                <h1 className="heading txt-ctr">
                    Our Areas of Work
                </h1>
                <div className="flex justify-ctr gap-20 margin-block-50 area-images">
                    <div className="areas-img-div">
                        <img
                            className="img"
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/areasofwork1.png"
                            }
                            alt="areas of work image 1"
                        />
                        
                        <h1 className="small-heading txt-ctr">
                            Empowering girls & women
                        </h1>
                    </div>
                    <div className="areas-img-div">
                        <img
                            className="img"
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/areasofwork1.png"
                            }
                            alt="areas of work image 1"
                        />

                        <h1 className="small-heading txt-ctr">
                            Disability Intervension
                        </h1>
                    </div>
                    <div className="areas-img-div">
                        <img
                            className="img"
                            src={
                                process.env.PUBLIC_URL +
                                "/assets/areasofwork1.png"
                            }
                            alt="areas of work image 1"
                        />

                        <h1 className="small-heading txt-ctr">
                            Enrichment Education
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};
