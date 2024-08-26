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
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "x-rapidapi-host": import.meta.env.VITE_API_BASE_HOST,
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
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
