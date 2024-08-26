import { create } from "zustand";

interface AppQuery {
  countryName: string;
}

interface AppQueryStore {
  appQuery: AppQuery;
  setCountryName: (countryName: string) => void;
}

const useAppQueryStore = create<AppQueryStore>((set) => ({
  appQuery: {} as AppQuery,
  setCountryName: (countryName: string) =>
    set(() => ({ appQuery: { countryName } })),
}));

export default useAppQueryStore;
