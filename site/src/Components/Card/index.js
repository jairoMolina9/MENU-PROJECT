import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useNavigate, Link } from "react-router-dom";


export default function BasicCard(props) {
    const navigate = useNavigate();
    const eventData = props.data;
    
    return(
        <Card sx={{ minWidth: 275 }}>
          <Link to={props.path+"/"+eventData._id}>
            <CardContent>
          <Typography variant="h4" component="div">
            {eventData.Name}
          </Typography>
        </CardContent>
        </Link>
      </Card>

    );
}