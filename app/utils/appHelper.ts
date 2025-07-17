const KEY =
  process.env.NODE_ENV === "development" ? "dat-nguyen_DEV" : "dat-nguyen";

export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, any>;

export const setLocalStorage = (key: string, value: any) => {
  const storage = getLocalStorage();
  storage[key] = value;

  return localStorage.setItem(KEY, JSON.stringify(storage));
};

export const convertMM_DDToDD_MM = (value: string) => {
  const parts = value.split("-");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Subtract 1 for zero-indexed month
  const year = parseInt(parts[2], 10);

  return new Date(year, month, day);
};

export const dateFormatter = (dateString: string) => {
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  });

  return dateFormatter.format(new Date(dateString));
};

export default dateFormatter;
