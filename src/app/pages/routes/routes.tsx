import { Charts, Home, Search, Swap } from "../pages";
import PATH from "./path";

const routes = [
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.SEARCH,
    element: <Search />,
  },
  {
    path: PATH.SWAP,
    element: <Swap />,
  },
  {
    path: PATH.CHARTS,
    element: <Charts />,
  },
];

export default routes;
