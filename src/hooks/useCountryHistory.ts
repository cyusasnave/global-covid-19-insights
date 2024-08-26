import { useQuery } from "@tanstack/react-query";
import Statistics from "../entities/Statistics";
import APIClient from "../services/apiClient";

const useCountryHistory = (country: string) => {
  const apiClient = new APIClient<Statistics>(`/history`);
  const formattedDate = new Date().toISOString().split("T")[0];

  return useQuery({
    queryKey: ["statistics", country],
    queryFn: () =>
      apiClient.getHistory({
        params: {
          country,
          day: formattedDate,
        },
      }),
  });
};

export default useCountryHistory;
