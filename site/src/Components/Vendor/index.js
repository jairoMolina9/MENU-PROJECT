import { useParams } from 'react-router-dom';

export default function Event(props) {
    const { vendorid } = useParams();

    return(
        <div id="Vendor">
            <h1> Menu {vendorid} </h1>
        </div>
    );
}