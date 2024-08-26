import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>Nav</div>
      <Outlet />
    </>
  );
};

export default Layout;
