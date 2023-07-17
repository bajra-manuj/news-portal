export const BASE_URL = "https://newsapi.org/v2/top-headlines";
const { VITE_API_KEY } = import.meta.env;
export const API_KEY = VITE_API_KEY;
export const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
