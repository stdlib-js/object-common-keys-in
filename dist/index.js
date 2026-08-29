"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var u=v(function(p,o){"use strict";var g=require("@stdlib/utils-keys-in"),f=require("@stdlib/assert-has-property");function m(){var e,r,a,s,n,i,t;if(e=arguments.length,e<2)throw new Error("insufficient arguments. Must provide at least two objects.");for(r=g(arguments[0]),n=r.length,i=1;i<e;i++){for(a=arguments[i],s=0,t=0;t<n;t++)f(a,r[t])&&(r[s]=r[t],s+=1);n=s}return r.length=n,r}o.exports=m});var c=u();module.exports=c;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
