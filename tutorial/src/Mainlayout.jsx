import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="wrapper-body">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

