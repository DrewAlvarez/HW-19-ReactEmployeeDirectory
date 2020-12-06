(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{1:function(e){e.exports=JSON.parse('[{"id":1,"firstName":"John","lastName":"Smith","position":"Manager","pay":75000,"department":"Administration","email":"jSmith@test.com"},{"id":2,"firstName":"Martha","lastName":"Wagner","position":"Assistant Manager","pay":45000,"department":"Administration","email":"mWagner@test.com"},{"id":3,"firstName":"Miguel","lastName":"Sanchez","position":"Developer","pay":52700,"department":"Development Team","email":"mSanchez@test.com"},{"id":4,"firstName":"Jamal","lastName":"Crown","position":"Developer","pay":55200,"department":"Development Team","email":"jCrown@test.com"},{"id":5,"firstName":"Claire","lastName":"Rose","position":"Developer","pay":59300,"department":"Development Team","email":"cRose@test.com"},{"id":6,"firstName":"Tianna","lastName":"Maxine","position":"Intern","pay":0,"department":"Administration","email":"tMaxine@test.com"}]')},14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),r=a.n(s),c=a(4),i=a.n(c),l=(a(14),a(15),a(5)),o=a(6),m=a(8),d=a(7);var h=function(){return Object(n.jsx)("nav",{className:"navbar navbar-dark bg-primary",style:{borderRadius:".25rem",marginBottom:"1rem"},children:Object(n.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Employee Directory"})})};var p=function(e){return Object(n.jsx)("div",{className:"col-3",style:{textAlign:"center"},children:Object(n.jsx)("div",{className:"card text-white bg-primary mb-3",children:e.children})})};var j=function(e){return Object(n.jsx)("div",{className:"col-9",children:Object(n.jsxs)("table",{className:"table table-active",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Department"}),Object(n.jsx)("th",{scope:"col",children:"Position"}),Object(n.jsx)("th",{scope:"col",children:"Pay"}),Object(n.jsx)("th",{scope:"col",children:"ID"})]})}),Object(n.jsx)("tbody",{children:e.results.map((function(e){return Object(n.jsxs)("tr",{className:"table-light",children:[Object(n.jsxs)("th",{scope:"row",children:[e.firstName," ",e.lastName]}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.department}),Object(n.jsx)("td",{children:e.position}),Object(n.jsx)("td",{children:e.pay}),Object(n.jsx)("td",{children:e.id})]})}))})]})})},b=a(1);var u=function(e){return Object(n.jsx)("button",{type:"button",className:e.class,onClick:e.handleClick,style:{width:"80%",marginBottom:".5rem"},children:e.empName})},v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={results:[]},e.handleSingleEmployee=function(t){t.preventDefault();var a=t.target.innerHTML,n=[];console.log(a);for(var s=0;s<b.length;s++)"".concat(b[s].firstName," ").concat(b[s].lastName)===a&&n.push(b[s]);e.setState({results:n})},e.handleViewAll=function(t){e.setState({results:b})},e.handleSortPay=function(t){t.preventDefault();for(var a=[],n=0;n<b.length;n++)a.push(b[n]);var s=a.sort((function(e,t){return t.pay-e.pay}));e.setState({results:s})},e.handleAlpha=function(t){t.preventDefault();for(var a=[],n=0;n<b.length;n++)a.push(b[n]);var s=a.sort((function(e,t){var a=e.lastName.toUpperCase(),n=t.lastName.toUpperCase();return a<n?-1:a>n?1:0}));e.setState({results:s})},e.handleDevTeam=function(t){t.preventDefault();for(var a=[],n=0;n<b.length;n++)"Development Team"===b[n].department&&a.push(b[n]);e.setState({results:a})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.handleViewAll()}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{className:"bg-light",children:Object(n.jsxs)("main",{className:"container",style:{paddingTop:"1rem"},children:[Object(n.jsx)(h,{}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)(p,{children:[Object(n.jsx)("div",{className:"card-header",style:{textAlign:"center"},children:"Click for View"}),Object(n.jsxs)("div",{className:"card-body",style:{textAlign:"center"},children:[b.map((function(t){return Object(n.jsx)(u,{empName:"".concat(t.firstName," ").concat(t.lastName),class:"btn btn-secondary",handleClick:e.handleSingleEmployee})})),Object(n.jsx)(u,{empName:"View All",class:"btn btn-primary",handleClick:this.handleViewAll}),Object(n.jsx)(u,{empName:"View Alphabetically",class:"btn btn-primary",handleClick:this.handleAlpha}),Object(n.jsx)(u,{empName:"Sort by Pay",class:"btn btn-primary",handleClick:this.handleSortPay}),Object(n.jsx)(u,{empName:"View Dev Team",class:"btn btn-primary",handleClick:this.handleDevTeam})]})]}),Object(n.jsx)(j,{results:this.state.results})]})]})})}}]),a}(s.Component);var x=function(){return Object(n.jsx)(v,{})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),f()}},[[16,1,2]]]);
//# sourceMappingURL=main.7ea68645.chunk.js.map