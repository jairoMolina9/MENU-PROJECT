import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useNavigate } from "react-router-dom";


export default function BasicCard(props) {
    const navigate = useNavigate();
    const eventData = props.data;
    return(
        <button onClick= {() => navigate("/event/63cd9d1059027e2e5d706933")}>
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4" component="div">
            {eventData.Name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {eventData.Address.street}
          </Typography>
        </CardContent>
      </Card>
        </button>

    );
}