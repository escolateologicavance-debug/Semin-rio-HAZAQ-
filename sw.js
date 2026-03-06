const CACHE_NAME = 'hazaq-cache-v1';
const assets = [
  "./",
  "./index.html",
  "./1.html",
  "./logo-192.png",
  "./logo-512.png",
  "./manifest.json"
];

// Instalação: Salva os arquivos essenciais no cache do celular
self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Intercepta as requisições para permitir visualização mesmo sem internet
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});