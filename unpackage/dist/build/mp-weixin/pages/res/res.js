(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/res/res"],{5707:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var o={Photo:function(){return n.e("components/Photo/Photo").then(n.bind(null,"1729"))},Foods:function(){return n.e("components/Foods/Foods").then(n.bind(null,"6f5e"))}},a=function(){var e=this.$createElement;this._self._c},i=[]},"76e5":function(e,t,n){"use strict";n.r(t);var o=n("e94e"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},9817:function(e,t,n){"use strict";n.r(t);var o=n("5707"),a=n("76e5");for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("dfe6");var u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"517b8092",null,!1,o["a"],void 0);t["default"]=c.exports},be1a:function(e,t,n){},dfe6:function(e,t,n){"use strict";var o=n("be1a"),a=n.n(o);a.a},e48b:function(e,t,n){"use strict";(function(e,t){var o=n("4ea4");n("eee2");o(n("66fd"));var a=o(n("9817"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},e94e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{imgPath:"../../static/images/chinese-food.png",foodData:[]}},methods:{takePhoto:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.imgPath=e.tempFilePaths[0]}})},getData:function(){var t=this;e.uploadFile({url:"http://127.0.0.1:5000/predict",name:"image",filePath:this.imgPath,success:function(n){var o=JSON.parse(n.data);console.log(o),t.foodData=o,e.setNavigationBarTitle({title:"识别结果"})}})}},onLoad:function(){this.takePhoto()}};t.default=n}).call(this,n("543d")["default"])}},[["e48b","common/runtime","common/vendor"]]]);