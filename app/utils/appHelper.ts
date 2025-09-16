const KEY =
  process.env.NODE_ENV === "development" ? "dat-nguyen_DEV" : "dat-nguyen";

export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, any>;

export const setLocalStorage = (key: string, value: any) => {
  const storage = getLocalStorage();
  storage[key] = value;

  return localStorage.setItem(KEY, JSON.stringify(storage));
};

export const dateFormatter = (dateString: string) => {
  const [day, month, year] = dateString.split("-");
  // month start at 0
  const date = new Date(+year, +month - 1, +day);

  // Check if the date is valid.
  if (isNaN(date.getTime())) return "Invalid Date";

  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "long",
  });

  return dateFormatter.format(new Date(date));
};

export default dateFormatter;
