(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a.n(c),i=a(2),r=a(1),l=(a(10),a(3)),s=a.n(l);function o(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var j=a(0),d=function(e){var t=e.total,a=e.perPage,c=e.currentPage,n=e.startItem,i=e.endItem,r=e.onPageChange,l=Math.ceil(t/a),d=o(1,l),b=o(n,i);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:s()("page-item",{disabled:1===c}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,onClick:function(){1!==c&&r(c-1)},children:"\xab"})}),d.map((function(e){return Object(j.jsx)("li",{className:s()("page-item",{active:e===c}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return r(e)},children:e})},e)})),Object(j.jsx)("li",{className:s()("page-item",{disabled:c===l}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===l,onClick:function(){c!==l&&r(c+1)},children:"\xbb"})})]}),Object(j.jsx)("ul",{children:b.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})},b=function(){var e=Object(r.useState)(5),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],b=Object(r.useState)(1),u=Object(i.a)(b,2),h=u[0],m=u[1],p=Object(r.useState)(5),O=Object(i.a)(p,2),g=O[0],x=O[1];return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(h," - ").concat(g," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){var t=+e.target.value;c(t),o(1),m(1),x(t)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:a,currentPage:s,onPageChange:function(e){o(e),m(a*e+1-a),x(Math.min(42,a*e))},startItem:h,endItem:g})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1a4cb84b.chunk.js.map