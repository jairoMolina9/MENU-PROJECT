import './index.css';
import { useParams, Outlet, useLoaderData } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import BasicCard from '../Card';

export default function Event() {
    const { eventid } = useParams();
    const data  = useLoaderData();
    const vendors = data.apiData.Vendors;
    const navigate = useNavigate();

    return(
        <div id="Event">
            <button onClick={() => navigate("/")}> Home </button>
            {vendors.map((vendor) =>
                <BasicCard path="vendor" data={vendor}></BasicCard>
            )}
            <Outlet/>
        </div>
    );
}

