(function(t){function e(e){for(var r,i,n=e[0],l=e[1],f=e[2],u=0,d=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,f||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var f=0;f<n.length;f++)e(n[f]);var c=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"2bbb":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=a("8c4f"),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"left-top"},[e("div",{staticClass:"title"},[t._v("SPARC heart + HuBMAP CCF Male Heart registrations")]),e("ScaffoldVuer",{ref:"scaffold1",attrs:{displayMarkers:t.displayMarkers,"display-u-i":t.displayUI,url:t.viewer_1.url,format:t.viewer_1.format}})],1),e("div",{staticClass:"right-top"},[e("div",{staticClass:"title"},[t._v("HuBMAP CCF Male Heart Reference Organ + registrations")]),e("ScaffoldVuer",{ref:"scaffold2",attrs:{displayMarkers:t.displayMarkers,"display-u-i":t.displayUI,url:t.viewer_2.url,format:t.viewer_2.format},on:{"on-ready":t.onReady}})],1),e("div",{staticClass:"left-bottom"},[e("div",{staticClass:"title"},[t._v("SPARC heart + HuBMAP CCF Female Heart registrations")]),e("ScaffoldVuer",{ref:"scaffold3",attrs:{displayMarkers:t.displayMarkers,"display-u-i":t.displayUI,url:t.viewer_3.url,format:t.viewer_3.format}})],1),e("div",{staticClass:"right-bottom"},[e("div",{staticClass:"title"},[t._v("HuBMAP CCF Female Heart Reference Organ + registrations")]),e("ScaffoldVuer",{ref:"scaffold4",attrs:{displayMarkers:t.displayMarkers,"display-u-i":t.displayUI,url:t.viewer_4.url,format:t.viewer_4.format},on:{"on-ready":t.onReady2}})],1)])},i=[],n=a("0a39"),l=(a("2f38"),{name:"App",components:{ScaffoldVuer:n["ScaffoldVuer"]},data:function(){return{displayUI:!0,displayMarkers:!1,viewer_1:{url:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/male/heart_m_metadata.json",format:"metadata"},viewer_2:{url:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/male/donor_with_view.json",format:"metadata"},gltfLink1:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/male/VH_M_Heart_only.glb",viewer_3:{url:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/female/heart_f_metadata.json",format:"metadata"},viewer_4:{url:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/female/donor_with_view.json",format:"metadata"},gltfLink2:"https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/female/VH_F_Heart_only.glb"}},methods:{setGLTFTransformation:function(){return()=>{const t=this.$refs.scaffold2.$module.scene.getRootRegion().getChildWithName("VH_M_heart"),e=t.getGroup();e.position.set(.04344825,-.423371166,.0150267193),e.matrixAutoUpdate=!0,t.forEachGeometry(t=>{t.morph.matrixAutoUpdate=!0,t.setAlpha(.5)},!0),this.$refs.scaffold2.$module.scene.loadViewURL("https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/male/heart_m_view.json"),this.$refs.scaffold2.$module.unsetFinishDownloadCallback()}},setGLTFTransformation2:function(){return()=>{const t=this.$refs.scaffold4.$module.scene.getRootRegion().getChildWithName("VH_F_heart"),e=t.getGroup();e.position.set(.0349527262,-.389061868,.106605567),e.matrixAutoUpdate=!0,t.forEachGeometry(t=>{t.morph.matrixAutoUpdate=!0,t.setAlpha(.5)},!0),this.$refs.scaffold4.$module.scene.loadViewURL("https://hubmapconsortium.github.io/ccf-sparc-pilot/data/ccf-in-scaffolds/female/heart_f_view.json"),this.$refs.scaffold4.$module.unsetFinishDownloadCallback()}},onReady:function(){this.$refs.scaffold2.$module.setFinishDownloadCallback(this.setGLTFTransformation()),this.$refs.scaffold2.$module.loadGLTFFromURL(this.gltfLink1,"scene",!1),this.gltfLoaded=!0},onReady2:function(){this.$refs.scaffold4.$module.setFinishDownloadCallback(this.setGLTFTransformation2()),this.$refs.scaffold4.$module.loadGLTFFromURL(this.gltfLink2,"scene",!1),this.gltfLoaded=!0}}}),f=l,c=(a("7921"),a("2877")),u=Object(c["a"])(f,s,i,!1,null,null,null),d=u.exports;r["default"].config.productionTip=!1,r["default"].use(o["a"]);const p=new o["a"]({});new r["default"]({router:p,render:t=>t(d)}).$mount("#app")},7921:function(t,e,a){"use strict";a("2bbb")}});
//# sourceMappingURL=app.0f1ba4b3.js.map