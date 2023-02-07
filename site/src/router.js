import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "./Components/Homepage";
import Event from "./Components/Event";
import Vendor from "./Components/Vendor";
import ErrorComp from "./Components/Error";

import getAllVendors from "./Routes/getAllVendors"
import getAllEvents from "./Routes/getAllEvents"
import getMenuFromVendor from "./Routes/getMenuFromVendor"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    loader: getAllEvents,
    errorElement: <div>ERROR</div>
  },
  {
    path: "event/:eventid",
    element: <Event />,
    errorElement: <ErrorComp/>,
    loader: ({params}) => { return getAllVendors(params.eventid);},
    children: [
      {
        path: "vendor/:vendorid",
        element: <Vendor/>,
        loader: ({params}) => { return getMenuFromVendor(params);},
      },
    ],
  },
]);

export { router}