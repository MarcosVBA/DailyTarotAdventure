'use strict';

// Bump the shell version when changing the app, manifest, scripts or icons.
// Include the scope so different GitHub Pages projects cannot clear each other's caches.
const PREFIX = 'daily-tarot-' + self.registration.scope + '-';
const SHELL_CACHE = PREFIX + 'shell-v8';
const CARD_CACHE = PREFIX + 'cards-v1';
const APP_URL = new URL('./index.html', self.registration.scope).href;
const ROOT_URL = new URL('./', self.registration.scope);
const DECK_PATH = new URL('./assets/decks/', ROOT_URL).pathname;
const SHELL_URLS = [
  './index.html',
  './manifest.webmanifest',
  './pwa.js',
  './ui.css',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png',
  './assets/icons/apple-touch-icon.png',
  './assets/icons/favicon.png'
].map(path => new URL(path, ROOT_URL).href);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await cache.addAll(SHELL_URLS.map(url => new Request(url, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== SHELL_CACHE && key !== CARD_CACHE).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

async function saveResponse(cache, request, response) {
  // A full or unavailable cache must not prevent a card from opening online.
  if (response.ok) {
    try { await cache.put(request, response.clone()); } catch { /* Storage is optional. */ }
  }
}

async function navigation(request) {
  let cache;
  try { cache = await caches.open(SHELL_CACHE); } catch { /* Network use does not require storage. */ }
  try {
    const response = await fetch(request);
    if (cache) await saveResponse(cache, APP_URL, response);
    return response;
  } catch {
    return (cache && await cache.match(APP_URL)) || Response.error();
  }
}

async function cachedResource(request, cacheName) {
  let cache;
  try {
    cache = await caches.open(cacheName);
    const cached = await cache.match(request);
    if (cached) return cached;
  } catch { /* Online use still works when storage is unavailable. */ }
  const response = await fetch(request);
  if (cache) await saveResponse(cache, request, response);
  return response;
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== ROOT_URL.origin || !url.pathname.startsWith(ROOT_URL.pathname)) return;

  if (request.mode === 'navigate' && (url.pathname === ROOT_URL.pathname || url.pathname === new URL(APP_URL).pathname)) {
    event.respondWith(navigation(request));
  } else if (url.pathname.startsWith(DECK_PATH) && /\.(jpg|webp|png)$/.test(url.pathname)) {
    // Cache requests made by the page, which schedules the selected deck's preload.
    event.respondWith(cachedResource(request, CARD_CACHE));
  } else if (SHELL_URLS.includes(url.href)) {
    event.respondWith(cachedResource(request, SHELL_CACHE));
  }
});
