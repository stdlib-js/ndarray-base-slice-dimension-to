"use strict";var v=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(n){throw (r=0, n)}};};var m=v(function(p,u){
var l=require('@stdlib/slice-base-args2multislice/dist'),c=require('@stdlib/slice-ctor/dist'),q=require('@stdlib/ndarray-base-ndims/dist'),f=require('@stdlib/ndarray-base-slice/dist'),g=require('@stdlib/ndarray-base-normalize-index/dist'),w=require('@stdlib/array-base-nulls/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function b(i,r,n,t,d){var a,e,s;if(e=q(i),e===0)throw new TypeError(o('1lFF7',e));if(s=g(r,e-1),s===-1)throw new RangeError(o('1lFF8',e,r));return a=w(e),a[s]=new c(n),f(i,l(a),t,d)}u.exports=b
});var h=m();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
