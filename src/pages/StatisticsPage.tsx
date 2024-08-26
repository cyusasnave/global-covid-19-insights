import { Link } from "react-router-dom";
import StatisticsCard from "../components/StatisticCard";
import StatisticsCardSkeleton from "../components/StatisticCardSkeleton";
import useStatistics from "../hooks/useStatistics";
import { IoArrowBack } from "react-icons/io5";
import { useEffect } from "react";

const StatisticsPage = () => {
  const { data, isLoading, error } = useStatistics();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (isLoading) return <StatisticsCardSkeleton length={6} />;

  if (error) throw new Error(error.message);

  return (
    <div className="w-11/12 mx-auto">
      <Link to={"/"}>
        <button
          type="button"
          className="text-white flex items-center justify-center gap-2 mt-5 bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <IoArrowBack />
          Back
        </button>
      </Link>
      <h1 className="my-5 text-4xl tracking-tight font-extrabold text-gray-900">
        Statistics in different countries
      </h1>
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data?.response.map((stat) => (
            <StatisticsCard key={stat.country} details={stat} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StatisticsPage;
