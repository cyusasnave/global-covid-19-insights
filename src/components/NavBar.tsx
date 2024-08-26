import { Link } from "react-router-dom";
import logo from "../../public/covid-logo.png";
import SearchCountries from "./SearchCountries";

const NavBar = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4 p-2 bg-blue-600">
      <Link to={"/"}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="covid-logo" className="w-16 object-cover" />
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-200">
            Global COVID-19 Insights
          </h2>
        </div>
      </Link>
      <SearchCountries />
    </div>
  );
};

export default NavBar;
