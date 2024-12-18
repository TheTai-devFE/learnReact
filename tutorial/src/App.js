import "./App.css";

import Home from "./Components/Home/Home";
import Create from "./Components/Home/Create";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MainLayout from "./Mainlayout";
import BlogDetail from "./Components/Home/BlogDetail";

const appRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetail />,
      },
    ],
  },
];

const router = createBrowserRouter([
  {
    element: <Outlet />,
    children: appRoutes,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
