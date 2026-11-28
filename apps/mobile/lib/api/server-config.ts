/** Shared by connection settings and reporting before the full API module can load. */
export const API_BASE_STORAGE_KEY = "rakazo.api_base";
export const LOCAL_API = "http://127.0.0.1:3100";
/** Public Matcha bot. Tests and local runs set EXPO_PUBLIC_API_URL. */
export const HOSTED_API = "https://matchabot.fr";
export const DEFAULT_API = process.env.EXPO_PUBLIC_API_URL ?? HOSTED_API;
