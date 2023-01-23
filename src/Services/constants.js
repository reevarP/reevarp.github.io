import Homepage from "../Pages/Homepage/Homepage";
import InfoPage from "../Pages/InfoPage/InfoPage";

export const routingArray = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/:id",
    element: <InfoPage />,
  },
];

export const BASE_URL = "https://api.tvmaze.com";
