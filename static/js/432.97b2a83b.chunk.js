"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[432],{174:function(n,t,e){e.d(t,{O:function(){return f}});var r,a,i=e(168),u=e(444),c=e(87),o=(0,u.ZP)(c.OL)(r||(r=(0,i.Z)(["\npadding: 5px 10px;\nborder-radius: 5px;\ntext-decoration: none;\n"]))),s=u.ZP.ul(a||(a=(0,i.Z)(["\nlist-style: none;\ndisplay: flex;\nflex-direction: column;\n"]))),p=e(184),f=function(n){var t=n.movies,e=n.location;return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)("li",{children:(0,p.jsx)(o,{to:"/movies/".concat(t),state:{from:e},children:r})},t)}))})}},432:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,i,u=e(861),c=e(439),o=e(757),s=e.n(o),p=e(347),f=e(174),l=e(168),d=e(444),h=d.ZP.form(r||(r=(0,l.Z)(["\ndisplay: flex;\n"]))),v=d.ZP.input(a||(a=(0,l.Z)(["\nwidth: 200px;\nheight: 30px;\n"]))),m=d.ZP.button(i||(i=(0,l.Z)(["\n\tdisplay: inline-flex;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: transparent;\n\tcursor: pointer;\n\toutline: none;\n\ttransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\t:hover {\n   \topacity: 1;\n\t}\n"]))),x=e(184),y=function(n){var t=n.onSubmit;return(0,x.jsxs)(h,{onSubmit:t,children:[(0,x.jsx)(v,{name:"search",type:"text",autoComplete:"off",placeholder:"Enter movie name"}),(0,x.jsx)(m,{children:"Search"})]})},Z=e(791),g=e(87),w=e(689),b=function(){var n,t=(0,Z.useState)([]),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,Z.useState)(!1),o=(0,c.Z)(i,2),l=o[0],d=o[1],h=(0,g.lr)(),v=(0,c.Z)(h,2),m=v[0],b=v[1],_=null!==(n=null===m||void 0===m?void 0:m.get("query"))&&void 0!==n?n:"",k=(0,w.TH)();(0,Z.useEffect)((function(){if(""!==_){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,d(!0),n.next=4,(0,p.qF)(_);case 4:t=n.sent,e=t.results.map((function(n){return{id:n.id,original_title:n.original_title}})),a(e),0===t.total_results&&alert("We did not find anything"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),alert("Something went wrong");case 13:return n.prev=13,d(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[l,_]);return(0,x.jsxs)("main",{children:[l&&(0,x.jsx)("p",{children:"Loading..."}),(0,x.jsx)(y,{onSubmit:function(n){n.preventDefault();var t=n.target.search.value;""===t.trim()&&alert("No results"),b({query:t.toLowerCase()}),n.currentTarget.reset()}}),r&&(0,x.jsx)(f.O,{movies:r,location:k})]})}},347:function(n,t,e){e.d(t,{BX:function(){return s},Qw:function(){return v},qF:function(){return f},s8:function(){return d},yJ:function(){return x}});var r=e(861),a=e(757),i=e.n(a),u=e(263),c="ee94c28793e897f5ab3e42b6b141640f";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o={params:{language:"en-US"}};function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(){var t,e,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="trending/movie/day?api_key=".concat(c),n.next=3,u.Z.get(t);case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="search/movie?api_key=".concat(c,"&query=").concat(t),n.next=3,u.Z.get(e,o);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"?api_key=").concat(c),n.next=3,u.Z.get(e,o);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="movie/".concat(t,"/credits?api_key=").concat(c),n.next=3,u.Z.get(e,o);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(t){var e,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="review/".concat(t,"?api_key=").concat(c),n.next=3,u.Z.get(e,o);case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=432.97b2a83b.chunk.js.map