(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=o[0]))}return e}var r={},i={index:0},n=[];function a(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=r,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/Room/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0891":function(e,t,o){"use strict";var r=o("139d"),i=o.n(r);i.a},"139d":function(e,t,o){},3784:function(e,t,o){e.exports=o.p+"img/icon-angle-right.2f95dbcb.svg"},"42e1":function(e,t,o){e.exports=o.p+"img/mobile-image-hero-1.6ee5d72d.jpg"},"4c2f":function(e,t,o){e.exports=o.p+"img/icon-close.2992ccac.svg"},"4cc1":function(e,t,o){e.exports=o.p+"img/image-about-light.bef47073.jpg"},"541f":function(e,t,o){e.exports=o.p+"img/desktop-image-hero-3.63998c1c.jpg"},5594:function(e,t,o){e.exports=o.p+"img/icon-angle-left.09c8dfd5.svg"},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Carousel"),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"about"}},[o("div",{staticClass:"aboutImg1"}),o("div",{staticClass:"aboutCard"},[o("h2",[e._v("About our furniture")]),o("p",[e._v(" Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space. ")])]),o("div",{staticClass:"aboutImg2"})])}],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{attrs:{id:"slider"}},[r("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[r("div",{key:e.curP,staticClass:"slideImg",style:e.imgStyle},[r("Navbar")],1)]),r("div",{staticClass:"slide"},[r("h1",[e._v(e._s(e.curH1))]),r("p",[e._v(e._s(e.curP))]),e._m(0),r("div",{staticClass:"controls"},[r("a",{on:{click:function(t){return e.changeSlide(-1)}}},[r("img",{attrs:{src:o("5594"),alt:"previous"}})]),r("a",{on:{click:function(t){return e.changeSlide(1)}}},[r("img",{attrs:{src:o("3784"),alt:"next"}})])])])],1)])},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"shopNowLink"},[e._v("shop now "),r("img",{attrs:{src:o("a328"),alt:"shop now"}})])}],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"navbar"},[r("img",{staticClass:"logo",attrs:{src:o("cbf3")}}),r("a",{staticClass:"burger",on:{click:function(t){e.active=!0}}},[r("img",{attrs:{src:o("9532")}})]),r("div",{staticClass:"links",class:{active:e.active}},[r("a",{staticClass:"close",on:{click:function(t){e.active=!1}}},[r("img",{attrs:{src:o("4c2f"),alt:"close"}})]),r("a",[e._v("home")]),r("a",[e._v("shop")]),r("a",[e._v("about")]),r("a",[e._v("contact")])])])},u=[],l={data(){return{active:!1}}},d=l,p=(o("66a8"),o("2877")),f=Object(p["a"])(d,c,u,!1,null,"55ed79dd",null),g=f.exports,h={components:{Navbar:g},data(){return{width:0,curSlide:0,curH1:"Discover innovative ways to decorate",curP:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",curImg:"image-hero-1.jpg",slideText:[{h1:"Discover innovative ways to decorate",p:"We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",img:"image-hero-1.jpg"},{h1:"We are available all across the globe",p:"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",img:"image-hero-2.jpg"},{h1:"Manufactured with the best materials",p:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",img:"image-hero-3.jpg"}]}},methods:{changeSlide(e){this.trns=!1,this.curSlide=e+this.curSlide;var t=this.curSlide;3===t?t=0:-1===t&&(t=2),this.curH1=this.slideText[t].h1,this.curP=this.slideText[t].p,this.curImg=this.slideText[t].img,this.curSlide=t}},created(){this.width=window.innerWidth,window.addEventListener("resize",()=>{this.width=window.innerWidth})},computed:{imgStyle(){var e;e=this.width>376?"desktop-":"mobile-";var t="url("+o("74db")("./"+e+this.curImg)+")";return{"background-image":t,"background-size":"100% 100%"}}}},m=h,v=(o("ac44"),Object(p["a"])(m,a,s,!1,null,"1e6d9920",null)),b=v.exports,y={components:{Carousel:b}},w=y,j=(o("0891"),Object(p["a"])(w,i,n,!1,null,"25713069",null)),x=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:e=>e(x)}).$mount("#app")},"616e":function(e,t,o){e.exports=o.p+"img/desktop-image-hero-2.03660ebe.jpg"},"61e3":function(e,t,o){e.exports=o.p+"img/image-about-dark-tablet.8deceb1d.jpg"},6488:function(e,t,o){},"66a8":function(e,t,o){"use strict";var r=o("a002"),i=o.n(r);i.a},"74db":function(e,t,o){var r={"./desktop-image-hero-1.jpg":"e5a4","./desktop-image-hero-2.jpg":"616e","./desktop-image-hero-3.jpg":"541f","./image-about-dark-tablet.jpg":"61e3","./image-about-dark.jpg":"b24a","./image-about-light-tablet.JPG":"9ed2","./image-about-light.jpg":"4cc1","./mobile-image-hero-1.jpg":"42e1","./mobile-image-hero-2.jpg":"e7c6","./mobile-image-hero-3.jpg":"d751"};function i(e){var t=n(e);return o(t)}function n(e){if(!o.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=n,e.exports=i,i.id="74db"},9532:function(e,t,o){e.exports=o.p+"img/burger.c63378f6.svg"},"9ed2":function(e,t){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},a002:function(e,t,o){},a328:function(e,t,o){e.exports=o.p+"img/icon-arrow.c011ad3b.svg"},ac44:function(e,t,o){"use strict";var r=o("6488"),i=o.n(r);i.a},b24a:function(e,t,o){e.exports=o.p+"img/image-about-dark.fa292a67.jpg"},cbf3:function(e,t,o){e.exports=o.p+"img/logo.9b7be60a.svg"},d751:function(e,t,o){e.exports=o.p+"img/mobile-image-hero-3.39ee9deb.jpg"},e5a4:function(e,t,o){e.exports=o.p+"img/desktop-image-hero-1.94f747bc.jpg"},e7c6:function(e,t,o){e.exports=o.p+"img/mobile-image-hero-2.d77b8410.jpg"}});
//# sourceMappingURL=index.2e661f8d.js.map