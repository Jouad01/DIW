let urlsToCache = [
    "./",
    "./index.html",
    "./styles.css",
    "./img/fotofrontal.jpg",
    "./img/html5.png",
    "./img/javascript.png",
    "./img/php.png",
    "./img/angular.png",
];

let cacheName = "ej1.3-ComputerSchoolV1";

self.addEventListener("install", (event) => {
    console.log("Service worker instalado");

    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener("activate", (event) => {
    console.log("Service worker activado");
});



// self.addEventListener('fetch', (event) => {
//   // Is this one of our precached assets?
//   const url = new URL(event.request.url);
//   const isPrecachedRequest = urlsToCache.includes(url.pathname);

//   if (isPrecachedRequest) {
//       // Grab the precached asset from the cache
//       event.respondWith(caches.open(cacheName).then((cache) => {
//           return cache.match(event.request.url);
//       }));
//   } else {
//       // Go to the network
//       return;
//   }
// });


self.addEventListener('fetch', async (event) => {
  event.respondWith(
      caches.open(cacheName).then((cache) => {
          return cache.match(event.request).then((cachedResponse) => {
              return cachedResponse || fetch(event.request.url).then((fetchedResponse) => {
                  // Add the network response to the cache for future visits.
                  // Note: we need to make a copy of the response to save it in
                  // the cache and use the original as the request response.
                  cache.put(event.request, fetchedResponse.clone());

                  // Return the network response
                  return fetchedResponse;
              });
          });
      })
  );
});


// Guardar cache css

// caches.open("ej1.3-ComputerSchoolV1").then((cache) => {
//     cache.add("styles.css");
// });
