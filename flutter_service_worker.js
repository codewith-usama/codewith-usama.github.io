'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "de1aa530ff6c076aa5354adc4dc34b0d",
".git/config": "d4c24d105e5abcc06283baa40a692595",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "487424fa5e4cd8be07528bb32d1e57d8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "491f3dbb09bbe9816398fd6383e5666f",
".git/logs/refs/heads/main": "f8c3ad474abf2c92505e236fa68a5050",
".git/logs/refs/remotes/origin/main": "4010b32ec878f51f861181a6f2103d11",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "3a01ef425b0fc58744da0c6d47637c9c",
".git/objects/0f/9ff48dcbb048ff4b7545dc1453e0385ec183c8": "5dc8ff0fc487bb6bdc03bf2daf69f63e",
".git/objects/14/4f155b384337e8462e499e464dfcd6dcebbff7": "84a79cf422f21497939cab2ca2ce315e",
".git/objects/14/db3d63c8b2bb3255784ea932f9eeacc900b046": "a87127ef6c55e6462d53d7292a292680",
".git/objects/16/f7ed6feca658c81a63fd33de6aa635c1069558": "886c2f23177850028eb3bc9f3b7862d1",
".git/objects/19/e5cdb98ec2821dd6c7b684e4a5210317c0557d": "b2f405c70e2dc61ecbe795242285ca53",
".git/objects/1a/041a4dcb8acac110534b8671feed3ff89ab69d": "7b0a69e9a5345ee2195a1fd5253b1d3d",
".git/objects/1a/66b10bab06bc87eb8d5666b4ecf2520a0806dc": "eaecc74c5a49ee07c55af01739856002",
".git/objects/1e/c1ff4e290daebcc5c1e5828aaf229f849a1956": "92b432968700b1b504dbde5830485d41",
".git/objects/21/863e17bc5dc6512f7db786983d019935fc822d": "39d3a9879fdaca1b0e3f1d9abb895b85",
".git/objects/26/ef09f29933a4d17d5cad6c359825f46181ce73": "da6a7d2e7cecd967ba71b7d51df3ecbb",
".git/objects/2a/be81889a5bb9878e8a9209f0a62e13748861c1": "1f87116d094baaa2305af583fa9c049c",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "87af19b7e6470a9fe6164e4b0afe2545",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "bf72be4604c984a5ff17ddb852dac423",
".git/objects/38/db462bc3594108f925e2774dccea4f6de2bd94": "30f3cfdd47df2e28b9f8861df186f088",
".git/objects/39/19591f7849d297d349ad777b67dcc27a4c9654": "39606dbee45137ef6899e5ee4bc79424",
".git/objects/3c/c3b1fb13f3c14fae4179ee4fbeda4f5f36aa08": "4f2914e24092f2ec0fb421b979e72dd8",
".git/objects/3d/43fe1855ab629e80e8741e71de4e44b0590c8b": "a7ea4b9533128646d15f5b7018843388",
".git/objects/41/2d49b6695da808fe404ebe5587b8824d6c212c": "45985def1caee04b52cd7e86a87fa641",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "54f8ff0d387380c0b9c25486e6bb6bce",
".git/objects/41/a1e7c1f544017179612c9f50aa14902ac50038": "b4583c47d3a2e2f42c1030380162b18a",
".git/objects/43/fd2a102a6788c0ced497025d5cf934087ba590": "9b86ef12e2ecc5ea3db2a31aaa5f7395",
".git/objects/46/484c5fbc7a00769c891e8a73540e4ce71286f4": "22e78c6f6535eca02adb81fc9139b1ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "35207f93ccdbc5de5e18640f46b36217",
".git/objects/52/57065f5699d6e3aa0d19d9323997cab660b07a": "a837c666d276b5e74d0881293477f1ee",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "98dc92399f0c19aa26b49bce570be57e",
".git/objects/56/35aabe813fe661b58154f1e5d8550327437829": "ca3dd70ea5b4cc9627a8e4e71de52712",
".git/objects/57/9b1336079778bc64c96b47749955fabc7bd8c1": "150408e1466b1067f8cc60669b5cfc42",
".git/objects/60/6bc046fefa52d4be80e89f31074b37ceeb655f": "64ae0dbd2c6a605150906a9a12f68c50",
".git/objects/69/44be0d79f49848fcc6d3bbdf769df5609bdc5e": "08f25c3066564d15ca84b8496af755c9",
".git/objects/6d/6f4a6515a86f0b232cac7fdb4ad9ff86aa1c96": "f3f785a0c762955795fcf1c7c7a47a9b",
".git/objects/6d/c369a7896b25a155ee6ba20431a4b2817b5e60": "6fd4e27e30faa0bed93ec6f5ec0bc464",
".git/objects/71/19901e7101ec7862efcb26f6d2e00b4e297052": "c60ba9146f08334d2ab3e3cef3118a08",
".git/objects/74/baeb35ab62b423fa67eb8adfff4f0b0a1f8889": "52cc9e70e0040543ede1086654a46c0c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/7b/46b085bccf60a7e5b8cc3d1b4bddfb4e503308": "3b4b2aaf43f27fcd1a1989a34e2ae525",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "24a55a55a467d7195b6eb59c4f31d32d",
".git/objects/83/8e005186dd5677f4e231c3fa468e584967655b": "a5d395595b4e6c8535a31073c7eba7b2",
".git/objects/83/9553bee178ae5361e18899cce4990cde6813db": "79c086e29ae1a24b3547bd88642dd99f",
".git/objects/84/bbec90f1950046deb5b11954ffb035c0e249e1": "3fa31b67e8e773f4ebcc8e2011ef975a",
".git/objects/86/af6c9d6cc7071db2929b6de976f419f14b7524": "432d9eb5a20dd4173351ce7f982fdbf4",
".git/objects/88/3a197e5bc014ec80f3fa49e3ba377bfdfba72e": "af708e294ac4671ac56b72c093f6e066",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8b/2f0ed72d4213cb43094ca321a572507bfa4458": "ed0f045e3808cf9d36da95f6a8a2acb2",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "e33c70e0eae492a795d978ed34591073",
".git/objects/8d/568f50d5f523a59901148b5583d9aef06d87e2": "3bb7b6bd14fd9de40c0f1ce31edaeb17",
".git/objects/91/d2e891b02e7ae79d78e68c739e273a5041ca32": "522827af56dabca50ef12a52c27cc9b8",
".git/objects/93/148e7349384edf1508878217e57a7b22a552c0": "55aedd3dcef16424f50b3f1df9a04c44",
".git/objects/95/869a1be2daf654f70c08387ab76d53dd8641ce": "fdba31ef974e951ea36feb779efa36b4",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "85272cd955f676ee76049021813e9923",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a3/59f625558f1a6445785e35e690a2efea6e1ad5": "998c3c95680223f80bb4c53cdcd4ad98",
".git/objects/a7/50c9622ab5c74cc44380424efaf9b9aa2c7faa": "e8ffe56c9f88c56e956a3d667e899722",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "ece6a0ff9a24a8f64dc6ea097b41ed92",
".git/objects/a9/522605e44e106dbcac8a2243cee2c9cdb33bb0": "2c316026db9e7e32afae031c332695bc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "fd4077bdd6e78092c2590334cd2e4adb",
".git/objects/b2/c71f3422481ec8571c2e45b42431961a1bc5df": "1a57f1ec54ab7d015a18a8c6e53d7a7a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "e6f06b42748018e79e683bf97d2beb87",
".git/objects/c5/61e455e96d3200b0fe1b3fd8df05308c4d443e": "680d22fc42c5ea4dbd232dba12a2172a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "d5f7a768b78f47b77c5492ef10ea9538",
".git/objects/d4/baf70c56e086730688d7eeb1f211ec3127721e": "e7d03cd3301f894a5734e3f887c8f716",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "294a7b35d4d4988884b36a893e1c0a8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "1020ea7c17300eba0f2921dfe6fff24e",
".git/objects/d9/6dae32ed249ff0788f3907a7d52b28e12d590d": "bdd654624e01bbf0df5da0fed26d5e7f",
".git/objects/de/0338fbbacf0e0385efeed585e7fedba997b155": "c2f48eb968ee9657e4bc54da7b102f25",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "534f3183d78a0e2c26089d1cf390b6ce",
".git/objects/e1/d9df3d31116a6b514263a44ccd645debf34ae0": "517e4d7133f2778f1ebe3c9e603a6167",
".git/objects/e4/40081876df135f6d27f5cf764233f85ac6194b": "f64f023b5a13ca00220771bcb3394586",
".git/objects/e4/d58dcf9a6fe4b817560e9af2222490da6356d1": "4fa6d49b004d1737601a053e18fa6638",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/e6/b04a0b1c58c6556455bec9d7e8e72c10d39cab": "7125902369f85202005ca35a548b969f",
".git/objects/e6/b2cb0890aecc0f623bea044b85dca4738f529a": "9ed39cd44b59a1ce503b590b41163d77",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "6078dfba0d9dfa654b1e692f5dc30d82",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "d6e1364da0c48871bc1f4aa1ec5acdcd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/ef/f4d66c549e506a663c0936d7eab0f2a26b841a": "b2dfce5f34aeb60ba58de14dd5e00bf8",
".git/objects/f2/e548c5aa10297bf7f626e5afd8a471c8347f89": "4bab5e2d21b733bcca561b89996f9bbe",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "6f8366174af9e5920d60d30df095c81e",
".git/objects/f8/f8828c5ba455c4af8a676de095d6501c287add": "71a6be274cde66aff204ddaf2e3363e9",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "beec33a20a19d6c9a511dc88932ab054",
".git/objects/fc/f0187dadce85840be584b61e77f7d48472974c": "297d446a68e3458f1bdffc584ef7cc26",
".git/refs/heads/main": "efdff170919f7d75cab2d2e2cf11f3da",
".git/refs/remotes/origin/main": "efdff170919f7d75cab2d2e2cf11f3da",
"assets/AssetManifest.bin": "73ada61b9736ff727be698b9ba2dc39d",
"assets/AssetManifest.json": "ce9b5982d1f6e4d20cce5fdc806544e0",
"assets/assets/1.png": "92a18fe5653405db7794cb3662c1ad7b",
"assets/assets/2.png": "6125e570074f52b0f0e49b6f8cba7245",
"assets/assets/3.png": "9da37b9daefcc7159b47396cb1193c61",
"assets/assets/4.png": "ca949c4222527dc6deea62b98a4487d3",
"assets/assets/5.png": "56117b5eaf8600a2d0d8c4cd2260db10",
"assets/assets/6.png": "e798a75d8b223ae87488afb8cdb31328",
"assets/assets/7.png": "2b2b8fee52f41ff9709d7545687611f1",
"assets/assets/8.png": "62c5e90586fa3aa8098f58d3a955b349",
"assets/assets/back_01.jpeg": "7d42037363bfb9c7aa763b188d044f4c",
"assets/assets/back_02.jpeg": "a4f75265898145c87c866fdb9b70bded",
"assets/assets/contact-us.png": "0e648be85c98dc190775726e20d7f2cd",
"assets/assets/experience.png": "76d6cf9eda8f428d689dd679a6ff510d",
"assets/assets/github.png": "b37b05a713d8eebcbb475119e587859b",
"assets/assets/home.png": "3cf3bbf96663fefac4e687373e2fdecc",
"assets/assets/linkedin.png": "0dfdf900b4949bfe7a038c3121e99376",
"assets/assets/medium.png": "9c4f7da18515c392a3ffe1c713360538",
"assets/assets/MohammadUsamaResume.pdf": "efd33b2d85481b96b17e31474472fce8",
"assets/assets/portfolio.png": "45e86ba493939d508ba61e7961cf6a5e",
"assets/assets/profile.jpg": "e0a8687d32235ae67727b628a73dcbd8",
"assets/assets/twitter.png": "c228a51f52d262f60b78c320bb8fb782",
"assets/assets/usama_02.png": "7b8801659dcb006234673fc212f91696",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c87e841f72a48ac981788fdc0e97b3d1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b6bda13f02a909129573100474a13bc7",
"/": "b6bda13f02a909129573100474a13bc7",
"main.dart.js": "b6f85b0c193ac081674aed8a0d4d3d54",
"manifest.json": "e78c2eef4d9c3e04a188c3f74bb67cda",
"README.md": "d35986c03608047c065d7c50429da959",
"version.json": "99f74fab0f9564cd53333c69fe3e6ec5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
