"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[464],{464:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,a,i,c,o=t(861),u=t(439),s=t(757),l=t.n(s),p=t(140),f=t(634),m=t(168),h=t(444),d=h.ZP.form(r||(r=(0,m.Z)(["\nmargin-top: 30px;\n\n"]))),x=h.ZP.label(a||(a=(0,m.Z)(["\n"]))),g=h.ZP.button(i||(i=(0,m.Z)(["\ncursor: pointer;\nbackground-color: orange;\ncolor: white;\nborder: none;\nheight: 35px;\nborder-radius: 4px;\nmargin-left: 10px;\ntransition: background-color 250ms linear;\n&:hover{\n\tbackground-color: blue;\n}\n"]))),b=h.ZP.input(c||(c=(0,m.Z)(["\npadding-left: 10px;\nwidth: 30%;\nheight: 30px;\n@media screen and (max-width: 980px){\n\twidth: 60%;\n}\n"]))),v=t(184),Z=function(n){var e=n.onSubmit;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(f.W,{children:(0,v.jsxs)(d,{onSubmit:function(n){n.preventDefault(),e(n.currentTarget.name.value),n.currentTarget.name.value=""},children:[(0,v.jsx)(x,{children:(0,v.jsx)(b,{autoComplete:"off",type:"text",name:"name",placeholder:"search",className:"input"})}),(0,v.jsx)(g,{type:"submit",children:"Search"})]})})})},k=t(791),y=t(966),_=t(87),j=(0,k.lazy)((function(){return t.e(65).then(t.bind(t,65))})),w=function(){var n=(0,_.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,k.useState)([]),i=(0,u.Z)(a,2),c=i[0],s=i[1],m=t.get("query");(0,k.useEffect)((function(){function n(){return(n=(0,o.Z)(l().mark((function n(){var e,t;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.gH)(m);case 3:if(e=n.sent,t=e.data.results,console.log(t),0!==t.length){n.next=8;break}return n.abrupt("return",alert("No mathces please enter correct name"));case 8:s(t),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))).apply(this,arguments)}m&&function(){n.apply(this,arguments)}()}),[m]);return(0,v.jsx)("main",{children:(0,v.jsxs)(f.W,{children:[(0,v.jsx)(Z,{onSubmit:function(n){if(""===n)return alert("the field is empty");r({query:"".concat(n)}),s([])}}),(0,v.jsx)(k.Suspense,{fallback:(0,v.jsx)(y.a,{})}),(0,v.jsx)(j,{trandingFilms:c})]})})}},140:function(n,e,t){t.d(e,{E1:function(){return u},S:function(){return c},SM:function(){return o},V0:function(){return i},gH:function(){return s}});var r=t(912),a="45e036602b450491912e4761702a27c4";function i(){return(0,r.Z)("trending/movie/day",{params:{api_key:a}})}function c(n){return(0,r.Z)("movie/".concat(n,"/credits"),{params:{api_key:a}})}function o(n){return(0,r.Z)("movie/".concat(n,"/reviews"),{params:{api_key:a}})}function u(n){return(0,r.Z)("movie/".concat(n),{params:{api_key:a}})}function s(n){return(0,r.Z)("search/movie?&query=".concat(n),{params:{api_key:a}})}r.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=464.54f87d44.chunk.js.map