const KEY =
   process.env.NODE_ENV === "development" ? "dat-nguyen_DEV" : "dat-nguyen";

export const getLocalStorage = () =>
   JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, any>;

export const setLocalStorage = (key: string, value: any) => {
   const storage = getLocalStorage();
   storage[key] = value;

   return localStorage.setItem(KEY, JSON.stringify(storage));
};
