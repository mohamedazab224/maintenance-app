const CACHE_NAME = "alazzab-cache-v1";
const urlsToCache = [
    "/",
    "/styles/styles.css",
    "/scripts/main.js",
    "/index.html",
    "/manifest.json",
    "/assets/logos/favicon.ico"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
