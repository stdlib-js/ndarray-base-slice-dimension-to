"use strict";var v=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var u=v(function(p,o){
var l=require('@stdlib/slice-base-args2multislice/dist'),c=require('@stdlib/slice-ctor/dist'),f=require('@stdlib/ndarray-base-ndims/dist'),q=require('@stdlib/ndarray-base-slice/dist'),g=require('@stdlib/ndarray-base-normalize-index/dist'),w=require('@stdlib/array-base-filled/dist'),s=require('@stdlib/error-tools-fmtprodmsg/dist');function b(i,r,m,t,d){var n,e,a;if(e=f(i),e===0)throw new TypeError(s('nullF7',e));if(a=g(r,e-1),a===-1)throw new RangeError(s('nullF8',e,r));return n=w(null,e),n[a]=new c(m),q(i,l(n),t,d)}o.exports=b
});var h=u();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
