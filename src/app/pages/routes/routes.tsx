import { Home, Search } from "..";
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
];

export default routes;
