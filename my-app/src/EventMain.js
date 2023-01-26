import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function EventMain() {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState({});
    const [eventAddress, setEventAddress] = useState({});
    const [eventVendors, setEventVendors] = useState([]);

    const [searchParams] = useSearchParams();
    const eventid = searchParams.get('eventid');
    
    useEffect(() => {

        const fetchData = async() => {
            await fetch("http://localhost:3002/?eventid="+eventid)
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
            <h1>{eventName}</h1>
            <div>
                {eventVendors.map((vendor) =>
                    <li key={vendor.Name}>{vendor.Name}</li>
                )}
            </div>
        </div>
    );

}