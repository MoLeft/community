(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-form/u-form"],{"286a":function(t,e,n){},"2bb5":function(t,e,n){"use strict";n.r(e);var r=n("3c05"),u=n("ba56");for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);n("42f5");var o,f=n("f0c5"),a=Object(f["a"])(u["default"],r["b"],r["c"],!1,null,"ed4ab0f6",null,!1,r["a"],o);e["default"]=a.exports},"3c05":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"42f5":function(t,e,n){"use strict";var r=n("286a"),u=n.n(r);u.a},ba56:function(t,e,n){"use strict";n.r(e);var r=n("f7b2"),u=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=u.a},f7b2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-form",props:{model:{type:Object,default:function(){return{}}},errorType:{type:Array,default:function(){return["message","toast"]}},borderBottom:{type:Boolean,default:!0},labelPosition:{type:String,default:"left"},labelWidth:{type:[String,Number],default:90},labelAlign:{type:String,default:"left"},labelStyle:{type:Object,default:function(){return{}}}},provide:function(){return{uForm:this}},data:function(){return{rules:{}}},created:function(){this.fields=[];var t=this;this.$on("on-form-item-add",(function(e){e&&t.fields.push(e)})),this.$on("on-form-item-remove",(function(e){e.prop&&t.fields.splice(t.fields.indexOf(e),1)}))},methods:{setRules:function(t){this.rules=t},resetFields:function(){this.fields.map((function(t){t.resetField()}))},validate:function(t){var e=this;return new Promise((function(n){var r=!0,u=0,i=[];e.fields.map((function(o){o.validation("",(function(o){o&&(r=!1,i.push(o)),++u===e.fields.length&&(n(r),-1===e.errorType.indexOf("none")&&e.errorType.indexOf("toast")>=0&&i.length&&e.$u.toast(i[0]),"function"==typeof t&&t(r))}))}))}))}}};e.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-form/u-form-create-component',
    {
        'uview-ui/components/u-form/u-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2bb5"))
        })
    },
    [['uview-ui/components/u-form/u-form-create-component']]
]);