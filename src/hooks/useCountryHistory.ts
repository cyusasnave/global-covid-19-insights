import { useQuery } from "@tanstack/react-query";
import Statistics from "../entities/Statistics";
import APIClient from "../services/apiClient";
import ms from "ms";

const useCountryHistory = (country: string) => {
  const apiClient = new APIClient<Statistics>(`/history`);
  const formattedDate = new Date().toISOString().split("T")[0];

  return useQuery({
    queryKey: [country],
    queryFn: () =>
      apiClient.getHistory({
        params: {
          country,
          day: formattedDate,
        },
      }),
    staleTime: ms("5min"), // 24h
  });
};

export default useCountryHistory;
