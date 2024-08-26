import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../public/covid-logo.png";
import useCountries from "../hooks/useCountries";

const Footer = () => {
  const { data } = useCountries();
  return (
    <footer className="rounded-lg shadow bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:flex-col sm:items-start sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} alt="covid-logo" className="w-16 object-cover" />
            <span className="text-white text-3xl uppercase font-bold tracking-wide">
              Covid-19
            </span>
          </Link>
          <p className="text-white my-5 ml-4">
            Click on any country to see Covid-19 details in that country
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            {data?.response.map((country) => (
              <li key={country}>
                <Link
                  to={`/statistics/${country}`}
                  className="hover:underline me-4 md:me-6 capitalize flex items-center gap-3 my-1"
                >
                  <IoIosArrowForward />
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400">
          © {new Date(Date.now()).getFullYear()}{" "}
          <Link to="/" className="hover:underline">
            Covid <sup>19</sup>
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
