import React, { useState, useEffect } from "react";

export default function EventMain(props) {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState({});
    const [eventAddress, setEventAddress] = useState({});
    const [eventVendors, setEventVendors] = useState([]);

    useEffect(() => {

        const fetchData = async() => {
            await fetch("http://localhost:3002/?eventid="+props.eventid)
            .then((response) => response.json())
            .then((data) => {
                let eventData = data.eventData[0];
                setEventName(eventData.Name);
                setEventDate(eventData.Date);
                setEventAddress(eventData.Address);
                setEventVendors(eventData.Vendors);
            });
        }
        
        fetchData();

    }, []);
    

    return(
        <div className="EventMain">
            <h1 id="title">{eventName}</h1>
            <div>
                <ul>               
                    {eventVendors.map((vendor) =>
                        <>
                        <li key={vendor.Name}>{vendor.Name}</li>
                            {/* <ul>
                                {vendor.Menu.map((menuItem) =>
                                <li key={menuItem.Name}>{menuItem.Name} "/" {menuItem.Price}</li>
                                )}
                            </ul> */}
                        </>
                    )}
                </ul>
            </div>
        </div>
    );

}