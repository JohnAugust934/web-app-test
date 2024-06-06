self.addEventListener("install", function (event) {
  console.log("Service Worker installing.");
  // Pre-cache resources here
});

self.addEventListener("activate", function (event) {
  console.log("Service Worker activating.");
  // Cleanup old caches here
});

self.addEventListener("fetch", function (event) {
  console.log("Fetching:", event.request.url);
  // Handle fetch requests here
});
