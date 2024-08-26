import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import background from "../assets/covid-background.jpeg";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="w-full h-screen overflow-hidden">
      <p className="text-sm p-1 text-center bg-red-900 text-white tracking-wider">
        This website showcase the statistics of covid-19 cases in different
        countries
      </p>
      <NavBar />
      <section
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="bg-white w-full h-[90vh] relative flex items-center justify-center object-center object-cover"
      >
        <div className="absolute bg-black/70 inset-0"></div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-10">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              Oops!
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-200 md:text-4xl">
              {isRouteErrorResponse(error)
                ? "That page doesn’t exist."
                : "Unexpected error occured!"}
            </p>
            {isRouteErrorResponse(error) ? (
              <Link to={"/"}>
                <button
                  type="button"
                  className="text-white mt-5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  Go back home
                </button>
              </Link>
            ) : (
              <p className="mb-4 text-lg font-light text-gray-500">
                We are already working to solve the problem.{" "}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
