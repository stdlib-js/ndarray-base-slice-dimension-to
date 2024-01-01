// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-base-args2multislice@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/slice-ctor@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndims@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-normalize-index@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-filled@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function m(m,o,a,l,j){var h,v,b;if(0===(v=i(m)))throw new TypeError(d("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",v));if(-1===(b=r(o,v-1)))throw new RangeError(d("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",v,o));return(h=t(null,v))[b]=new s(a),n(m,e(h),l,j)}export{m as default};
//# sourceMappingURL=index.mjs.map
