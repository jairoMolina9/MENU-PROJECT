import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from "./Components/Homepage";
import Event from "./Components/Event";
import Vendor from "./Components/Vendor";

import aaa from "./Routes/getAllVendors"
import getAllEvents from "./Routes/getAllEvents"

// import aaa from "./Routes/getAllVendors"

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
    loader: ({params}) => { return aaa(params.eventid);},
    children: [
      {
        path: "vendor/:vendorid",
        element: <Vendor/>
      },
    ],
  },
]);

export { router}