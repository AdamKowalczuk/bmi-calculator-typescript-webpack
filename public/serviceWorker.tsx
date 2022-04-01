/// <reference lib="WebWorker" />
export type {};
declare const self: ServiceWorkerGlobalScope;
const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const assets = ["/index.html"];
// install service worker
self.addEventListener("install", (e: any) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("chaching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (e: any) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      console.log("activate event");
      return Promise.all(keys.filter((key) => key !== staticCacheName && key !== dynamicCacheName).map((key) => caches.delete(key)));
    })
  );
});

self.addEventListener("fetch", (e: any) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => {
        console.log("fetch event");
        return (
          cacheRes ||
          fetch(e.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(e.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        console.log("No internet connection found. App is running in offline mode.");
      })
  );
});
