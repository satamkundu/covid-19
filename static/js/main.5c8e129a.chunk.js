(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{113:function(e,a,t){},116:function(e,a,t){},209:function(e,a,t){},210:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),l=t(9),d=t.n(l),u=t(16),s=t(36),i=t(75),m=t(14),p=(t(92),t(76)),f=t.n(p),A=t(77),E=t.n(A),g=t(17),v=t.n(g),h=t(231),y=t(236),b=t(232),k=t(233),I=t(39),J=t.n(I),C=(t(113),function(e){return 0===e.data.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12,md:3,component:y.a,className:"card infected",style:{padding:"0px"}},r.a.createElement(b.a,null,r.a.createElement(k.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(k.a,{variant:"h5",component:"h2"},r.a.createElement(J.a,{start:0,end:e.data.confirmed.value,duration:2.75,separator:","})),r.a.createElement(k.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(k.a,{variant:"body2",component:"p"},"Number of active cases of COVID-19."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:y.a,className:"card recovered",style:{padding:"0px"}},r.a.createElement(b.a,null,r.a.createElement(k.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(k.a,{variant:"h5",component:"h2"},r.a.createElement(J.a,{start:0,end:e.data.recovered.value,duration:2.75,separator:","})),r.a.createElement(k.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(k.a,{variant:"body2",component:"p"},"Number of recoveries from COVID-19."))),r.a.createElement(h.a,{item:!0,xs:12,md:3,component:y.a,className:"card deaths",style:{padding:"0px"}},r.a.createElement(b.a,null,r.a.createElement(k.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(k.a,{variant:"h5",component:"h2"},r.a.createElement(J.a,{start:0,end:e.data.deaths.value,duration:2.75,separator:","})),r.a.createElement(k.a,{color:"textSecondary"},new Date(e.data.lastUpdate).toDateString()),r.a.createElement(k.a,{variant:"body2",component:"p"},"Number of deaths caused by COVID-19."))))))}),x=t(237),w=t(235),S=(t(116),function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],o=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://covid19.mathdro.id/api/countries");case 2:a=e.sent,o(a.data.countries);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:"formControl"},r.a.createElement(w.a,{defaultValue:"",onChange:function(a){e.handleCountryChange(a.target.value)}},r.a.createElement("option",{value:""},"Global"),c.map((function(e,a){return r.a.createElement("option",{key:a,value:e.name},e.name)})))))}),U=t(49),O=(t(209),function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),c=t[0],o=t[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://covid19.mathdro.id/api/daily");case 2:a=e.sent,o(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=e.data.confirmed?r.a.createElement(U.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[e.data.confirmed.value,e.data.recovered.value,e.data.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current Country in ".concat(e.country)}}}):null,s=c.length?r.a.createElement(U.b,{data:{labels:c.map((function(e){return e.reportDate})),datasets:[{data:c.map((function(e){return e.confirmed.total})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:c.map((function(e){return e.deaths.total})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-chart"},e.country?l:s))}),j=t(234),D=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),l=Object(m.a)(o,2),p=l[0],A=l[1],g=r.a.useState({checkedA:!1,checkedB:!0}),h=Object(m.a)(g,2),y=h[0],b=h[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==p){e.next=6;break}return e.next=3,v.a.get("https://covid19.mathdro.id/api/");case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,v.a.get("https://covid19.mathdro.id/api/countries/".concat(p));case 8:e.t0=e.sent;case 9:a=e.t0,console.log(a.data),c(a.data);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[p]);var k=function(){var e=Object(u.a)(d.a.mark((function e(a){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:A(a);case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container-top"},r.a.createElement("img",{className:"image",src:y.checkedA?E.a:f.a,alt:"Covid-19"}),r.a.createElement(j.a,{checked:y.checkedA,onChange:function(e){b(Object(i.a)({},t,Object(s.a)({},e.target.name,e.target.checked))),y.checkedA?document.body.style.backgroundColor="white":document.body.style.backgroundColor="#303030"},name:"checkedA"})),r.a.createElement(C,{data:t}),r.a.createElement(S,{handleCountryChange:k}),r.a.createElement(O,{data:t,country:p})))},N=function(){return r.a.createElement(D,null)};o.a.render(r.a.createElement(N,null),document.getElementById("root"))},76:function(e,a,t){e.exports=t.p+"static/media/image.d7265326.png"},77:function(e,a){e.exports="data:image/png;base64,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"},86:function(e,a,t){e.exports=t(210)},92:function(e,a,t){}},[[86,1,2]]]);
//# sourceMappingURL=main.5c8e129a.chunk.js.map