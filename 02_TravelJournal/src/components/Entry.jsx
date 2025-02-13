const Entry = (data) => {
    return (
        <>
            <article className={"entry"}>
                <img src={data.img?.src} alt={data.img?.alt} className={"entry-destiny-image"}/>
                <div className={"entry-data-container"}>
                    <div className={"entry-data-container-location"}>
                        <img src={"marker.png"} alt={"Marker Icon"} className={"entry-marker"}/>
                        <p>{data.country}</p>
                        <a href={data.googleMapsLink}>
                            View on Google Maps
                        </a>
                    </div>
                    <p className={"entry-data-destiny"}>{data.title}</p>
                    <p className={"entry-data-date"}>{data.dates}</p>
                    <p className={"entry-data-description"}>{data.text}</p>
                </div>
            </article>
            <hr className={"entry-horizontal-bar"} />
        </>
    );
};

export default Entry;