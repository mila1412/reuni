if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,i,d)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const f={uri:location.origin+c.slice(1)};return Promise.all(i.map(c=>{switch(c){case"exports":return a;case"module":return f;default:return e(c)}})).then(e=>{const c=d(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"front"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/3.b8d4cb1c.css",revision:"5850ee9bad34012615fb5dcb4ab71053"},{url:"css/app.31118793.css",revision:"bde5d2974e61535724c968477a40ff58"},{url:"css/vendor.32a6ca38.css",revision:"dd856b1607e45811ada22aa3946c34e0"},{url:"dessert.jpg",revision:"5833503df35332488a0e6a3d3b9d6ec1"},{url:"favicon.ico",revision:"ac652aacca940e72b6210708144000de"},{url:"fonts/fa-brands-400.329a95a9.woff",revision:"099a9556e1a63ece24f8a99859c94c7d"},{url:"fonts/fa-brands-400.c1210e5e.woff2",revision:"f7307680c7fe85959f3ecf122493ea7d"},{url:"fonts/fa-regular-400.36722648.woff",revision:"7124eb50fc8227c78269f2d995637ff5"},{url:"fonts/fa-regular-400.68c5af1f.woff2",revision:"f0f8230116992e521526097a28f54066"},{url:"fonts/fa-solid-900.ada6e6df.woff2",revision:"e8a427e15cc502bef99cfd722b37ea98"},{url:"fonts/fa-solid-900.c6ec0800.woff",revision:"9fe5a17c8ab036d20e6c5ba3fd2ac511"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.73d1c707.woff",revision:"77b1b72456c0ebd4b4cb0c862b6a8263"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4e5d88c6.woff2",revision:"519b8674b0b5dc53b39f9b06d2d77019"},{url:"icons/apple-icon-120x120.png",revision:"d09d1f98f56c418a32025b03fcae56c4"},{url:"icons/apple-icon-152x152.png",revision:"4858b987223d1bbaac1b810c3a5e6c03"},{url:"icons/apple-icon-167x167.png",revision:"ee89643d73ca55189a9ab2a5bb3d4b59"},{url:"icons/apple-icon-180x180.png",revision:"ed2a010d6d143cd61dca1a2f6666b3ac"},{url:"icons/apple-launch-1125x2436.png",revision:"6a1497fc31dc7105a0af3c85fb1ab2b8"},{url:"icons/apple-launch-1170x2532.png",revision:"4e7f8bf868144016e843cc3be20f7746"},{url:"icons/apple-launch-1242x2208.png",revision:"923c81ca0211b6d99d83ab4349969c5b"},{url:"icons/apple-launch-1242x2688.png",revision:"142704b660d38472b28761131fc9281a"},{url:"icons/apple-launch-1284x2778.png",revision:"ece55f5b96e6243b3d0dc09cdd6d8606"},{url:"icons/apple-launch-1536x2048.png",revision:"6d04516172a6f2c4e149fcb0576e8957"},{url:"icons/apple-launch-1620x2160.png",revision:"4cc0362a7a4c2aa1e0a8a81ce981f68e"},{url:"icons/apple-launch-1668x2224.png",revision:"ebad0dbc03c60041259c8f6453830086"},{url:"icons/apple-launch-1668x2388.png",revision:"6befbc529dfed395d20ea012fe4c3059"},{url:"icons/apple-launch-2048x2732.png",revision:"86fd66d2bcb98215f288c9194c3df500"},{url:"icons/apple-launch-750x1334.png",revision:"511afc854fe3b5fdff7b10a598a55b02"},{url:"icons/apple-launch-828x1792.png",revision:"26b5f8dfeb5077e52c486e9077c8430f"},{url:"icons/favicon-128x128.png",revision:"df745394d4679de8b67dbb3aeae54eea"},{url:"icons/favicon-16x16.png",revision:"4cba3a09360810210961db159df66393"},{url:"icons/favicon-32x32.png",revision:"68c3de48b27bb718ce3eb98c7c05a14d"},{url:"icons/favicon-96x96.png",revision:"9b5a24b3ffc8014ec78c5eb6e0c6c9db"},{url:"icons/icon-128x128.png",revision:"df745394d4679de8b67dbb3aeae54eea"},{url:"icons/icon-192x192.png",revision:"628d1d4cfab1a18ba941625d7504bdb6"},{url:"icons/icon-256x256.png",revision:"184685977d957fd64b9e63d1d198fc2d"},{url:"icons/icon-384x384.png",revision:"822c25608e0282ae8c0e0c547a0ec564"},{url:"icons/icon-512x512.png",revision:"18650766e6e4c8cb49ef914d364eeefa"},{url:"icons/ms-icon-144x144.png",revision:"526893d09dbacd3f2d852f1ae0da091c"},{url:"icons/safari-pinned-tab.svg",revision:"ba0553f801aebcd0a2f24ff0bc930d43"},{url:"img/bg.d25b6e3a.jpg",revision:"936bdc75deda5d5a18f4d41c77a6dda9"},{url:"img/ca1.cb6f1ec3.jpg",revision:"3b1f60dde85f0ca365f11f2d713bcc2e"},{url:"img/ca2.ec0cffc1.jpg",revision:"dd356df983f2ecadf206364197824e89"},{url:"img/ca3.aff466e6.jpg",revision:"32bf673c76a81feb47d7ae67af11bc70"},{url:"img/ca4.429a0f22.jpg",revision:"533de41f2b787e4a9106e28be44a4672"},{url:"img/cake1.b0889a1f.png",revision:"b38cf2236c7e9a4501392f586bec3350"},{url:"img/fb1.01e4d89b.jpg",revision:"2ed9580529eb8abcf604861ae6c669e7"},{url:"img/fb11.27581e2b.png",revision:"0c4e7b8d6612533616e8d02cc7de298e"},{url:"img/fb2.d0a3da66.jpg",revision:"478dce96457ea504ee481effc4cd652d"},{url:"img/fb22.6ad85734.png",revision:"3d3d9f30497ba5e61779f871da72078c"},{url:"img/fb3.22a3689b.jpg",revision:"1ea6dbf80a4dbb086fd6ab2adf535ca2"},{url:"img/fb33.b4c112cb.png",revision:"2605f2434cd2405f70a12c7a749c0ac4"},{url:"img/fb4.3a7b3f6e.jpg",revision:"b3e73af97c9fa5676e15da97534cb86d"},{url:"img/fb44.c0f613e9.png",revision:"f395f1bd00ee5926b5cfeb100097f48e"},{url:"img/line.0630f74b.png",revision:"76352df4b0f0853d73ec8d37af0ccc16"},{url:"img/logo.f7064c52.jpg",revision:"7fd0f7671a5c89524cdddea75dd3c1b5"},{url:"img/photo.df25a627.jpg",revision:"9c3d0f7551362ab1abd43a3264d8551c"},{url:"img/reserve.cd0bcea9.jpg",revision:"614aaa6f44d1954eb9be1007efac2fbd"},{url:"img/shopee.95abd813.png",revision:"79baef3d1be13984a91a41b240a35458"},{url:"index.html",revision:"b184a8333b7cb1a15af455b3395ee4fa"},{url:"js/10.fd562df7.js",revision:"200daeac36d0594200a6a0b559eca9cf"},{url:"js/11.92d1ddb6.js",revision:"4ae4663e5c45e6c38e406a6411f1cd74"},{url:"js/12.aae56ce6.js",revision:"a567b79ef823de9609e306c3b12caecf"},{url:"js/13.f98ffe86.js",revision:"49d6cfd91920b716d6079aab300bd2f5"},{url:"js/14.9cabb8d0.js",revision:"1075d5b67dda603c37fcc5cb8405e0f2"},{url:"js/15.c8476b6c.js",revision:"aab6ffa998256a22a274678a25141a08"},{url:"js/16.57c811e0.js",revision:"f70de593d28a38232685f0eb0b466105"},{url:"js/17.6a36dd64.js",revision:"b16967d0507037df708c1d4031706049"},{url:"js/18.358fd94d.js",revision:"c0bc5cc0eef622628bbde07e9ee039fa"},{url:"js/19.b8421a1d.js",revision:"80a3c0f13a839655deb9e798f2329b95"},{url:"js/2.8f0b283d.js",revision:"142b48efc55c2a2d92cb2d5d61d4099d"},{url:"js/20.303dc725.js",revision:"003e9f2291191a3697e1991172d8bded"},{url:"js/3.a179d279.js",revision:"cd180e83bb220b5ab222c7496140db05"},{url:"js/4.90a2cdac.js",revision:"14a36f0eb87b873706cc5ff8d6d73e69"},{url:"js/5.d2f80d4d.js",revision:"cef8ff33b18739bc812f5fffc0e4326f"},{url:"js/6.ac7ad351.js",revision:"890b31dea72085a8bac02988fb902f59"},{url:"js/7.db2e8b2a.js",revision:"aad62b19b3f53da9e60a752ed4431981"},{url:"js/8.e67b4ebc.js",revision:"27c9444e21e74068cc3dcca1d89e5a76"},{url:"js/9.e87e63cc.js",revision:"4adc5abda0a2f0e859c47a7545a9367e"},{url:"js/app.5f9ed988.js",revision:"3aa53b297a9ae2b605f0d4041e6305fe"},{url:"js/vendor.9d8b5804.js",revision:"550893db8a1955af6d78992eb7bc93b7"},{url:"manifest.json",revision:"acc368ddfb5d72ffa7b16f809e1c68a6"},{url:"media/v1.79d9344a.mp4",revision:"1514d0bae5ea19b5327245dabea6b00d"},{url:"media/v2.3e253b70.mp4",revision:"549f7c5ec6c6d8bf32f450f85dbb77d3"},{url:"media/v3.8e5b2806.mp4",revision:"8af7b56f2a0fe05b00d459d9dfa6e9cb"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
