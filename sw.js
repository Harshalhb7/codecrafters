const CACHE = 'hungerbridge-v1';
const FILES = ['/index.html', '/style.css', '/app.js', '/manifest.json'];

// When app installs — save files to phone storage
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(FILES))
  );
});

// When app loads — serve from cache if no internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
