(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),s=n.n(c),o=n(10),u=n(1),i=n.n(u),l=n(2),p=n(3),f=n(4),d=n(6),m=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/users/".concat(n,"/role"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19api.com/summary",{headers:{}});case 3:return n=e.sent,e.next=6,n.text();case 6:return a=e.sent,r=JSON.parse(a),e.abrupt("return",r);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/users/add",{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({userId:n.sub,name:n.name,email:n.email,countryId:a})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("users/".concat(n),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),j=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("countries/".concat(n,"/destinations"),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/countries",{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(t,n){var a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/countries/".concat(n),{headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)}});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/countries/".concat(n.id,"/add_destination"),{method:"PATCH",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({destinationId:a})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(t,n,a){var r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/countries/".concat(n.id,"/delete_destination"),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t),"Content-Type":"application/json"},body:JSON.stringify({destinationId:a})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n,a){return e.apply(this,arguments)}}(),g={visitor:{static:["get:countries","get:user_role","get:destinations"]},admin:{static:["delete:destination","get:countries","get:destinations","get:user","get:user_role","post:destination","post:user_preference"]}},x=function(e){return function(e,t,n,a){var r=e[t];if(!r)return!1;var c=r.static;if(c&&c.includes(n))return!0;var s=r.dynamic;if(s){var o=s[n];return!!o&&o(a)}return!1}(g,e.role,e.perform,e.data)?e.yes():e.no()};x.defaultProps={yes:function(){return null},no:function(){return null}};var k=x,S=function(e){var t=e.showDeleteButton,n=e.onDelete,c=Object(a.useContext)(z),s=c.userRole,u=c.destinations;return r.a.createElement("div",null,0!==u.length&&r.a.createElement("ol",{className:"contact-list"},u.map((function(e){return r.a.createElement("li",{key:e.id,className:"destination-list-item"},""!==e.alias&&r.a.createElement("div",{className:"destination-avatar",style:{backgroundImage:"url(https://www.countryflags.io/".concat(e.alias.toLowerCase(),"/shiny/64.png)")}}),r.a.createElement("div",{className:"destination-details"},r.a.createElement(o.b,{to:"/countries/".concat(e.id)}," ",e.name," ")),t&&r.a.createElement(k,{role:s,perform:"delete:destination",yes:function(){return r.a.createElement("button",{onClick:function(){return n(e.id)},className:"destination-remove"},"Remove")},no:function(){return null}}))}))))};function C(e){var t=e.onSubmit,n=Object(d.b)(),c=n.user,s=n.isAuthenticated,o=n.getAccessTokenSilently,u=Object(a.useContext)(z),f=(u.countryId,u.setCountryId),m=u.selectedCountryId,h=u.setSelectedCountryId,b=Object(a.useState)([]),j=Object(p.a)(b,2),E=j[0],O=j[1],w=Object(a.useState)(!1),g=Object(p.a)(w,2),x=g[0],k=g[1];Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,e.next=5,y(t);case 5:n=e.sent,a=n.countries,O(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),Object(a.useEffect)((function(){x&&(f(m),k(!1))}),[x]);var S=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,o();case 3:return n=e.sent,e.next=6,v(n,c,m);case 6:a=e.sent,a.new_user,k(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s&&r.a.createElement("form",{onSubmit:t||S},r.a.createElement("label",null,r.a.createElement("select",{value:m,onChange:function(e){return h(e.target.value)}},E.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id}," ",e.name," ")})))),r.a.createElement("input",{type:"submit",value:"Submit"}))}function A(e){var t=e.country,n=Object(a.useState)(0),c=Object(p.a)(n,2),s=c[0],o=c[1],u=Object(a.useState)(0),f=Object(p.a)(u,2),d=f[0],m=f[1],v=Object(a.useState)(0),b=Object(p.a)(v,2),j=b[0],y=b[1],E=Object(a.useState)(!1),O=Object(p.a)(E,2),w=O[0],g=O[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=9;break}return e.next=3,h(t);case 3:n=e.sent,a=n.Countries.filter((function(e){return e.CountryCode===t.alias})),o(a[0].NewConfirmed),m(a[0].NewDeaths),y(a[0].NewRecovered),g(!0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),w?r.a.createElement("div",null,r.a.createElement("p",null,"New Confirmed: ",s),r.a.createElement("p",null,"New Deaths: ",d),r.a.createElement("p",null,"New Recovered: ",j)):"Loading case data..."}function N(){var e=Object(f.e)().destination_id,t=Object(a.useContext)(z),n=t.userRole,c=(t.countryId,t.setDestinations),s=t.selectedCountryId,u=(t.setSelectedCountryId,Object(d.b)().getAccessTokenSilently),m=Object(a.useState)(null),h=Object(p.a)(m,2),v=h[0],b=h[1],j=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return n=e.sent,e.next=5,w(n,v,t);case 5:a=e.sent,r=a.destinations,c(r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u();case 3:return n=e.sent,e.next=6,O(n,v,s);case 6:a=e.sent,r=a.destinations,c(r);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function t(){return(t=Object(l.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u();case 2:return n=t.sent,t.next=5,E(n,e);case 5:a=t.sent,r=a.country,b(r),c(r.destinations);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,u,c]),v?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"destination-avatar",style:{backgroundImage:"url(https://www.countryflags.io/".concat(v.alias.toLowerCase(),"/shiny/64.png)")}}),r.a.createElement("div",{className:"destination-details"},r.a.createElement("h2",null,v.name),r.a.createElement("h3",null,v.alias),r.a.createElement(A,{country:v}),r.a.createElement("h3",null,"Who can enter ",v.name,"?"),r.a.createElement(S,{showDeleteButton:!0,onDelete:j})),r.a.createElement(o.b,{to:"/",className:"close-add-destination"},"back"),r.a.createElement(k,{role:n,perform:"post:destination",yes:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Add a new destination"),r.a.createElement(C,{onSubmit:y}))},no:function(){return null}}))):r.a.createElement("p",null,"Loading...")}function I(e){var t=Object(d.b)(),n=t.loginWithRedirect;return!t.isAuthenticated&&r.a.createElement("button",{className:"LoginButton",onClick:n},"Log In")}function B(){return r.a.createElement("div",null,r.a.createElement("p",null,"Please log in"),r.a.createElement(I,null))}function D(){var e=Object(a.useContext)(z),t=e.countryId,n=e.setCountryId,c=e.setDestinations,s=Object(d.b)(),o=s.user,u=s.getAccessTokenSilently,f=Object(a.useState)(!1),m=Object(p.a)(f,2),h=m[0],v=m[1],y=Object(a.useState)(!1),E=Object(p.a)(y,2),O=E[0],w=E[1],g=Object(a.useState)(!1),x=Object(p.a)(g,2);x[0],x[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return t=e.sent,e.next=5,b(t,o.sub);case 5:a=e.sent,(r=a.country_id)&&n(r),w(!0);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:return n=e.sent,e.next=5,j(n,t,c);case 5:a=e.sent,r=a.destinations,c(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&(!function(){e.apply(this,arguments)}(),v(!0))}),[t]),r.a.createElement("div",null,O?r.a.createElement("div",null,r.a.createElement("p",null,"Select your country:"),r.a.createElement(C,null)):r.a.createElement("p",null,"Loading..."),h?r.a.createElement(S,{showDeleteButton:!1}):null)}var L=n(21);function T(e){Object(L.a)(e);var t=Object(d.b)(),n=t.isAuthenticated,c=t.getAccessTokenSilently,s=Object(a.useState)([]),u=Object(p.a)(s,2),f=u[0],m=u[1],h=Object(a.useState)(""),v=Object(p.a)(h,2),b=v[0],j=v[1],E=""===b?f:f.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return t=e.sent,e.next=5,y(t);case 5:n=e.sent,a=n.countries,m(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[c]),n&&r.a.createElement("div",null,r.a.createElement("div",{className:"list-countries-top"},r.a.createElement("input",{className:"search-countries",type:"text",placeholder:"Search Country",value:b,onChange:function(e){return j(e.target.value)}})),E.length!==f.length&&r.a.createElement("div",{className:"showing-countries"},r.a.createElement("span",null,"Now showing ",E.length," of ",f.length),r.a.createElement("button",{onClick:function(){!function(e){j(e.trim())}("")}},"Show all")),r.a.createElement("ol",{className:"country-list"},E.map((function(e){return r.a.createElement("li",{key:e.id,className:"destination-list-item"},""!==e.alias&&r.a.createElement("div",{className:"destination-avatar",style:{backgroundImage:"url(https://www.countryflags.io/".concat(e.alias.toLowerCase(),"/shiny/64.png)")}}),r.a.createElement("div",{className:"destination-details"},r.a.createElement(o.b,{to:"/countries/".concat(e.id)}," ",e.name," ")))}))))}function _(e){var t=Object(d.b)(),n=t.logout;return t.isAuthenticated&&r.a.createElement("button",{onClick:function(){return n()}},"Log Out")}var z=Object(a.createContext)({});var J=function(){var e=Object(d.b)(),t=e.user,n=e.isAuthenticated,c=e.getAccessTokenSilently,s=Object(a.useState)([]),u=Object(p.a)(s,2),h=u[0],v=u[1],b=Object(a.useState)(null),j=Object(p.a)(b,2),y=j[0],E=j[1],O=Object(a.useState)(""),w=Object(p.a)(O,2),g=w[0],x=w[1],k=Object(a.useState)(""),S=Object(p.a)(k,2),A=S[0],I=S[1];return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:return n=e.sent,e.next=5,m(n,t.sub);case 5:a=e.sent,r=a.role,I("admin"===r?"admin":"visitor");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]),r.a.createElement("div",null,r.a.createElement(z.Provider,{value:{userRole:A,countryId:y,setCountryId:E,setDestinations:v,destinations:h,user:t,selectedCountryId:g,setSelectedCountryId:x}},r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",null,n?r.a.createElement("div",null,r.a.createElement(o.b,{to:"/countries"},"countries"),r.a.createElement(D,null),r.a.createElement(_,null)):r.a.createElement(B,null))}}),r.a.createElement(f.a,{exact:!0,path:"/login",component:B}),r.a.createElement(f.a,{exact:!0,path:"/select-country",component:C}),r.a.createElement(f.a,{path:"/countries/:destination_id",component:N}),r.a.createElement(f.a,{exact:!0,path:"/countries",component:T})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(39);s.a.render(r.a.createElement(o.a,null,r.a.createElement(d.a,{domain:"dev-j7mi52gx.eu.auth0.com",clientId:"ZZlb6ph1nmJIjdFtk5kDShQ1UiP3bAcZ",redirectUri:window.location.origin,audience:"myApi",callbackUrl:"http://localhost:3000/callback"},r.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.19d436a2.chunk.js.map