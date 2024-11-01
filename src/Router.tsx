import { createBrowserRouter } from "react-router-dom";
import Coins from "./screen/coins";
import Coin from "./screen/coin";
import NotFound from "./screen/NotFound";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: "/:coinId",
        element: <Coin />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
