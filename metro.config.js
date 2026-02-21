const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Apply NativeWind
const nativeWindConfig = withNativeWind(config, { input: "./global.css" });

// Patch server middleware to handle Invalid URL errors from reverse proxies
const originalMiddleware = nativeWindConfig.server?.enhanceMiddleware;
if (originalMiddleware) {
  nativeWindConfig.server.enhanceMiddleware = (metroMiddleware, metroServer) => {
    const enhanced = originalMiddleware(metroMiddleware, metroServer);
    return (req, res, next) => {
      try {
        // Ensure req.url is a valid relative URL for Metro
        if (req.url && !req.url.startsWith("/")) {
          try {
            const parsed = new URL(req.url);
            req.url = parsed.pathname + parsed.search;
          } catch {
            // Already a relative path or malformed - let it through
          }
        }
        enhanced(req, res, next);
      } catch (error) {
        if (error instanceof TypeError && error.message.includes("Invalid URL")) {
          // Gracefully handle Invalid URL from proxy requests
          if (next) next();
          else res.end();
        } else {
          throw error;
        }
      }
    };
  };
}

module.exports = nativeWindConfig;
