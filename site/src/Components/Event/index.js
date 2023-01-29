import './index.css';
import { useParams, Outlet, useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Event() {
    const { eventid } = useParams();
    const data  = useLoaderData();
    const navigate = useNavigate();
    
    console.log(data.apiData); //if data.apiData says "error" do something

    return(
        <div id="Event">
            <button onClick={() => navigate(-1)}> back </button>
            <h1> EVENT {eventid} </h1>
            <Outlet/>
        </div>
    );
}