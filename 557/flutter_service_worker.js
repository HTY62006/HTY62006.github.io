'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"/assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "68a5efe0ed21c3db3fd8c09041ee54e4",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "13c463cdc19537d7931d9191a5702e43",
"/icons/android-icon-144x144.png": "38634e797e3a5fb14e3f52157576b769",
"/icons/android-icon-192x192.png": "b68255081ecee1a66b16114fa45e1ee2",
"/icons/android-icon-36x36.png": "dee7d253bec223b8f4f792738bcd9dfe",
"/icons/android-icon-48x48.png": "39c5f6c300b6f6c51a99e0666250f834",
"/icons/android-icon-72x72.png": "d33ef51c24332cf0ed2d39e18d8a5b98",
"/icons/android-icon-96x96.png": "5230f79663a8e164a07e8c2bc419f24b",
"/icons/apple-icon-114x114.png": "593c5e5b68066afdd259d72be69981d6",
"/icons/apple-icon-120x120.png": "73f188ae2cfaba5a7a5de12c63813b32",
"/icons/apple-icon-144x144.png": "38634e797e3a5fb14e3f52157576b769",
"/icons/apple-icon-152x152.png": "2e857b9c0e8d9ee2f8ac0adc173c3d21",
"/icons/apple-icon-180x180.png": "1cafb8e8605ed2a55a901fedb4087dad",
"/icons/apple-icon-57x57.png": "1c189e07d9c9c59ca5d4a70b0e9eab21",
"/icons/apple-icon-60x60.png": "c9052547830d4c43c258845fc78f2191",
"/icons/apple-icon-72x72.png": "d33ef51c24332cf0ed2d39e18d8a5b98",
"/icons/apple-icon-76x76.png": "018a6bf655cedc0f9caa30e6b0949447",
"/icons/apple-icon-precomposed.png": "14625b198f9536ec840453eb7ee2def4",
"/icons/apple-icon.png": "14625b198f9536ec840453eb7ee2def4",
"/icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"/icons/favicon-16x16.png": "45cfe6e05f1e252143486faf91281cb5",
"/icons/favicon-32x32.png": "ce41bd24cee4ab4927e3e3c9eabef2da",
"/icons/favicon-96x96.png": "5230f79663a8e164a07e8c2bc419f24b",
"/icons/favicon.ico": "78b3e64cea2e8c9b99f8d5f728e0889f",
"/icons/ms-icon-144x144.png": "38634e797e3a5fb14e3f52157576b769",
"/icons/ms-icon-150x150.png": "f49f7f0b43464cf68cbf1ca9d1d85e9a",
"/icons/ms-icon-310x310.png": "4ede00a1c61f486114f12e86fa3aa7e8",
"/icons/ms-icon-70x70.png": "ff0be607607b3344a6225645f6883018",
"/index.html": "30797e8fb8975caac4b0e7b7c0e5d709",
"/main.dart.js": "ca0196a2225f2a2fcbe6a4ad299ac6eb",
"/manifest.json": "8b41a38c894e64bd7fe607c161560cf9"
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
