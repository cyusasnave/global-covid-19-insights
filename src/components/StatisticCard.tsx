import { Link } from "react-router-dom";
import Statistics from "../entities/Statistics";

interface Props {
  details: Statistics;
}

const StatisticsCard = ({ details }: Props) => {
  return (
    <div className="w-full my-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="p-6">
        <h2 className="text-xl font-semibold">{details.country}</h2>
        <p className="text-sm text-gray-400">
          Continent: {details.continent || "Not reported"}
        </p>
        <p className="text-sm text-gray-400">
          Population: {details.population || "Not reported"}
        </p>
        <div className="mt-4">
          <p className="text-lg font-bold">Cases</p>
          <p>Total: {details.cases.total || "Not reported"}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Deaths</p>
          <p>Total: {details.deaths.total || "Not reported"}</p>
        </div>
        <div className="mt-4">
          <p className="text-lg font-bold">Tests</p>
          <p>Total: {details.tests.total || "Not reported"}</p>
        </div>
        <Link
          to={`/statistics/${details.country}`}
          className="block mt-4 text-primary-600 hover:text-primary-700"
        >
          View Full Details
        </Link>
      </div>
    </div>
  );
};

export default StatisticsCard;
