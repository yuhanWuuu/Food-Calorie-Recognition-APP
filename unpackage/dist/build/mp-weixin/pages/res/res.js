(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/res/res"],{4269:function(t,e,n){},"76e5":function(t,e,n){"use strict";n.r(e);var o=n("e94e"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8f70":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={Photo:function(){return n.e("components/Photo/Photo").then(n.bind(null,"1729"))},Foods:function(){return n.e("components/Foods/Foods").then(n.bind(null,"6f5e"))}},a=function(){var t=this.$createElement;this._self._c},i=[]},9817:function(t,e,n){"use strict";n.r(e);var o=n("8f70"),a=n("76e5");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("cbc1");var c=n("f0c5"),u=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"2daf3aa0",null,!1,o["a"],void 0);e["default"]=u.exports},cbc1:function(t,e,n){"use strict";var o=n("4269"),a=n.n(o);a.a},e48b:function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("eee2");o(n("66fd"));var a=o(n("9817"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},e94e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgPath:"../../static/images/chinese-food.png",foodData:[]}},methods:{takePhoto:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e.imgPath=t.tempFilePaths[0]}})},getData:function(){var e=this;t.uploadFile({url:"http://192.168.1.102:5000/predict",name:"image",filePath:this.imgPath,success:function(n){var o=JSON.parse(n.data);console.log(o),e.foodData=o,t.setNavigationBarTitle({title:"识别结果"})}})}},onLoad:function(){this.takePhoto()}};e.default=n}).call(this,n("543d")["default"])}},[["e48b","common/runtime","common/vendor"]]]);