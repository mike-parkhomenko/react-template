const envConfig = {
  local: {
    api: "http://0.0.0.0:8000",
    webAppRootUrl: "http://0.0.0.0:3000"
  },
  development: {
    api: "https://api.dev.example.com",
    socket: "wss://api.dev.example.com/alert",
    webAppRootUrl: "https://dev.example.com"
  },
  staging: {
    api: "https://api.staging.example.com",
    socketIO: "wss://api.staging.com/alert",
    webAppRootUrl: "https://staging.example.com"
  },
  production: {
    api: "https://api.example.com",
    socketIO: "wss://api.example/alert",
    webAppRootUrl: "https://example.com"
  }
};

const defaultEnv = "development";

const getDefaultEnv = () => {
  const ENV = process.env.REACT_APP_ENV
    ? process.env.REACT_APP_ENV
    : defaultEnv;
  return ENV ? envConfig[ENV] : envConfig[defaultEnv];
};

export const getApiUrl = () => {
  const envObj = getDefaultEnv();
  return envObj.api;
};

export const getSocketUrl = () => {
  const envObj = getDefaultEnv();
  return envObj.socketIO;
};

export const getAppRootUrl = () => {
  const envObj = getDefaultEnv();
  return envObj.webAppRootUrl;
};
