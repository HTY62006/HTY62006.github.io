'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "cf7bb279a05a0def14daf09ab80c25c1",
"/assets/assets/bus_detail_back.json": "25fd2d30a1432c35870d02a5d9ce5123",
"/assets/assets/bus_detail_go.json": "fb77607dfbc3da33e0bd0e369eb7d83c",
"/assets/assets/mrt_countdown.json": "9ac4121c6d41fb8d14f64c97b75eeaa6",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "c1ea56e10c2a9d2cbbe29a99d210c987",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "799e257a14f6e606e05f51e4faca0345",
"/main.dart.js": "2834380da2d644a67ed116691aab4151",
"/manifest.json": "d4737fb283d8184529bce42ab8ae436d"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
