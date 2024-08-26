import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Statistics from "../entities/Statistics";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Statistics>("/statistics");

const useStatistics = () =>
  useQuery({
    queryKey: ["statistics"],
    queryFn: apiClient.getAll,
    staleTime: ms("5min"), // 5 min
  });

export default useStatistics;
