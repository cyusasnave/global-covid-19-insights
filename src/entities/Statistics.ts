interface Cases {
  new: null;
  active: number;
  critical: null;
  recovered: number;
  ["1M_pop"]: null;
  total: number;
}

interface Deaths {
  new: null;
  ["1M_pop"]: null;
  total: number;
}

interface Tests {
  ["1M_pop"]: null;
  total: number;
}

export default interface Statistics {
  continent: string | null;
  country: string;
  population: number | null;
  cases: Cases;
  deaths: Deaths;
  tests: Tests;
  day: string;
  time: string;
}
