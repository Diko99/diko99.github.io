(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"982f33d86a85c76eeb3f":function(t,e,a){"use strict";a.r(e);var r,n=a("8af190b70a6bc55c6f1b"),i=a("0d7f0986bcd2f33d8a2a"),o=a("1037a6e0d5914309f74c"),f=a.n(o),c=a("4dd2a92e69dcbe1bab10"),l=(a("8a2d1b95e05b6a321e74"),a("6938d226fd372a75cbf9")),d=a("e37f2ec273fb18a83399"),m=a.n(d),s=a("26e95055143f95aa9ed4"),p=a.n(s),y=a("ba5c7bde001ddea15c70"),u=[{name:"Page A",uv:4e3,pv:2400,amt:2400},{name:"Page B",uv:3e3,pv:1398,amt:1210},{name:"Page C",uv:2e3,pv:2800,amt:490},{name:"Page D",uv:2780,pv:908,amt:2e3},{name:"Page E",uv:1890,pv:4800,amt:1081},{name:"Page F",uv:2390,pv:3800,amt:3e3},{name:"Page G",uv:3490,pv:4300,amt:2100}];function h(t,e,a,n){r||(r="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=t&&t.defaultProps,o=arguments.length-3;if(e||0===o||(e={children:void 0}),1===o)e.children=n;else if(o>1){for(var f=new Array(o),c=0;c<o;c++)f[c]=arguments[c+3];e.children=f}if(e&&i)for(var l in i)void 0===e[l]&&(e[l]=i[l]);else e||(e=i||{});return{$$typeof:r,type:t,key:void 0===a?null:""+a,ref:null,props:e,_owner:null}}var F=Object(l.createMuiTheme)(m.a.yellowCyanTheme),E={main:F.palette.primary.main,maindark:F.palette.primary.dark,secondary:F.palette.secondary.main,third:p.a[500]},g=h(y.j,{dataKey:"name",tickLine:!1}),v=h(y.d,{vertical:!1,strokeDasharray:"3 3"}),b=h(y.c,{vertical:!1}),T=h(y.i,{}),k=h(y.f,{});var x,C=Object(l.withStyles)({chartFluid:{width:"100%",minWidth:500,height:450}})((function(t){return h("div",{className:t.classes.chartFluid},void 0,h(y.h,{},void 0,h(y.e,{width:800,height:450,data:u,margin:{top:5,right:30,left:20,bottom:5}},void 0,g,h(y.k,{axisLine:!1,tickSize:3,tickLine:!1,tick:{stroke:"none"}}),v,b,T,k,h(y.a,{type:"monotone",dataKey:"amt",fillOpacity:"0.8",fill:E.main,stroke:"none"}),h(y.b,{dataKey:"pv",barSize:60,fillOpacity:"0.8",fill:E.secondary}),h(y.g,{type:"monotone",dataKey:"uv",strokeWidth:4,stroke:E.third}))))})),w=a("4a39b74792e391c007ec");function B(t){return(B="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e,a,r){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var n=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=r;else if(i>1){for(var o=new Array(i),f=0;f<i;f++)o[f]=arguments[f+3];e.children=o}if(e&&n)for(var c in n)void 0===e[c]&&(e[c]=n[c]);else e||(e=n||{});return{$$typeof:x,type:t,key:void 0===a?null:""+a,ref:null,props:e,_owner:null}}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function P(t,e){return(P=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=_(t);if(e){var n=_(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return j(this,a)}}function j(t,e){return!e||"object"!==B(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _(t){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var R=A(c.g,{title:"Statistic Chart",icon:"ios-stats-outline",desc:"",overflowX:!0},void 0,A("div",{},void 0,A(C,{}))),K=A(c.g,{title:"Table",whiteBg:!0,icon:"ios-menu-outline",desc:"UI Table when no data to be shown"},void 0,A("div",{},void 0,A(w.a,{}))),$=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&P(t,e)}(o,t);var e,a,r,n=O(o);function o(){return D(this,o),n.apply(this,arguments)}return e=o,(a=[{key:"render",value:function(){var t=f.a.name+" - Dashboard",e=f.a.desc;return A("div",{},void 0,A(i.Helmet,{},void 0,A("title",{},void 0,t),A("meta",{name:"description",content:e}),A("meta",{property:"og:title",content:t}),A("meta",{property:"og:description",content:e}),A("meta",{property:"twitter:title",content:t}),A("meta",{property:"twitter:description",content:e})),R,K)}}])&&S(e.prototype,a),r&&S(e,r),o}(n.Component);e.default=$},e37f2ec273fb18a83399:function(t,e){t.exports={purpleRedTheme:{palette:{primary:{light:"#EDE7F6",main:"#673AB7",dark:"#512DA8",contrastText:"#fff"},secondary:{light:"#FCE4EC",main:"#EC407A",dark:"#C2185B",contrastText:"#fff"}}},greenOrangeTheme:{palette:{primary:{light:"#F1F8E9",main:"#689F38",dark:"#33691E",contrastText:"#fff"},secondary:{light:"#FFF8E1",main:"#FF8F00",dark:"#E65100",contrastText:"#fff"}}},magentaTheme:{palette:{primary:{light:"#FCE4EC",main:"#EC407A",dark:"#D81B60",contrastText:"#fff"},secondary:{light:"#FFF8E1",main:"#FFA000",dark:"#FF6F00",contrastText:"#fff"}}},purpleTheme:{palette:{primary:{light:"#EDE7F6",main:"#AB47BC",dark:"#8E24AA",contrastText:"#fff"},secondary:{light:"#E0F7FA",main:"#00BCD4",dark:"#006064",contrastText:"#fff"}}},blueTheme:{palette:{primary:{light:"#E8EAF6",main:"#3F51B5",dark:"#283593",contrastText:"#fff"},secondary:{light:"#E1F5FE",main:"#03A9F4",dark:"#0277BD",contrastText:"#fff"}}},orangeTheme:{palette:{primary:{light:"#FFF3E0",main:"#EF6C00",dark:"#E65100",contrastText:"#fff"},secondary:{light:"#F3E5F5",main:"#9C27B0",dark:"#7B1FA2",contrastText:"#fff"}}},cyanTheme:{palette:{primary:{light:"#E0F7FA",main:"#009688",dark:"#00695C",contrastText:"#fff"},secondary:{light:"#F1F8E9",main:"#689F38",dark:"#33691E",contrastText:"#fff"}}},redTheme:{palette:{primary:{light:"#FFEBEE",main:"#EF5350",dark:"#E53935",contrastText:"#fff"},secondary:{light:"#ECEFF1",main:"#607D8B",dark:"#455A64",contrastText:"#fff"}}},skyBlueTheme:{palette:{primary:{light:"#E3F2FD",main:"#2196F3",dark:"#1565C0",contrastText:"#fff"},secondary:{light:"#E0F2F1",main:"#00BFA5",dark:"#00796B",contrastText:"#fff"}}},greyTheme:{palette:{primary:{light:"#ECEFF1",main:"#607D8B",dark:"#455A64",contrastText:"#fff"},secondary:{light:"#E0E0E0",main:"#757575",dark:"#424242",contrastText:"#fff"}}},yellowBlueTheme:{palette:{primary:{light:"#E1F5FE",main:"#039BE5",dark:"#01579B",contrastText:"#fff"},secondary:{light:"#FFF3E0",main:"#FF9800",dark:"#E65100",contrastText:"#fff"}}},pinkBlueTheme:{palette:{primary:{light:"#E0F7FA",main:"#00BCD4",dark:"#006064",contrastText:"#fff"},secondary:{light:"#FCE4EC",main:"#F06292",dark:"#AD1457",contrastText:"#fff"}}},yellowCyanTheme:{palette:{primary:{light:"#FFF3E0",main:"#F9A825",dark:"#F57F17",contrastText:"#fff"},secondary:{light:"#E0F7FA",main:"#00BCD4",dark:"#006064",contrastText:"#fff"}}},blueCyanTheme:{palette:{primary:{light:"#E8EAF6",main:"#3F51B5",dark:"#283593",contrastText:"#fff"},secondary:{light:"#E0F7FA",main:"#00BCD4",dark:"#00838F",contrastText:"#fff"}}},greenPurpleTheme:{palette:{primary:{light:"#EDE7F6",main:"#7C4DFF",dark:"#311B92",contrastText:"#fff"},secondary:{light:"#E8F5E9",main:"#00C853",dark:"#1B5E20",contrastText:"#fff"}}},pinkGreenTheme:{palette:{primary:{light:"#DCEDC8",main:"#689F38",dark:"#33691E",contrastText:"#fff"},secondary:{light:"#FCE4EC",main:"#EC407A",dark:"#D81B60",contrastText:"#fff"}}},goldTheme:{palette:{primary:{light:"#FFF9C4",main:"#FF9100",dark:"#FF6D00",contrastText:"#fff"},secondary:{light:"#EFEBE9",main:"#8D6E63",dark:"#4E342E",contrastText:"#fff"}}}}}}]);