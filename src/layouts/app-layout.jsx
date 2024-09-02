import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
