import { useParams, useNavigate, useLoaderData } from 'react-router-dom';
import BasicCard from '../Card';

export default function Event(props) {
    const { vendorid } = useParams();
    const data  = useLoaderData();
    const menu = data.apiData;
    console.log(menu);
    const navigate = useNavigate();
    return(
        <div id="Vendor">
            {menu.map((item) =>
                <h1>{item.Name}</h1>
            )}
        </div>
    );
}