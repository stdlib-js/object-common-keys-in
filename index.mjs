// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys-in@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-property@v0.2.3-esm/index.mjs";function e(){var e,n,o,i,d,l,m;if((e=arguments.length)<2)throw new Error(t("null1b"));for(d=(n=r(arguments[0])).length,l=1;l<e;l++){for(o=arguments[l],i=0,m=0;m<d;m++)s(o,n[m])&&(n[i]=n[m],i+=1);d=i}return n.length=d,n}export{e as default};
//# sourceMappingURL=index.mjs.map
