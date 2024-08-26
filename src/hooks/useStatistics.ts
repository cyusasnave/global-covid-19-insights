import { useQuery } from "@tanstack/react-query";
import Statistics from "../entities/Statistics";
import APIClient from "../services/apiClient";
import ms from "ms";

const apiClient = new APIClient<Statistics>("/statistics");

const useStatistics = () =>
  useQuery({
    queryKey: ["statistics"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
  });

export default useStatistics;
