import { createBrowserRouter } from "react-router-dom";

import { Default } from "./layouts/Default";
import { StatusTweet } from "./pages/StatusTweet";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
  

  {
    path: "/",
    element: <Default/>,  // definindo rotas no layout Default
    children: [
      {
        path: "/",
        element: <Timeline/>
      },
    
      {
        path: "/tweet",
        element: <StatusTweet/>
      },
    ]
  }
]);