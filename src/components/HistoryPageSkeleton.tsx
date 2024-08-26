import { IoArrowBack } from "react-icons/io5";

const HistoryPageSkeleton = () => {
  return (
    <section className="w-11/12 mx-auto my-10">
        <button
          type="button"
          className="text-white flex items-center justify-center gap-2 mt-5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
        >
          <IoArrowBack />
          Back
        </button>
      <div className="my-5 text-4xl tracking-tight font-extrabold text-gray-900">
        Loading...
      </div>
      <div className="p-6 bg-gray-800 grid grid-cols-1 md:grid-cols-2 rounded-lg shadow-md">
        <div className="animate-pulse">
          {/* Header Section: Continent and Country */}
          <div className="mb-4">
            <div className="h-6 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-600 rounded"></div>
          </div>
          {/* Population */}
          <div className="mb-4">
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-6 bg-gray-600 rounded"></div>
          </div>
          {/* Cases Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">COVID-19 Cases</h3>
            <ul className="mt-2 text-sm text-gray-300">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index} className="h-4 bg-gray-600 rounded mb-2"></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="animate-pulse ml-3">
          {/* Deaths Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Deaths</h3>
            <ul className="mt-2 text-sm text-gray-300">
              {Array.from({ length: 3 }).map((_, index) => (
                <li key={index} className="h-4 bg-gray-600 rounded mb-2"></li>
              ))}
            </ul>
          </div>
          {/* Tests Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-white">Tests</h3>
            <ul className="mt-2 text-sm text-gray-300">
              {Array.from({ length: 2 }).map((_, index) => (
                <li key={index} className="h-4 bg-gray-600 rounded mb-2"></li>
              ))}
            </ul>
          </div>
          {/* Date Section */}
          <div>
            <div className="h-4 bg-gray-700 rounded mb-2"></div>
            <div className="h-4 bg-gray-600 rounded"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPageSkeleton;
