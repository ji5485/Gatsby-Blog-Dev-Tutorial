(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8jRI":function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function i(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{r[n[0]]=decodeURIComponent(n[0])}catch(t){var o=i(n[0]);o!==n[0]&&(r[n[0]]=o)}n=a.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),u=0;u<c.length;u++){var l=c[u];e=e.replace(new RegExp(l,"g"),r[l])}return e}(e)}}},"8yz6":function(e,t,r){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},J4zp:function(e,t,r){var n=r("wTVA"),a=r("m0LI"),o=r("ZhPi"),i=r("wkBT");e.exports=function(e,t){return n(e)||a(e,t)||o(e,t)||i()}},Pmem:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},QeBL:function(e,t,r){"use strict";r.r(t);r("E9XD");var n=r("q1tI"),a=r("sZRP");var o=r("DZdY"),i=r("Wbzz"),c=r("AeFk");var u=Object(o.a)("div",{target:"e1kn8q5k1",label:"CategoryListWrapper"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),l=Object(o.a)((function(e){e.active;var t=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["active"]);return Object(c.b)(i.a,t)}),{target:"e1kn8q5k0",label:"CategoryItem"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),s=function(e){var t=e.selectedCategory,r=e.categoryList;return Object(c.b)(u,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return Object(c.b)(l,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},f=r("9eSz"),p=r.n(f);var d=Object(o.a)(p.a,{target:"e1n1u3tj0",label:"ProfileImageWrapper"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),b=function(e){var t=e.profileImage;return Object(c.b)(d,{fluid:t,alt:"Profile Image"})};var m=Object(o.a)("div",{target:"e160b013",label:"Wrapper"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),g=Object(o.a)("div",{target:"e160b012",label:"Background"})({name:"1u7ncg7",styles:"width:100%;background-image:linear-gradient(60deg, #29323c 0%, #485563 100%);color:#ffffff"}),y=Object(o.a)("div",{target:"e160b011",label:"SubTitle"})({name:"1h8u8jj",styles:"font-size:20px;font-weight:400;@media (max-width: 768px){font-size:15px;}"}),x=Object(o.a)("div",{target:"e160b010",label:"Title"})({name:"1izq2u",styles:"margin-top:5px;font-size:35px;font-weight:700;@media (max-width: 768px){font-size:23px;}"}),v=function(e){var t=e.profileImage;return Object(c.b)(g,null,Object(c.b)(m,null,Object(c.b)(b,{profileImage:t}),Object(c.b)("div",null,Object(c.b)(y,null,"Nice to Meet You,"),Object(c.b)(x,null,"I'm Junior Frontend Developer Hyun."))))},h=r("wx14");var j=Object(o.a)(i.a,{target:"e1eg5kak7",label:"PostItemWrapper"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),w=Object(o.a)(p.a,{target:"e1eg5kak6",label:"ThumbnailImage"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),O=Object(o.a)("div",{target:"e1eg5kak5",label:"PostItemContent"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),k=Object(o.a)("div",{target:"e1eg5kak4",label:"Title"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),I=Object(o.a)("div",{target:"e1eg5kak3",label:"Date"})({name:"1re1mzk",styles:"font-size:14px;font-weight:400;opacity:0.5"}),S=Object(o.a)("div",{target:"e1eg5kak2",label:"Category"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),A=Object(o.a)("div",{target:"e1eg5kak1",label:"CategoryItem"})({name:"1bzcbme",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;background:black;font-size:14px;font-weight:700;color:white"}),E=Object(o.a)("div",{target:"e1eg5kak0",label:"Summary"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),C=function(e){var t=e.title,r=e.date,n=e.categories,a=e.summary,o=e.thumbnail.childImageSharp.fluid,i=e.link;return Object(c.b)(j,{to:i},Object(c.b)(w,{fluid:o,alt:"Post Item Image"}),Object(c.b)(O,null,Object(c.b)(k,null,t),Object(c.b)(I,null,r),Object(c.b)(S,null,n.map((function(e){return Object(c.b)(A,{key:e},e)}))),Object(c.b)(E,null,a)))},F=function(e,t){var r=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useState)(1),i=o[0],c=o[1],u=Object(n.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return Object(n.useEffect)((function(){a.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(c((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),Object(n.useEffect)((function(){return c(1)}),[e]),Object(n.useEffect)((function(){10*i>=u.length||void 0===r.current||0===r.current.children.length||void 0===a.current||a.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:u.slice(0,10*i)}};var R=Object(o.a)("div",{target:"es8e92y0",label:"PostListWrapper"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),z=function(e){var t=e.selectedCategory,r=e.posts,n=F(t,r),a=n.containerRef,o=n.postList;return Object(c.b)(R,{ref:a},o.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,a=t.frontmatter;return Object(c.b)(C,Object(h.a)({},a,{link:n,key:r}))})))},P=r("cr+I"),L=r.n(P);t.default=function(e){var t=e.location.search,r=e.data,o=r.site.siteMetadata,i=o.title,u=o.description,l=o.siteUrl,f=r.allMarkdownRemark.edges,p=r.file,d=p.publicURL,b=p.childImageSharp.fluid,m=L.a.parse(t),g="string"==typeof m.category&&m.category?m.category:"All",y=Object(n.useMemo)((function(){return f.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return Object(c.b)(a.a,{title:i,description:u,url:l,image:d},Object(c.b)(v,{profileImage:b}),Object(c.b)(s,{selectedCategory:g,categoryList:y}),Object(c.b)(z,{selectedCategory:g,posts:f}))}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),o=r("ZhPi"),i=r("Bnag");e.exports=function(e){return n(e)||a(e)||o(e)||i()}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},"cr+I":function(e,t,r){"use strict";r("E9XD");var n=r("J4zp"),a=r("RIqP");function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){u=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw o}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=r("Pmem"),u=r("8jRI"),l=r("8yz6");function s(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function f(e,t){return t.encode?t.strict?c(e):encodeURIComponent(e):e}function p(e,t){return t.decode?u(e):e}function d(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function b(e){var t=(e=d(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function g(e,t){s((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var a="string"==typeof r&&r.includes(e.arrayFormatSeparator),o="string"==typeof r&&!a&&p(r,e).includes(e.arrayFormatSeparator);r=o?p(r,e):r;var i=a||o?r.split(e.arrayFormatSeparator).map((function(t){return p(t,e)})):null===r?r:p(r,e);n[t]=i};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),a=Object.create(null);if("string"!=typeof e)return a;if(!(e=e.trim().replace(/^[?#&]/,"")))return a;var i,c=o(e.split("&"));try{for(c.s();!(i=c.n()).done;){var u=i.value,f=l(t.decode?u.replace(/\+/g," "):u,"="),d=n(f,2),b=d[0],g=d[1];g=void 0===g?null:["comma","separator"].includes(t.arrayFormat)?g:p(g,t),r(p(b,t),g,a)}}catch(k){c.e(k)}finally{c.f()}for(var y=0,x=Object.keys(a);y<x.length;y++){var v=x[y],h=a[v];if("object"==typeof h&&null!==h)for(var j=0,w=Object.keys(h);j<w.length;j++){var O=w[j];h[O]=m(h[O],t)}else a[v]=m(h,t)}return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((function(e,t){var r=a[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))}t.extract=b,t.parse=g,t.stringify=function(e,t){if(!e)return"";s((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[",o,"]"].join("")]:[[f(t,e),"[",f(o,e),"]=",f(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[f(t,e),"[]"].join("")]:[[f(t,e),"[]=",f(n,e)].join("")])}};case"comma":case"separator":return function(t){return function(r,n){return null==n||0===n.length?r:0===r.length?[[f(t,e),"=",f(n,e)].join("")]:[[r,f(n,e)].join(e.arrayFormatSeparator)]}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[f(t,e)]:[[f(t,e),"=",f(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var u=c[i];r(u)||(o[u]=e[u])}var l=Object.keys(o);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var a=e[r];return void 0===a?"":null===a?f(r,t):Array.isArray(a)?a.reduce(n(r),[]).join("&"):f(r,t)+"="+f(a,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=l(e,"#"),a=n(r,2),o=a[0],i=a[1];return Object.assign({url:o.split("?")[0]||"",query:g(b(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:p(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign({encode:!0,strict:!0},r);var n=d(e.url).split("?")[0]||"",a=t.extract(e.url),o=t.parse(a,{sort:!1}),i=Object.assign(o,e.query),c=t.stringify(i,r);c&&(c="?".concat(c));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(f(e.fragmentIdentifier,r))),"".concat(n).concat(c).concat(u)}},m0LI:function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return r}}},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e5b7090f03cdc80c562c.js.map