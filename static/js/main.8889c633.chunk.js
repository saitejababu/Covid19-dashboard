(this.webpackJsonpcovid19_dashboard=this.webpackJsonpcovid19_dashboard||[]).push([[0],{114:function(e,t,a){e.exports=a(224)},119:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},126:function(e,t,a){},222:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(119),a(71)),s=a(20),i=a.n(s),u=a(32),d=a(14),m=(a(121),a(101)),h=a(262),f=a(265),p=a(266);a(122);var v=function(e){var t=e.title,a=e.cases,n=e.active,c=e.total,o=e.isRed,l=Object(m.a)(e,["title","cases","active","total","isRed"]);return r.a.createElement(h.a,{item:!0,xs:12,md:3,onClick:l.onClick,className:"infoBox ".concat(n&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(f.a,null,r.a.createElement(p.a,{className:"infoBox__title",color:"textSecondary",gutterBottom:!0},t),r.a.createElement(p.a,{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green"),variant:"h5",component:"h1"},a),r.a.createElement(p.a,{className:"infoBox__total",variant:"body1",component:"p"},c," Total Cases")))};a(126);var b=function(e){var t=e.countries,a=e.info;return console.log(t),console.log(a.country),a.country?a.country?r.a.createElement("div",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"sticky-column"},"Name"),r.a.createElement("th",{className:"sticky-column"},"Total Cases"),r.a.createElement("th",{className:"sticky-column"},"Active Cases"),r.a.createElement("th",{className:"sticky-column"},"Critical Cases"),r.a.createElement("th",{className:"sticky-column"},"Recovered Cases"),r.a.createElement("th",{className:"sticky-column"},"Deaths"),r.a.createElement("th",{className:"sticky-column"},"Tests Performed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",a.country))),r.a.createElement("td",null,a.cases),r.a.createElement("td",null,a.active),r.a.createElement("td",null,a.critical),r.a.createElement("td",null,a.recovered),r.a.createElement("td",null,a.deaths),r.a.createElement("td",null,a.tests)))):void 0:r.a.createElement("div",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"sticky-column"},"Name"),r.a.createElement("th",{className:"sticky-column"},"Total Cases"),r.a.createElement("th",{className:"sticky-column"},"Active Cases"),r.a.createElement("th",{className:"sticky-column"},"Critical Cases"),r.a.createElement("th",{className:"sticky-column"},"Recovered Cases"),r.a.createElement("th",{className:"sticky-column"},"Deaths"),r.a.createElement("th",{className:"sticky-column"},"Tests Performed"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,!a.country&&r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("img",{src:"/public/images/globe_img.jpg",alt:"",width:"50px",height:"40px"}),r.a.createElement("div",{style:{marginTop:10}}," \xa0\xa0\xa0\xa0\xa0Global"))),a.country&&r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(a.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",a.country))),r.a.createElement("td",null,a.cases),r.a.createElement("td",null,a.active),r.a.createElement("td",null,a.critical),r.a.createElement("td",null,a.recovered),r.a.createElement("td",null,a.deaths),r.a.createElement("td",null,a.tests)),t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("div",{className:"div__flag"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.countryInfo.flag,")"),width:60,height:40,backgroundSize:"cover",borderRadius:5,marginTop:5}}),r.a.createElement("div",{style:{marginTop:10}},"\xa0\xa0\xa0",e.country))),r.a.createElement("td",null,e.cases),r.a.createElement("td",null,e.active),r.a.createElement("td",null,e.critical),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.deaths),r.a.createElement("td",null,e.tests))}))))},g=a(100),E=a(16),y=a.n(E),C=a(277),k=a(278),N={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},_=function(e){var t=Object(g.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},j=function(e,t){var a=e.toUpperCase(),n=0;return t.map((function(e){return a!==e.name.toUpperCase()&&a!==e.value||(n=1),0})),n},O=function(e){return e?"+ ".concat(y()(e).format("0.0a")):"No New Cases "},w=a(21),x={legend:{display:!1},elements:{point:{radius:0}},title:{display:!0,text:"World Wide Cases",fontSize:15},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},S=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var I=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(d.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=210").then((function(e){return e.json()})).then((function(e){var a=S(e,t);l(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,"cases"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},height:500,width:1e3,options:x}),"recovered"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"lightgreen",data:o}]},height:500,width:1e3,options:x}),"deaths"===t&&(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},height:500,width:1e3,options:x}))},T={legend:{display:!1},elements:{point:{radius:0}},title:{display:!0,text:"New Cases data",fontSize:15},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return y()(e).format("0a")}}}]}},D=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var R=function(e){var t=e.casesType,a=e.country,c=Object(n.useState)({}),o=Object(d.a)(c,2),l=o[0],s=o[1];return console.log(a),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://disease.sh/v3/covid-19/historical/".concat(a,"?lastdays=210"),e.next=3,fetch(n).then((function(e){return e.json()})).then((function(e){if(e.timeline){var a=D(e.timeline,t);s(a)}}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,a]),r.a.createElement("div",null,"cases"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:l}]},height:500,width:1e3,options:T}),"recovered"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"lightgreen",data:l}]},height:500,width:1e3,options:T}),"deaths"===t&&(null===l||void 0===l?void 0:l.length)>0&&r.a.createElement(w.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:l}]},height:500,width:1e3,options:T}))};var B=function(e){var t=e.info;return r.a.createElement("div",{className:"app__Chart"},r.a.createElement(w.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"cases",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.cases,t.recovered,t.deaths]}]},options:{legend:{display:!1},title:{display:!0,text:"Total Covid Cases in  "+t.country,fontSize:15},gridLines:{display:!1}}}),"\xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0 \xa0\xa0",r.a.createElement(w.Pie,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.cases,t.recovered,t.deaths]}]},options:{legend:{display:!0}},height:"130%"}))},z=a(279),M=a(280);a(222);var L=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(z.a,{center:n,zoom:c},r.a.createElement(M.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:N[t].hex,fillColor:N[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*N[t].multiplier,onMouseOver:function(e){e.target.openPopup()},onMouseOut:function(e){e.target.closePopup()}},r.a.createElement(k.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",y()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",y()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",y()(e.deaths).format("0,0")))))}))}(t,a)))},A=(a(223),a(275)),P=a(276),G=a(273),q=a(267),F=a(268),W=a(269),Y=a(270),J=a(271),U=a(272);var V=function(){return r.a.createElement("div",null,r.a.createElement(q.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement(F.a,{size:36,round:!0})),r.a.createElement(W.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement(Y.a,{size:36,round:!0})),r.a.createElement(J.a,{url:"https://saitejababu.github.io/Covid19-dashboard",quote:"Check out the new covid tracker",hashtag:"#Covid19_Dashboard",className:"socialMediaButton"},r.a.createElement(U.a,{size:36,round:!0})))},$=a(274);function H(){window.location.reload(!1)}var K=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(d.a)(o,2),m=s[0],h=s[1],f=Object(n.useState)([]),p=Object(d.a)(f,2),g=p[0],E=p[1],C=Object(n.useState)([]),k=Object(d.a)(C,2),N=k[0],w=k[1],x=Object(n.useState)([]),S=Object(d.a)(x,2),T=S[0],D=S[1],z=Object(n.useState)("cases"),M=Object(d.a)(z,2),q=M[0],F=M[1],W=Object(n.useState)([34.80746,20.4796]),Y=Object(d.a)(W,2),J=Y[0],U=Y[1],K=Object(n.useState)(2.4),Q=Object(d.a)(K,2),X=Q[0],Z=Q[1],ee=Object(n.useState)("map"),te=Object(d.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)("display"),ce=Object(d.a)(re,2),oe=ce[0],le=ce[1],se=Object(n.useState)("line"),ie=Object(d.a)(se,2),ue=ie[0],de=ie[1],me=Object(n.useState)(!0),he=Object(d.a)(me,2),fe=he[0],pe=he[1],ve=Object(n.useState)(!1),be=Object(d.a)(ve,2),ge=be[0],Ee=be[1],ye=Object(n.useState)(!1),Ce=Object(d.a)(ye,2),ke=Ce[0],Ne=Ce[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){h(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2,flag:e.countryInfo.flag}})),a=_(e);E(t),w(e),D(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var _e=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a||t.target.value,le("countryDisplay"),de("bar/pie"),0!==j(n,g)){e.next=9;break}alert("No country data found"),H(),e.next=12;break;case 9:return r="https://disease.sh/v3/covid-19/countries/".concat(n),e.next=12,fetch(r).then((function(e){return e.json()})).then((function(e){c(n),h(e);var t=e.countryInfo.lat,a=e.countryInfo.long;U([0,0]),Z(4),t&&a&&(U([t,a]),Z(4))}));case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),je=fe?"showBlue":"showGrey",Oe=ge?"showBlue":"showGrey",we=ke?"showBlue":"showGrey";return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__header"},r.a.createElement("div",{className:"app__logo"},r.a.createElement(G.a,{title:"Click here to refresh page",placement:"right",arrow:!0},r.a.createElement("img",{src:"/public/images/covid_logo.jpg",onClick:H,alt:""}))),r.a.createElement("div",{className:"search__box"},r.a.createElement(P.a,{className:"app_CountrySelector",freeSolo:!0,id:"free-solo-2-demo",disableClearable:!0,onChange:function(e,t){return _e(e,t.name)},options:g.map((function(e){return e})),getOptionLabel:function(e){return e.name},renderOption:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement($.a,{style:{backgroundImage:"url(".concat(e.flag,")"),backgroundSize:"cover",width:50,height:35,borderRadius:5}}),"\xa0\xa0\xa0\xa0 ",e.name)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(n.Fragment,null,r.a.createElement(A.a,Object.assign({},e,{label:"Search by Country",margin:"none",variant:"outlined",InputProps:Object(l.a)(Object(l.a)({},e.InputProps),{},{type:"search"})})))}})),r.a.createElement("div",{className:"app__icons"},r.a.createElement(V,null))," "),r.a.createElement("div",{className:"app__info"},"display"===oe&&r.a.createElement("div",{className:"country__info"},r.a.createElement("p",null,"Coronavirus Disease (COVID-19) Dashboard")),"countryDisplay"===oe&&m.countryInfo&&m.countryInfo.flag&&r.a.createElement("div",{className:"country__info"},r.a.createElement("img",{src:"/public/images/globe_img.jpg",alt:"",width:"50px",height:"40px"}),"\xa0\xa0Global \xa0\xa0 >  \xa0\xa0",r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(m.countryInfo.flag,")"),width:50,height:35,borderRadius:5}}),"\xa0\xa0",m.country),r.a.createElement("div",{className:"view__selector"},r.a.createElement("button",{className:je,onClick:function(){ne("map"),pe(!0),Ne(!1),Ee(!1)}},"Map view"),r.a.createElement("button",{className:Oe,onClick:function(){ne("table"),Ee(!0),Ne(!1),pe(!1)}},"Table view"),r.a.createElement("button",{className:we,onClick:function(){ne("graph"),Ne(!0),pe(!1),Ee(!1)}},"Chart view"))),r.a.createElement("div",{className:"app__body"},r.a.createElement("div",{className:"app__stats"},r.a.createElement(v,{onClick:function(e){return F("cases")},isRed:!0,active:"cases"===q,title:"Infected",cases:O(m.todayCases),total:y()(m.cases).format("0.0a")}),r.a.createElement(v,{onClick:function(e){return F("recovered")},active:"recovered"===q,title:"Recovered",cases:O(m.todayRecovered),total:y()(m.recovered).format("0.0a")}),r.a.createElement(v,{onClick:function(e){return F("deaths")},isRed:!0,active:"deaths"===q,title:"Deaths",cases:O(m.todayDeaths),total:y()(m.deaths).format("0.0a")})),"map"===ae&&r.a.createElement("div",{className:"app__map"},r.a.createElement(L,{countries:N,casesType:q,center:J,zoom:X})),"table"===ae&&r.a.createElement("div",{className:"app__table"},r.a.createElement(b,{countries:T,info:m})),"graph"===ae&&r.a.createElement("div",null,"bar/pie"===ue&&r.a.createElement("div",{className:"both__display"},r.a.createElement("div",{className:"app__bar"},r.a.createElement(R,{casesType:q,country:a})),r.a.createElement("div",{className:"app__bar"},r.a.createElement(B,{info:m}))),"line"===ue&&r.a.createElement("div",{className:"app__chart"},r.a.createElement(I,{casesType:q}))))," ")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[114,1,2]]]);
//# sourceMappingURL=main.8889c633.chunk.js.map