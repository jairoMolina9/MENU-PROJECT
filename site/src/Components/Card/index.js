import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useNavigate, Link } from "react-router-dom";

export default function BasicCard(props) {
  const navigate = useNavigate();
  const eventData = props.data;

  return (
    //   <Card sx={{ minWidth: 275}}>
    //     <Link style={{color: "black", textDecoration: 'none'}} to={props.path+"/"+eventData._id}>
    //       <CardContent>
    //     <Typography variant="h4" component="div">
    //       {eventData.Name}
    //     </Typography>
    //   </CardContent>
    //   </Link>
    // </Card>

            <>
        <div className='flex flex-wrap'>
            <div class="min-w-full m-2 py-8 px-8 max-w-sm  bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="object-cover rounded-full h-[100px] w-[100px] block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://logos-download.com/wp-content/uploads/2016/03/McDonalds_France_Logo_2003.png" />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                        <p class="text-lg text-black font-semibold">
                        {eventData.Name}
                        </p>
   
                    </div>
                    <Link to={props.path+"/"+eventData._id}>
                    < button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" >
                            Open
                        </button >
                    </Link>

                </div>
            </div>

            
            </div>
</>
  );
}
