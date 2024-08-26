import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  get: string;
  errors: {
    [key: string]: string;
  };
  results: number;
  response: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "4773175883msh72e97df8960f042p13ad78jsn83a2fcb3f232",
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}
  getAll = () =>
    axiosInstance.get<FetchResponse<T>>(this.endpoint).then((res) => res.data);
  getHistory = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
