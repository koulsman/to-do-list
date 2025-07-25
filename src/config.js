const isProduction = process.env.NODE_ENV === "production";

const config = {
  USERS_API: isProduction
    ? `${process.env.REACT_APP_API_BASE_PROD}/UserServer`
    : process.env.REACT_APP_USERS_API_DEV,

  LISTS_API: isProduction
    ? `${process.env.REACT_APP_API_BASE_PROD}/ListServer`
    : process.env.REACT_APP_LISTS_API_DEV,


};

export default config;