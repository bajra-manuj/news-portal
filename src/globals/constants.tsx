export const API_BASE_URL = "https://newsapi.org/v2/top-headlines";
const { VITE_API_KEY, VITE_BASE_URL } = import.meta.env;
export const API_KEY = VITE_API_KEY;
export const BASE_URL = VITE_BASE_URL;
export const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];
