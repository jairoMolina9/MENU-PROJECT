import { useLoaderData } from 'react-router-dom';
import BasicCard from '../Card';

import { Grid } from '@mui/material';

export default function Homepage() {
    const data  = useLoaderData().apiData;
    console.log(data); //if data.apiData says "error" do something

    return(
        <div id="Homepage">
            <Grid container spacing = {4}>
            {data.map((eventData) =>
           
                <Grid key={eventData._id} item lg={6}>
                <BasicCard path="event" data={eventData}></BasicCard>
    
                </Grid>
            )}
            </Grid>

        </div>
    );
}