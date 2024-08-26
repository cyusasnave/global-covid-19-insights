import useCountries from "../hooks/useCountries";
import useStatistics from "../hooks/useStatistics";
import StatsCard from "./StatsCard";
import StatsSkeletons from "./StatsSkeletons";

const StatsDefinition = () => {
  const { data, isLoading, error } = useCountries();
  const {
    data: statsData,
    isLoading: statsLoading,
    error: statsError,
  } = useStatistics();

  if (isLoading || statsLoading) return <StatsSkeletons />;

  if (error || statsError) throw Error(error?.message || statsError?.message);

  return (
    <div className="my-20 w-11/12 mx-auto gap-10">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Track and Compare Worldwide Statistics About COVID-19
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl">
          My platform delivers the latest global COVID-19 statistics and trends,
          providing you with the essential information needed to respond
          effectively and make informed decisions.
        </p>
      </div>
      {data && statsData && (
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          <StatsCard
            text={data.get}
            count={data.results}
            isButtonDisabled
            link=""
            buttonTitle="For more, Search"
          />
          <StatsCard
            text={statsData.get}
            count={statsData.results}
            isButtonDisabled={false}
            link="/statistics"
            buttonTitle="Explore more"
          />
        </div>
      )}
    </div>
  );
};

export default StatsDefinition;
