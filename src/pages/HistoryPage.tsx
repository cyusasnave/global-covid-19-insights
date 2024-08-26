import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import useCountryHistory from "../hooks/useCountryHistory";
import HistoryPageSkeleton from "../components/HistoryPageSkeleton";
import { useEffect } from "react";

const HistoryPage = () => {
  const { country } = useParams();
  const { data, isLoading, error } = useCountryHistory(country!);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [country]);

  if (isLoading) return <HistoryPageSkeleton />;

  if (error || (data?.errors && Object.keys(data?.errors).length > 0))
    throw new Error(error?.message || "data error");

  const details = data?.response[0];

  return (
    details && (
      <section className="w-11/12 mx-auto my-10">
        <Link to={"/statistics"}>
          <button
            type="button"
            className="text-white flex items-center justify-center gap-2 mt-5 bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <IoArrowBack />
            Back
          </button>
        </Link>
        <h1 className="my-5 text-4xl tracking-tight font-extrabold text-gray-900">
          {details.country}
        </h1>
        <div className="p-6 bg-gray-800 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md">
          <div>
            {/* Header Section: Continent and Country */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-white">
                {details.country}
              </h2>
              <p className="text-sm text-gray-400">
                Continent:{" "}
                {details.continent ? details.continent : "Not reported"}
              </p>
            </div>
            {/* Population */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-300">Population:</p>
              <p className="text-lg font-bold text-white">
                {details.population ? details.population : "Not reported"}
              </p>
            </div>
            {/* Cases Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">
                COVID-19 Cases
              </h3>
              <ul className="mt-2 text-sm text-gray-300">
                <li>
                  Total Cases:{" "}
                  {details.cases.total ? details.cases.total : "Not reported"}
                </li>
                <li>
                  Active Cases:{" "}
                  {details.cases.active ? details.cases.active : "Not reported"}
                </li>
                <li>
                  Recovered:{" "}
                  {details.cases.recovered
                    ? details.cases.recovered
                    : "Not reported"}
                </li>
                <li>
                  New Cases:{" "}
                  {details.cases.new ? details.cases.new : "Not reported"}
                </li>
                <li>
                  Critical Cases:{" "}
                  {details.cases.critical
                    ? details.cases.critical
                    : "Not reported"}
                </li>
                <li>Cases per 1M Pop: {details.cases["1M_pop"]}</li>
              </ul>
            </div>
          </div>

          <div>
            {/* Deaths Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">Deaths</h3>
              <ul className="mt-2 text-sm text-gray-300">
                <li>
                  Total Deaths:{" "}
                  {details.deaths.total ? details.deaths.total : "Not reported"}
                </li>
                <li>
                  New Deaths:{" "}
                  {details.deaths.new ? details.deaths.new : "Not reported"}
                </li>
                <li>
                  Deaths per 1M Pop:{" "}
                  {details.deaths["1M_pop"]
                    ? details.deaths["1M_pop"]
                    : "Not reported"}
                </li>
              </ul>
            </div>
            {/* Tests Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-white">Tests</h3>
              <ul className="mt-2 text-sm text-gray-300">
                <li>
                  Total Tests:{" "}
                  {details.tests.total ? details.tests.total : "Not reported"}
                </li>
                <li>
                  Tests per 1M Pop:{" "}
                  {details.tests["1M_pop"]
                    ? details.tests["1M_pop"]
                    : "Not reported"}
                </li>
              </ul>
            </div>
            {/* Date Section */}
            <div>
              <p className="text-sm font-medium text-gray-300">Date Updated:</p>
              <p className="text-sm text-gray-400">
                {details.time.split("T")[0]}
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default HistoryPage;
