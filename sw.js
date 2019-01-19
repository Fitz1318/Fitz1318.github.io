/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/01/14/POJ2586/index.html","65b49b51651e73595b52e8e2e62cbfcd"],["/2019/01/17/Hexo-Coding搭建自己的博客网站系列1-本地环境部署/2.png","27e1d5aeadadda433ac31f12f876ec49"],["/2019/01/17/Hexo-Coding搭建自己的博客网站系列1-本地环境部署/3.png","df550954c428d43a052030d66fadba42"],["/2019/01/17/Hexo-Coding搭建自己的博客网站系列1-本地环境部署/4.png","08a3804dd6b65a18c4dff1cb05bb3675"],["/2019/01/17/Hexo-Coding搭建自己的博客网站系列1-本地环境部署/index.html","27de49d642e7be5e7cd2ee1264b37304"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/1.png","5e26961600d5b48d4489b0a97e623ecb"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/2.png","be33724063cf48a6b45f77681bedade7"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/3.png","1ff8be803030a63826338700510b1af1"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/4.png","667ebcc6b5e0f714ecdc09f48ef440cb"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/5.png","a73f083c3122bacea0e603d21c6ea722"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/6.png","9bba5b243e8719651fd76a9cce5ea30d"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列2-部署博客到Coding/index.html","4cd5bcedf377cea473eaa4c146b6f649"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列3-详述站点全局配置文件/1.png","35bceadb74713a73e298af99e7b5b0a9"],["/2019/01/18/Hexo-Coding搭建自己的博客网站系列3-详述站点全局配置文件/index.html","873f45f13f7533d6d68d538285ca7f27"],["/2019/01/19/exo文章中插入图片的方法/index.html","71db519c06414b8b3e6ad1cfb20a400d"],["/2019/01/19/titled/index.html","f251e22f3e7cf64e83e7129232036bbb"],["/about/index.html","19e3c579143906fb8744104d390c17e5"],["/archives/2019/01/index.html","a901e1396c563533e93c74a1d765b3b9"],["/archives/2019/index.html","fe2bf83b67b575d1468103e6af8af976"],["/archives/index.html","2298ccf14b3f5efb5f1f179b533c27c4"],["/bundle.js","0bd1ded03dfa2c631aa4bdc2af3632c2"],["/categories/Hexo/index.html","fd17c0d3eee50e159e87deb9c70949ba"],["/categories/POJ/index.html","90098ed4e73dfbc889408a5f29eb7786"],["/categories/index.html","4c8a9935b8dbaea97ce2e9f08a72f64b"],["/css/main.css","6a7ea42b41284f839204e25a65bf8688"],["/images/1.png","2582565b7c029b71074587dbde82f8cb"],["/images/2.png","197658da06e493753d55bd8b9e0f712d"],["/images/3.png","dab7194b8e608aa861833dc277ea1795"],["/images/4.png","2111242c2b8102f0fa2bf534516b360c"],["/images/5.png","741ef82a867dd2f9a9310a63ad0f58c3"],["/images/6.jpg","4b7029e23b3182c6a9a239836b45ca1c"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.png","a7277ac85a3de098ba2dcc2998095362"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.png","2582565b7c029b71074587dbde82f8cb"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/plane.png","efb52ac29a511489f438c62132b834c2"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/wechatpay.png","bc74c2d3db4157edb499784787e77753"],["/index.html","a94c67b7fc0b4e86a58fda6bbdd942d9"],["/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/src/algolia-search.js","2a42221812445cc48cab082e4a6eba84"],["/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/src/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["/js/src/instantclick.js","308e45a942d3478d936bbafd181b8447"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","706d085e6cfec6f3e92dedc590d68d68"],["/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/src/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/src/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/src/scrollspy.js","f3cac8f51fe7dbda8b8f03c3cf733985"],["/js/src/utils.js","6fae48070e154c899287b43f7bdd096d"],["/lib/canvas-nest/README.html","a3068631c9280326383fb58b8e63cfde"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/needsharebutton/README.html","142bb6301d32bd6c357192b4c064b880"],["/lib/needsharebutton/needsharebutton.css","839f806cf996f87b47ca7b8a5a0bfa8f"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/three/README.html","1160351a13df7eee6b8114c7cdac97c8"],["/lib/three/canvas_lines.min.js","8608230b54ae702f2d2dcef36e5ea524"],["/lib/three/canvas_sphere.min.js","b79ac5005f4bf5aa2f606e8489bee5b7"],["/lib/three/gulpfile.js","3023520dd67090a4541b144421326827"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","6dccbb0a36947e9d2ea47a09fbfdda9d"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/style.css","d1c9d2f0e5f01c16c0cdacfdb62f872e"],["/sw-register.js","0ccf67291d04b70f1d9c609db5d74d76"],["/tags/Hexo/index.html","25b870733950bb8efdb907bde1c7b7a2"],["/tags/POJ/index.html","e2a3bdbd8b074536926ce83e3e32368b"],["/tags/index.html","e4aeca700977623784f16deaf380d4f9"],["/tags/博客加速/index.html","dadf26a5b3a2abc4098c65eb36c74e93"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
