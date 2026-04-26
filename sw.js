self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('media500-v1').then(function(cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        'https://i.ibb.co/x8MWthjR/Whats-App-Image-2026-04-08-at-18-51-11.jpg',
        'https://i.ibb.co/QF2wP8Zm/Whats-App-Image-2026-03-30-at-10-16-13.jpg',
        'https://i.ibb.co/Df0vsByv/Whats-App-Image-2026-04-08-at-18-53-22-1.jpg',
        'https://i.ibb.co/fVsw051z/Whats-App-Image-2026-04-08-at-18-53-22.jpg',
        'https://i.ibb.co/WWQhF7yM/media500-logo-blanco-transparente.png',
        'https://i.ibb.co/N29Ts7WX/Logo-media-500-CIRCULAR-jpg.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});