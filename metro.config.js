const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Fix for reverse proxy (Daytona): Metro's Server._processRequest does
// `new URL(req.url, protocol + '://' + host)` which fails when the proxy
// sends requests with missing or malformed host/url. This middleware runs
// before Metro and ensures req.url is always a valid relative path.
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // Ensure req.url starts with / (Metro requires a relative path)
      if (req.url && !req.url.startsWith("/")) {
        req.url = "/" + req.url;
      }
      if (!req.url) {
        req.url = "/";
      }

      // Ensure Host header exists (Metro requires it for URL construction)
      if (!req.headers.host) {
        req.headers.host = "localhost:3000";
      }

      // Strip any query params that could cause URL parsing issues
      // but preserve the ones Metro needs (platform, dev, etc.)
      try {
        new URL(req.url, "http://" + req.headers.host);
      } catch {
        // If URL is still invalid, reset to root
        console.warn("[Metro Proxy Fix] Invalid URL detected, resetting:", req.url);
        req.url = "/";
      }

      return middleware(req, res, next);
    };
  },
};

module.exports = config;
