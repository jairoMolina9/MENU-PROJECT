import "./index.css";
import { useParams, Outlet, useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasicCard from "../Card";
import { Grid } from "@mui/material";

export default function Event() {
  const { eventid } = useParams();
  const data = useLoaderData();
  const vendors = data.apiData.Vendors;
  const navigate = useNavigate();

  return (
    <div id="Event">
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Grid container spacing={2}>
            {vendors.map((vendor) => (
              <Grid key={vendor._id} item lg={12}>
                <BasicCard path="vendor" data={vendor}></BasicCard>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item lg={6}>
        <Outlet />
        </Grid>
      </Grid>

      
    </div>
  );
}
