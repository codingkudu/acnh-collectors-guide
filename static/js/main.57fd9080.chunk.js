(this["webpackJsonpacnh-collectors-guide"]=this["webpackJsonpacnh-collectors-guide"]||[]).push([[0],{10:function(e,t,n){e.exports={FishCard:"FishCard_FishCard__1Tie_",row:"FishCard_row__1EYXn",details:"FishCard_details__1xIzH"}},13:function(e,t,n){e.exports={AcnhHeader:"AcnhHeader_AcnhHeader__hfl5w"}},14:function(e,t,n){e.exports={Settings:"Settings_Settings__3JhjC",container:"Settings_container__NFx3P",h4:"Settings_h4__2A09Q"}},26:function(e,t,n){e.exports={FishGuide:"FishGuide_FishGuide__1gxYT"}},28:function(e,t,n){e.exports={"App-link":"Footer_App-link__1a16Z"}},33:function(e,t,n){},34:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var i,a=n(0),r=n.n(a),s=n(8),c=n.n(s),d=(n(33),n(9)),o=(n(34),n(64)),h=n(13),l=n.n(h),j=n(1),u=function(){return Object(j.jsx)("div",{className:l.a.AcnhHeader,"data-testid":"AcnhHeader",children:Object(j.jsx)(o.a,{className:l.a.nav,bg:"success",variant:"dark",expand:"lg",children:Object(j.jsx)(o.a.Brand,{href:"#home",children:"ACNH: Collectors Guide"})})})},b=n(26),x=n.n(b),O=n(27),v=n.n(O),m=function(){var e=Object(a.useState)({status:"loading"}),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){v.a.get("https://acnhapi.com/v1a/fish/").then((function(e){return e.data})).then((function(e){return i({status:"loaded",payload:e})})).catch((function(e){return i({status:"error",error:e})}))}),[]),n},f=n(60),p=n(61),g=n(62),_=n(10),y=n.n(_),F=function(e){var t=e.fishprop;return Object(j.jsx)("div",{className:y.a.FishCard,"data-testid":"FishCard",children:Object(j.jsx)(f.a,{children:Object(j.jsxs)(p.a,{className:y.a.row,children:[Object(j.jsx)(g.a,{children:Object(j.jsx)("img",{src:t.icon_uri,alt:t.name["name-EUen"]})}),Object(j.jsxs)(g.a,{className:y.a.details,children:[Object(j.jsxs)("div",{children:["Name: ",t.name["name-EUen"]]}),Object(j.jsxs)("div",{children:["Id: ",t.id]}),Object(j.jsxs)("div",{children:["All day: ",t.availability.isAllDay.toString()]}),Object(j.jsxs)("div",{children:["All year: ",t.availability.isAllYear.toString()]}),Object(j.jsxs)("div",{children:["Southern Hemisphere Months: ",t.availability["month-array-southern"].join(",")]}),Object(j.jsxs)("div",{children:["Northern Hemisphere Months: ",t.availability["month-array-northern"].join(",")]}),Object(j.jsxs)("div",{children:["Location: ",t.availability.location]}),Object(j.jsxs)("div",{children:["Time: ",t.availability.time]}),Object(j.jsxs)("div",{children:["Shadow: ",t.shadow]})]})]})})})};!function(e){e.North="north",e.South="south"}(i||(i={}));var N=Object(a.createContext)({theme:i.North,setTheme:function(e){return console.warn("no theme provider")}}),S=function(){return Object(a.useContext)(N)},A=function(){var e,t=m(),n=S().theme,a=(new Date).getMonth()+1;return Object(j.jsx)("div",{className:x.a.FishGuide,"data-testid":"FishGuide",children:Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Fish Guide"}),Object(j.jsx)("h5",{children:"Fish availiable this month"})]}),Object(j.jsxs)("div",{children:["loading"===t.status&&Object(j.jsx)("div",{className:"loader-container",children:Object(j.jsx)("div",{children:"Loading"})}),"loaded"===t.status&&(null===(e=t.payload)||void 0===e?void 0:e.filter((function(e){return!1===e.availability.isAllYear})).filter((function(e){return n===i.North?e.availability["month-array-northern"].includes(a):e.availability["month-array-southern"].includes(a)})).map((function(e){return Object(j.jsx)("div",{className:"fish-item",children:Object(j.jsx)(F,{fishprop:e})})}))),"loaded"===t.status&&!t.payload&&Object(j.jsx)("div",{children:"Error empty array returned"}),"error"===t.status&&Object(j.jsx)("div",{children:"Oh no, error in calling endpoint"})]})]})})},C=n(28),w=n.n(C),k=function(){return Object(j.jsx)("div",{className:w.a.Footer,"data-testid":"Footer",children:Object(j.jsx)("footer",{children:Object(j.jsx)("a",{className:"App-link",href:"https://github.com/codingkudu/codingkudu",target:"_blank",rel:"noopener noreferrer",children:"CodingKudu on github"})})})},H=n(63),T=n(65),G=n(14),E=n.n(G),D=function(){var e=new Intl.DateTimeFormat("en",{month:"long"}),t=S(),n=t.theme,a=t.setTheme,r=[{name:"North",value:i.North},{name:"South",value:i.South}];return Object(j.jsxs)("div",{className:E.a.Settings,"data-testid":"Settings",children:[Object(j.jsx)(f.a,{children:Object(j.jsx)(p.a,{children:Object(j.jsxs)("h4",{children:["Month: ",e.format(new Date)]})})}),Object(j.jsx)(f.a,{children:Object(j.jsxs)(p.a,{children:[Object(j.jsx)("h4",{className:E.a.h4,children:"Hemisphere:"}),Object(j.jsx)(H.a,{toggle:!0,children:r.map((function(e,t){return Object(j.jsx)(T.a,{type:"radio",variant:"secondary",name:"radio",value:e.value,checked:n===e.value,onChange:function(){return a(e.value)},children:e.name},t)}))})]})})]})};var I=function(){var e=r.a.useState(i.North),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(N.Provider,{value:{theme:n,setTheme:a},children:Object(j.jsxs)("div",{className:"App","data-testid":"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(D,{}),Object(j.jsx)(A,{}),Object(j.jsx)(k,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),i(e),a(e),r(e),s(e)}))};n(57);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),M()}},[[58,1,2]]]);
//# sourceMappingURL=main.57fd9080.chunk.js.map