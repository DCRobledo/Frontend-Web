﻿const Entry = () => {
    return (
        <>
            <div className={"entry"}>
                <img src={"japan.png"} alt={"Destiny Image"} className={"entry-destiny-image"}/>
                <div className={"entry-data-container"}>
                    <div className={"entry-data-container-location"}>
                        <img src={"marker.png"} alt={"Marker Icon"} className={"entry-marker"}/>
                        <p>JAPAN</p>
                        <a href={"https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"}>
                            View on Google Maps
                        </a>
                    </div>
                    <p className={"entry-data-destiny"}>Mount Fuji</p>
                    <p className={"entry-data-date"}>12 Jan, 2021 - 24 Jan, 2021</p>
                    <p className={"entry-data-description"}>Mount Fuji is the tallest mountain in Japan, standing at
                        3,776
                        meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both
                        Japanese
                        and foreign tourists.</p>
                </div>
            </div>
            <hr className={"entry-horizontal-bar"} />
        </>
    );
};

export default Entry;