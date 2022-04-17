"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[9],{9:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,o,c=t(885),u=t(168),s=t(2499),p=s.Z.div(r||(r=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),f=s.Z.form(a||(a=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),d=s.Z.button(i||(i=(0,u.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.2;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  background: #3f51b5;\n  :hover {\n    opacity: 0.7;\n  }\n"]))),l=s.Z.input(o||(o=(0,u.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n"]))),b=t(184);function h(n){var e=n.handleSetQuery,t=n.handleSubmit,r=n.value;return(0,b.jsx)(p,{children:(0,b.jsxs)(f,{onSubmit:t,children:[(0,b.jsx)(l,{placeholder:"movie name",onChange:e,value:r}),(0,b.jsx)(d,{type:"submit",children:"Search"})]})})}var x=t(2791),g=t(501),v=t(8183),m=t(7204);function y(){var n=(0,x.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,x.useState)(""),i=(0,c.Z)(a,2),o=i[0],u=i[1],s=(0,g.lr)({}),p=(0,c.Z)(s,2),f=p[0],d=p[1],l=f.get("query");(0,x.useEffect)((function(){l&&((0,v.gH)(l).then((function(n){return r(n)})),u(l))}),[l]);return(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"Search Movies"}),(0,b.jsx)(h,{handleSetQuery:function(n){u(n.target.value)},handleSubmit:function(n){n.preventDefault(),d({query:o}),(0,v.gH)(o).then((function(n){return r(n)}))},value:o}),(0,b.jsx)(m.Z,{movies:t})]})}},7204:function(n,e,t){t.d(e,{Z:function(){return d}});var r,a,i=t(501),o=t(6871),c=t(168),u=t(2499),s=u.Z.ul(r||(r=(0,c.Z)(["\n  ","\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),""),p=u.Z.li(a||(a=(0,c.Z)(["\ntext-decoration: none;\n margin-right: 30px;\n margin-top: 10px;\n  text-align: start;\n  font-size: 16px;\n   font-family:Verdana, Geneva, Tahoma, sans-serif\n  border-radius: 2px;\n\n"]))),f=t(184);function d(n){var e=n.movies,t=(0,o.TH)();return(0,f.jsx)(s,{children:e.map((function(n){return(0,f.jsx)(p,{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(n.id),state:{from:t},children:n.title})},n.id)}))})}},8183:function(n,e,t){t.d(e,{HI:function(){return s},IQ:function(){return d},Tn:function(){return f},e2:function(){return u},gH:function(){return p}});var r=t(5861),a=t(7757),i=t.n(a),o=t(4569),c=t.n(o);c().defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/day?page=1&api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc");case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/search/movie?api_key=b2e625c7bfa1b5b54460e1c069c61bdc&query=".concat(e,"\n"));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/reviews?api_key=\nb2e625c7bfa1b5b54460e1c069c61bdc&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(e,"/credits?api_key=\n4867f71c2cc3334fef3a71f8c4706576&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=9.38bbfa53.chunk.js.map