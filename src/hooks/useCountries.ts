import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<string>("/countries");

const useCountries = () =>
  useQuery({
    queryKey: ["countries"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
  });

export default useCountries;
