import { FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useCountries from "../hooks/useCountries";
import useAppQueryStore from "../store";

const SearchCountries = () => {
  const ref = useRef<HTMLSelectElement>(null);
  const { data } = useCountries();
  const setCountryName = useAppQueryStore((s) => s.setCountryName);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current && ref.current.value) {
      setCountryName(ref.current.value);
      ref.current.value = "";
    }
  };

  return (
    <form className="w-max flex items-center gap-5" onSubmit={handleSubmit}>
      <div className="w-full md:w-96 flex items-center gap-3 py-2 px-5 rounded-full bg-transparent border-2 border-white/40">
        <FaSearch size={18} color="white" />
        <select
          ref={ref}
          className="w-full outline-none text-sm bg-transparent text-white"
        >
          <option value="">Search country</option>
          {data?.response.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="py-2 px-5 bg-white hover:bg-gray-200 transition-colors text-black shadow-lg tracking-wide rounded-full"
      >
        Search
      </button>
    </form>
  );
};

export default SearchCountries;
