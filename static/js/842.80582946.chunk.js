"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{786:function(t,e,n){n.d(e,{Bt:function(){return d},Tg:function(){return i},Y5:function(){return l},h6:function(){return p},y:function(){return m}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="e32606210989f5ad28c9406f2323d1f2";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e,n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data,r=n.results,t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},842:function(t,e,n){n.r(e);var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(791),i=n(786),o=n(38),p=n(689),f=n(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],l=(0,p.TH)();return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.Tg)();case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,f.jsx)(o.e,{movies:n,location:l})}},38:function(t,e,n){n.d(e,{e:function(){return s}});var r=n(689),a=n(87),c={list:"home_list__H1Xm-",poster:"home_poster__G9a7q",item:"home_item__jriNW"},u=n(184),s=function(t){var e=t.movies,n=(0,r.TH)();return(0,u.jsx)("ul",{className:c.list,children:e&&e.map((function(t){var e=t.id,r=t.poster_path,s=t.title;return(0,u.jsxs)(a.rU,{to:"/movies/".concat(e),state:{from:n},className:c.item,children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:s,className:c.poster}),(0,u.jsx)("h3",{className:c.title,children:s})]},e)}))})}}}]);
//# sourceMappingURL=842.80582946.chunk.js.map