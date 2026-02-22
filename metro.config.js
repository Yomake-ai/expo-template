const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Fix for reverse proxy (Daytona): Metro's Server._processRequest does:
//   const reqProtocol = req.socket.encrypted ? 'https' : req.headers['x-forwarded-proto'] || 'http';
//   const reqHost = req.headers.host || req.headers['x-forwarded-host'];
//   new URL(req.url, reqProtocol + '://' + reqHost);
// This fails when Daytona's proxy sends malformed/missing headers.
// We normalize ALL headers Metro uses before passing to its handler.
config.server = {
  ...config.server,
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // 1. Normalize req.url - must be a valid relative path
      if (!req.url || typeof req.url !== "string") {
        req.url = "/";
      } else if (!req.url.startsWith("/")) {
        req.url = "/" + req.url;
      }

      // 2. Normalize Host header - Metro requires this for URL construction
      if (!req.headers.host || typeof req.headers.host !== "string" || req.headers.host.trim() === "") {
        req.headers.host = "localhost:3000";
      }

      // 3. Normalize x-forwarded-proto - Metro uses this to determine protocol
      // Proxies may send "https, http" (comma-separated) which breaks URL parsing
      const fwdProto = req.headers["x-forwarded-proto"];
      if (fwdProto && typeof fwdProto === "string") {
        // Take only the first protocol value and ensure it's valid
        const firstProto = fwdProto.split(",")[0].trim().toLowerCase();
        req.headers["x-forwarded-proto"] = firstProto === "https" ? "https" : "http";
      }

      // 4. Normalize x-forwarded-host - Metro falls back to this if Host is missing
      const fwdHost = req.headers["x-forwarded-host"];
      if (fwdHost && typeof fwdHost === "string") {
        // Take only the first host value (proxies may chain them)
        req.headers["x-forwarded-host"] = fwdHost.split(",")[0].trim();
      }

      // 5. Final validation: simulate what Metro does and fix if still broken
      try {
        const proto = req.socket?.encrypted ? "https" : (req.headers["x-forwarded-proto"] || "http");
        const host = req.headers.host || req.headers["x-forwarded-host"] || "localhost:3000";
        new URL(req.url, proto + "://" + host);
      } catch {
        // Nuclear option: reset everything to known-good values
        console.warn("[Metro Proxy Fix] Invalid URL after normalization, resetting all headers");
        console.warn("  req.url:", req.url);
        console.warn("  host:", req.headers.host);
        console.warn("  x-forwarded-proto:", req.headers["x-forwarded-proto"]);
        console.warn("  x-forwarded-host:", req.headers["x-forwarded-host"]);
        req.url = "/";
        req.headers.host = "localhost:3000";
        delete req.headers["x-forwarded-proto"];
        delete req.headers["x-forwarded-host"];
      }

      return middleware(req, res, next);
    };
  },
};

module.exports = config;
