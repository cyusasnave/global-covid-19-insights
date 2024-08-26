const StatsSkeletons = () => {
  return (
    <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
      {Array.from({ length: 2 }).map((_, index) => (
        <div
          key={index}
          className="flex w-full items-center justify-center flex-wrap p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow"
        >
          {/* Title Skeleton */}
          <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 capitalize">
            <span className="text-7xl inline-block bg-gray-200 animate-pulse h-10 w-10" />
            <span className="inline-block bg-gray-200 animate-pulse h-8 w-8 ml-1" />
            <span className="inline-block bg-gray-200 animate-pulse h-8 w-8 ml-1" />
            <span className="inline-block bg-gray-200 animate-pulse h-8 w-8 ml-1" />
            <span className="inline-block bg-gray-200 animate-pulse h-8 w-8 ml-1" />
          </h3>

          {/* Stats and Button Skeleton */}
          <div className="flex flex-col items-end w-1/2">
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 bg-gray-200 animate-pulse h-12 w-12 block" />
              <span className="bg-gray-200 animate-pulse h-6 w-20 block" />
            </div>

            <div className="inline-block bg-gray-200 animate-pulse h-10 w-40 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSkeletons;
