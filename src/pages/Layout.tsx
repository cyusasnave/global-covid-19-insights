import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <p className="text-sm p-1 text-center bg-red-900 text-white tracking-wider">
        This website showcase the statistics of covid-19 cases in different
        countries
      </p>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
