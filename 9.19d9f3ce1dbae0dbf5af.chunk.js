(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4baf978c269f7e83ac7b":function(e,t,n){"use strict";n.r(t);var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0d7f0986bcd2f33d8a2a"),c=n("1037a6e0d5914309f74c"),l=n.n(c),u=n("6938d226fd372a75cbf9"),f=n("4dd2a92e69dcbe1bab10"),d=(n("8a2d1b95e05b6a321e74"),n("b02fe3f80d4238b52f20")),s=n.n(d),p=n("edc5ec6b13db97ea0a32"),b=n("63bac7d5ea40ecc9ba06"),m=n.n(b),y=n("c09d19c0d058d138126d"),v=n.n(y),h=n("435859b6b76fb67a754a"),w=n.n(h),O=n("fee60f331c8753fe01a3"),g=n.n(O),S=n("2618892602a0e7905b7d"),x=n.n(S),j=n("16c7abd7abc407b9f247"),F=n.n(j),R=n("c37835866a3298466125"),_=n.n(R),P=n("5c0a236ca4c0b26f32cd"),k=n.n(P),T=n("921c0b8c557fe6ba5da8"),C=n.n(T),E=n("ab4cb61bcb2dc161defb"),N=n("d7dd51e1bf6bfc2c9c3d"),A=n("2aea235afd5c55b8b19b"),D=n.n(A),I=n("36164894564e60edef62"),B=n("86a52b44818b9d4ea07e"),$=function(e){return{type:B.j,data:e}},W={type:B.i};function q(e){return(q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),1===a)t.children=r;else if(a>1){for(var c=new Array(a),l=0;l<a;l++)c[l]=arguments[l+3];t.children=c}if(t&&i)for(var u in i)void 0===t[u]&&(t[u]=i[u]);else t||(t=i||{});return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function G(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=L(e);if(t){var r=L(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==q(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M,Q=function(e){var t=e.input,n=K(e,["input"]);return i.a.createElement(x.a,Y({},t,n,{valueselected:t.value,onChange:function(e,n){return t.onChange(n)}}))},U=function(e){return null==e?"Required":void 0},X=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email":void 0},ee={text:"Sample Text",email:"sample@mail.com",radio:"option1",selection:"option1",onof:!0,checkbox:!0,textarea:"This is default text"},te=Z(C.a,{variant:"h5",component:"h3"},void 0,"Simple Form Example"),ne=Z(C.a,{component:"p"},void 0,"The delay between when you click (Submit) and when the alert dialog pops up is intentional, to simulate server latency."),oe=Z(_.a,{component:"label"},void 0,"Choose One Option"),re=Z(k.a,{value:"option1",control:Z(g.a,{}),label:"Option 1"}),ie=Z(k.a,{value:"option2",control:Z(g.a,{}),label:"Option 2"}),ae=Z(v.a,{htmlFor:"selection"},void 0,"Selection"),ce=Z(m.a,{value:"option1"},void 0,"Option One"),le=Z(m.a,{value:"option2"},void 0,"Option Two"),ue=Z(m.a,{value:"option3"},void 0,"Option Three"),fe=Z(_.a,{component:"label"},void 0,"Toggle Input"),de=Z(k.a,{control:Z(p.Field,{name:"onof",component:I.c}),label:"On/OF Switch"}),se=Z(k.a,{control:Z(p.Field,{name:"checkbox",component:I.a}),label:"Checkbox"}),pe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(a,e);var t,n,o,r=z(a);function a(){return G(this,a),r.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.handleSubmit,o=e.pristine,r=e.reset,a=e.submitting,c=e.init,l=e.clear;return Z("div",{},void 0,Z(w.a,{container:!0,spacing:3,alignItems:"flex-start",direction:"row",justify:"center"},void 0,Z(w.a,{item:!0,xs:12,md:6},void 0,Z(s.a,{className:t.root},void 0,te,ne,Z("div",{className:t.buttonInit},void 0,Z(D.a,{onClick:function(){return c(ee)},color:"secondary",type:"button"},void 0,"Load Sample Data"),Z(D.a,{onClick:function(){return l()},type:"button"},void 0,"Clear Data")),Z("form",{onSubmit:n},void 0,Z("div",{},void 0,i.a.createElement(p.Field,{name:"text",component:I.d,placeholder:"Text Field",label:"Text Field",validate:U,required:!0,ref:this.saveRef,className:t.field})),Z("div",{},void 0,Z(p.Field,{name:"email",component:I.d,placeholder:"Email Field",label:"Email",required:!0,validate:[U,X],className:t.field})),Z("div",{className:t.fieldBasic},void 0,oe,Z(p.Field,{name:"radio",className:t.inlineWrap,component:Q},void 0,re,ie)),Z("div",{},void 0,Z(F.a,{className:t.field},void 0,ae,Z(p.Field,{name:"selection",component:I.b,placeholder:"Selection",autoWidth:!0},void 0,ce,le,ue))),Z("div",{className:t.fieldBasic},void 0,fe,Z("div",{className:t.inlineWrap},void 0,de,se)),Z("div",{className:t.field},void 0,Z(p.Field,{name:"textarea",className:t.field,component:I.d,placeholder:"Textarea",label:"Textarea",multiline:!0,rows:4})),Z("div",{},void 0,Z(D.a,{variant:"contained",color:"secondary",type:"submit",disabled:a},void 0,"Submit"),Z(D.a,{type:"button",disabled:o||a,onClick:r},void 0,"Reset")))))))}}])&&J(t.prototype,n),o&&J(t,o),a}(r.Component),be=Object(p.reduxForm)({form:"immutableExample",enableReinitialize:!0})(pe),me=Object(N.connect)((function(e){return{force:e,initialValues:e.getIn(["initval","formValues"])}}),(function(e){return{init:Object(E.bindActionCreators)($,e),clear:function(){return e(W)}}}))(be),ye=Object(u.withStyles)((function(e){return{root:{flexGrow:1,padding:30},field:{width:"100%",marginBottom:20},fieldBasic:{width:"100%",marginBottom:20,marginTop:10},inlineWrap:{display:"flex",flexDirection:"row"},buttonInit:{margin:e.spacing(4),textAlign:"center"}}}))(me);function ve(e){return(ve="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function he(e,t,n,o){M||(M="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),1===i)t.children=o;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];t.children=a}if(t&&r)for(var l in r)void 0===t[l]&&(t[l]=r[l]);else t||(t=r||{});return{$$typeof:M,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function we(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Oe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ge(e,t){return(ge=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Fe(e);if(t){var r=Fe(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return xe(this,n)}}function xe(e,t){return!t||"object"!==ve(t)&&"function"!==typeof t?je(e):t}function je(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fe(e){return(Fe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _e=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ge(e,t)}(i,e);var t,n,o,r=Se(i);function i(){var e;we(this,i);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return Re(je(e=r.call.apply(r,[this].concat(n))),"state",{valueForm:[]}),e}return t=i,(n=[{key:"showResult",value:function(e){var t=this;setTimeout((function(){t.setState({valueForm:e}),window.alert("You submitted:\n\n".concat(t.state.valueForm))}),500)}},{key:"render",value:function(){var e=this,t=l.a.name+" - Form",n=l.a.desc;return he("div",{},void 0,he(a.Helmet,{},void 0,he("title",{},void 0,t),he("meta",{name:"description",content:n}),he("meta",{property:"og:title",content:t}),he("meta",{property:"og:description",content:n}),he("meta",{property:"twitter:title",content:t}),he("meta",{property:"twitter:description",content:n})),he(f.g,{title:"Redux Form",icon:"ios-list-box-outline",desc:"This is a simple demonstration of how to connect all the standard material-ui form elements to redux-form."},void 0,he("div",{},void 0,he(ye,{onSubmit:function(t){return e.showResult(t)}}),he(f.l,{componentName:"containers/Forms/demos/ReduxFormDemo.js"}))))}}])&&Oe(t.prototype,n),o&&Oe(t,o),i}(i.a.Component);t.default=Object(u.withStyles)({root:{flexGrow:1}})(_e)}}]);