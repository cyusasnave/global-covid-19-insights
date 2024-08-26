import { Link } from "react-router-dom";

interface Props {
  text: string;
  count: number;
  isButtonDisabled: boolean;
  link: string;
  buttonTitle: string;
}

const StatsCard = ({
  text,
  count,
  isButtonDisabled,
  link,
  buttonTitle,
}: Props) => {
  return (
    <div className="flex w-full items-center justify-center flex-wrap p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
      <h3 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 capitalize">
        {text
          .split("")
          .map((letter, index) =>
            index === 0 ? (
              <span key={index} className="text-7xl">{letter}</span>
            ) : (
              <span key={index}>{letter}</span>
            )
          )}
      </h3>
      <div className="flex flex-col items-end w-1/2">
        <div className="flex justify-center items-baseline my-8">
          <span className="mr-2 text-5xl font-extrabold">{count}</span>
          <span className="text-gray-500 dark:text-gray-400">/{text}</span>
        </div>
        <Link to={link}>
          <button
            type="button"
            disabled={isButtonDisabled}
            className="text-white disabled:bg-primary-400 bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {buttonTitle}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StatsCard;
