import { useLoaderData } from 'react-router-dom';
import BasicCard from '../Card';

export default function Homepage() {
    const data  = useLoaderData().apiData;
    console.log(data); //if data.apiData says "error" do something

    return(
        <div id="Homepage">
            {data.map((eventData) =>
            <div id = "event">
                {/* <h1>{item.Name}</h1> */}
                <BasicCard path="event" data={eventData}></BasicCard>
            </div>
            )}
        </div>
    );
}