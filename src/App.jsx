import "./App.css";

import {
  RouterProvider,
  HashRouter,
  createBrowserRouter,
} from "react-router-dom";
import { Contact, Experience, Home, Projects } from "./Views";
/* import { router } from "./routes/routes.js"; */

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },

    {
      path: "/experience",
      element: <Experience />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
