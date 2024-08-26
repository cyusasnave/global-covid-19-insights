interface Props {
  length: number;
}

const StatisticsCardSkeleton = ({ length }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-11/12 mx-auto">
      {Array.from({ length }).map((_, index) => (
        <div
          key={index}
          className="w-full my-4 bg-gray-800 text-white rounded-lg shadow-lg"
        >
          <div className="p-6 animate-pulse">
            {/* Skeleton for Country Title */}
            <div className="h-6 bg-gray-700 rounded mb-4"></div>

            {/* Skeleton for Continent */}
            <div className="h-4 bg-gray-600 rounded mb-2"></div>

            {/* Skeleton for Population */}
            <div className="h-4 bg-gray-600 rounded mb-4"></div>

            {/* Skeleton for Cases */}
            <div className="mt-4">
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-600 rounded mb-2"></div>
            </div>

            {/* Skeleton for Deaths */}
            <div className="mt-4">
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-600 rounded"></div>
            </div>

            {/* Skeleton for Tests */}
            <div className="mt-4">
              <div className="h-4 bg-gray-700 rounded mb-2"></div>
              <div className="h-4 bg-gray-600 rounded"></div>
            </div>

            {/* Skeleton for Link */}
            <div className="h-4 bg-gray-600 rounded mt-4 w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsCardSkeleton;
