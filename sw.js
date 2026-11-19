const CACHE_NAME = 'travel-lang-pwa-v3';
const ASSETS = [
  './',
  './index.html',
  './dialogue_data.js',
  './manifest.json',
  './icon.ico',
  './icon.png'
];

// 설치 즉시 대기 상태를 건너뛰고 새 서비스 워커 활성화
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch(() => {});
    })
  );
});

// 활성화 즉시 모든 탭/클라이언트 제어권 획득 및 구버전 캐시 정리
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// 네트워크 우선(Network-First) 전략: 항상 서버의 최신 파일을 먼저 가져오고, 오프라인일 때만 캐시 사용
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    fetch(event.request, { cache: 'no-store' })
      .then((networkResponse) => {
        if (networkResponse && networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(event.request))
  );
});
