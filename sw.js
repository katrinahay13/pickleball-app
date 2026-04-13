const CACHE_NAME = 'six-court-mixed-v3';
const URLS_TO_CACHE = ['./','./index.html','./manifest.webmanifest','./icon-512.png','./apple-touch-icon.png','./icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});
