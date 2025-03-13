export const debugLog = <T>(...args: T[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(...args);
  }
};
