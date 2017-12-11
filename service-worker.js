"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/portfolio/index.html","00b828837da5baf96c52df0e87d0f0d9"],["/portfolio/static/css/main.8872133d.css","40ecac2534ac8fa33ad1e829d1f1fae7"],["/portfolio/static/js/main.c7e32deb.js","96c84e718016a38ab63d4f8370283278"],["/portfolio/static/media/bigwar-1.a49a308b.png","a49a308bc578f69b32484232535e426f"],["/portfolio/static/media/bigwar-2.5bd51211.png","5bd512114f367d04895d9c158ba1ef9a"],["/portfolio/static/media/bigwar-3.60930698.png","609306986f1c459e48733121effe0543"],["/portfolio/static/media/cc-1.5ed774cb.png","5ed774cb59d9744d9f510d47ac9a85dd"],["/portfolio/static/media/cc-2.228a6a4a.png","228a6a4af3ef7ec523c3863ce31538f6"],["/portfolio/static/media/cc-3.8931455a.png","8931455a3cb85f2894709f0e3ea27b37"],["/portfolio/static/media/downScrollingIcon.43dbc438.svg","43dbc438ec382e892683043f423c62ae"],["/portfolio/static/media/facebookIcon.3ae13bc8.svg","3ae13bc863b5aebd90257119aa4b22f0"],["/portfolio/static/media/githubIcon.d0805040.svg","d0805040796ba35b546cacd3a7b634b5"],["/portfolio/static/media/pandaria-1.47643e5b.jpg","47643e5b778841a98614b00936885f0e"],["/portfolio/static/media/pandaria-2.e0c1ca1b.jpg","e0c1ca1b6d7fbc52d1de0e02e00832be"],["/portfolio/static/media/pandaria-3.efefe465.jpg","efefe46579c272fc531b49196d1b1bea"],["/portfolio/static/media/pandaria-4.b784fb02.jpg","b784fb02b18938a8b3b8c06c341f7689"],["/portfolio/static/media/parallax1.326ce1cd.jpg","326ce1cd11b17cf124ae3d2371c1ebc2"],["/portfolio/static/media/parallax2.58a6795f.jpg","58a6795f6559794dc1de6b5e9e845cd9"],["/portfolio/static/media/parallax3.a19c605d.jpg","a19c605dcf578fa4a016c836d576a3d6"],["/portfolio/static/media/pd-1.107472a7.jpg","107472a7efb31d852602ed0e627b4c64"],["/portfolio/static/media/pd-2.eea5a3c9.jpg","eea5a3c92b8461ef2ba9df6eda9e413a"],["/portfolio/static/media/rr-1.921e82b2.png","921e82b20256a375363a0880dba36845"],["/portfolio/static/media/rr-2.56122e3f.png","56122e3f26dcf67d02dcc9e372ce38d6"],["/portfolio/static/media/rr-3.b150e395.png","b150e3950be4fa1c6e4f0fa9aa251eae"],["/portfolio/static/media/rr-4.32e2d0eb.png","32e2d0eb8fa7cc1e12d1a643585bbe9a"],["/portfolio/static/media/rs-1.249d6f88.jpg","249d6f8864c95f5414db8459a7ee9146"],["/portfolio/static/media/rs-2.9f88cf5a.png","9f88cf5aff3d300778b8c4c8ec271476"],["/portfolio/static/media/tapbrick-1.8b85f183.jpg","8b85f1835230c79830cb0a35b2719551"],["/portfolio/static/media/tapbrick-2.9e248374.jpg","9e248374a287ee7eac96358a5fd78e87"],["/portfolio/static/media/tapbrick-3.b4da53db.jpg","b4da53db7c851cdd197486d1ee25d690"],["/portfolio/static/media/tapbrick-4.0704c01c.jpg","0704c01c0fb7be2563c92313ab9f9ddc"],["/portfolio/static/media/tileload-1.bf03346d.png","bf03346d8c8d6d84654baed52a7d97aa"],["/portfolio/static/media/tileload-2.6fddc8ae.png","6fddc8ae59f38dc66ce3dc77a11c722d"],["/portfolio/static/media/tileload-3.cc04b3c7.png","cc04b3c72f738710ec8123c1b5666183"],["/portfolio/static/media/tistoryIcon.16fb6e98.png","16fb6e98314fbb8a2ae507ab24e86fbc"],["/portfolio/static/media/tv-1.70d63662.jpg","70d636620a155167b94dc03d59a63b34"],["/portfolio/static/media/tv-2.b3b51f3b.jpg","b3b51f3b8a9213a11d54e9bba2f873b3"],["/portfolio/static/media/western-1.70e913c2.jpg","70e913c296c232f2b42ef8d2a2a381ac"],["/portfolio/static/media/western-2.9bdff3c9.jpg","9bdff3c99619877db057e1848b8dc5af"],["/portfolio/static/media/western-3.66a185c7.jpg","66a185c73ad0a354371254ff74b277c8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/portfolio/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});