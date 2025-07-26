const trimSlash = (url) => url.replace(/\/+$/, '');

const isProduction = process.env.NODE_ENV === "production";

const baseProdUrl = trimSlash(process.env.REACT_APP_API_BASE_PROD);

const config = {
  USERS_API: isProduction
    ? `${baseProdUrl}/UserServer`
    : process.env.REACT_APP_USERS_API_DEV,

  LISTS_API: isProduction
    ? `${baseProdUrl}/ListServer`
    : process.env.REACT_APP_LISTS_API_DEV,
};

export default config;