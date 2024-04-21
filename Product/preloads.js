
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.f5c5283637b88452ccbc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.8bf254f81ba9083833c8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/114.latest.en.c10601cb53ddc81e5051.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/991.latest.en.9c44aa3fb5e5c3cd39f5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.3371a0472ec3c41accee.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.latest.en.6db36d65de55b15facf0.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/569.latest.en.406f42dec60e3e93493f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/462.latest.en.4131d919f8fa67db3eeb.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/18.latest.en.ff3d817c92cb9c4b0678.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.957065aed2ae79dbab27.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/902.latest.en.e3249b8edfbd78330bac.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.cb805ff4853f77f7b3bf.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.latest.en.b1a85f925b41702ad78f.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0250/5169/3134/files/logo_x320.png?v=1613778722"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  