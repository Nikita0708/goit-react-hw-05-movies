"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[351],{786:function(e,t,n){n.d(t,{Bt:function(){return m},Tg:function(){return i},Y5:function(){return l},h6:function(){return p},y:function(){return v}});var r=n(861),a=n(757),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="e32606210989f5ad28c9406f2323d1f2";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,n=t.data,r=n.results,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},351:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(861),a=n(439),c=n(757),u=n.n(c),s=n(786),i=n(791),o=n(689),p={content:"review_content__RYTiI",list:"review_list__8nELk"},f=n(184),l=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1],l=(0,o.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Bt)(Number(l));case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[l]),(0,f.jsx)("div",{children:0!==n.length?(0,f.jsx)("ul",{className:p.list,children:n&&n.map((function(e){var t=e.content,n=e.author_details,r=e.id;return(0,f.jsxs)("li",{className:p.item,children:[(0,f.jsxs)("p",{className:p.author,children:["Author:"," ",n.name?n.name:"Anonymous"]}),(0,f.jsxs)("p",{className:p.rating,children:["Rating: ",n.rating]}),(0,f.jsx)("p",{className:p.content,children:t})]},r)}))}):(0,f.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=351.e85d4537.chunk.js.map