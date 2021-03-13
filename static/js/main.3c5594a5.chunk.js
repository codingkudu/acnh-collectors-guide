(this["webpackJsonpacnh-collectors-guide"]=this["webpackJsonpacnh-collectors-guide"]||[]).push([[0],{21:function(e,t,n){e.exports={FishCard:"FishCard_FishCard__1Tie_",row:"FishCard_row__1EYXn",details:"FishCard_details__1xIzH"}},22:function(e,t,n){e.exports={Settings:"Settings_Settings__3JhjC",container:"Settings_container__NFx3P",header:"Settings_header__2ERoI"}},26:function(e,t,n){e.exports={AcnhHeader:"AcnhHeader_AcnhHeader__hfl5w"}},37:function(e,t,n){e.exports={FishGuide:"FishGuide_FishGuide__1gxYT"}},39:function(e,t,n){e.exports={FishCards:"FishCards_FishCards__1KK5n"}},41:function(e,t,n){e.exports={"App-link":"Footer_App-link__1a16Z"}},46:function(e,t,n){},47:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a,i=n(0),r=n.n(i),s=n(10),c=n.n(s),h=(n(46),n(16)),d=(n(47),n(76)),o=n(26),l=n.n(o),j=n(1),u=function(){return Object(j.jsx)("div",{className:l.a.AcnhHeader,"data-testid":"AcnhHeader",children:Object(j.jsx)(d.a,{className:l.a.nav,bg:"success",variant:"dark",expand:"lg",children:Object(j.jsx)(d.a.Brand,{href:"#home",children:"ACNH: Collectors Guide"})})})},b=n(37),x=n.n(b),m=n(38),O=n.n(m),v=function(){var e=Object(i.useState)({status:"loading"}),t=Object(h.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){O.a.get("https://acnhapi.com/v1a/fish/").then((function(e){return e.data})).then((function(e){return a({status:"loaded",payload:e})})).catch((function(e){return a({status:"error",error:e})}))}),[]),n},f=n(77);!function(e){e.North="north",e.South="south"}(a||(a={}));var p=Object(i.createContext)({themes:{hemisphere:a.North,featureCarousel:!1},setTheme:function(e){return console.warn("no theme provider")}}),g=function(){return Object(i.useContext)(p)},_=n(72),C=n(73),F=n(74),y=n(21),N=n.n(y),S=function(e){var t=e.fishprop;return Object(j.jsx)("div",{className:N.a.FishCard,"data-testid":"FishCard",children:Object(j.jsx)(_.a,{children:Object(j.jsxs)(C.a,{className:N.a.row,children:[Object(j.jsx)(F.a,{children:Object(j.jsx)("img",{src:t.icon_uri,alt:t.name["name-EUen"]})}),Object(j.jsxs)(F.a,{className:N.a.details,children:[Object(j.jsxs)("div",{children:["Name: ",t.name["name-EUen"]]}),Object(j.jsxs)("div",{children:["Id: ",t.id]}),Object(j.jsxs)("div",{children:["All day: ",t.availability.isAllDay.toString()]}),Object(j.jsxs)("div",{children:["All year: ",t.availability.isAllYear.toString()]}),Object(j.jsxs)("div",{children:["Southern Hemisphere Months: ",t.availability["month-array-southern"].join(",")]}),Object(j.jsxs)("div",{children:["Northern Hemisphere Months: ",t.availability["month-array-northern"].join(",")]}),Object(j.jsxs)("div",{children:["Location: ",t.availability.location]}),Object(j.jsxs)("div",{children:["Time: ",t.availability.time]}),Object(j.jsxs)("div",{children:["Shadow: ",t.shadow]})]})]})})})},A=n(39),w=n.n(A),k=function(e){var t,n=e.fishes,i=g().themes,r=(new Date).getMonth()+1,s=n.filter((function(e){return!1===e.availability.isAllYear})).filter((function(e){return i.hemisphere===a.North?e.availability["month-array-northern"].includes(r):e.availability["month-array-southern"].includes(r)}));return t=i.featureCarousel&&s.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Swipe left or right to see next fish"}),Object(j.jsx)(f.a,{children:s.map((function(e){return Object(j.jsx)(f.a.Item,{children:Object(j.jsx)(S,{fishprop:e})})}))})]}):Object(j.jsx)("div",{children:s.map((function(e){return Object(j.jsx)("div",{className:"fish-item",children:Object(j.jsx)(S,{fishprop:e})})}))}),Object(j.jsx)("div",{className:w.a.FishCards,"data-testid":"FishCards",children:t})},H=function(){var e=v();return Object(j.jsx)("div",{className:x.a.FishGuide,"data-testid":"FishGuide",children:Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Fish Guide"}),Object(j.jsx)("h5",{children:"Fish availiable this month"})]}),Object(j.jsxs)("div",{children:["loading"===e.status&&Object(j.jsx)("div",{className:"loader-container",children:Object(j.jsx)("div",{children:"Loading"})}),"loaded"===e.status&&!!e.payload&&Object(j.jsx)(k,{fishes:e.payload}),"loaded"===e.status&&!e.payload&&Object(j.jsx)("div",{children:"Error empty array returned"}),"error"===e.status&&Object(j.jsx)("div",{children:"Oh no, error in calling endpoint"})]})]})})},T=n(41),E=n.n(T),G=function(){return Object(j.jsx)("div",{className:E.a.Footer,"data-testid":"Footer",children:Object(j.jsx)("footer",{children:Object(j.jsx)("a",{className:"App-link",href:"https://github.com/codingkudu/codingkudu",target:"_blank",rel:"noopener noreferrer",children:"CodingKudu on github"})})})},I=n(75),D=n(78),M=n(22),L=n.n(M),P=function(){var e=new Intl.DateTimeFormat("en",{month:"long"}),t=g(),n=t.themes,i=t.setTheme,r=[{name:"North",value:a.North},{name:"South",value:a.South}];return Object(j.jsxs)("div",{className:L.a.Settings,"data-testid":"Settings",children:[Object(j.jsx)(_.a,{children:Object(j.jsx)(C.a,{children:Object(j.jsxs)("h4",{children:["Month: ",e.format(new Date)]})})}),Object(j.jsxs)(_.a,{children:[Object(j.jsxs)(C.a,{children:[Object(j.jsx)("b",{className:L.a.header,children:"Hemisphere:"}),Object(j.jsx)(I.a,{toggle:!0,children:r.map((function(e,t){return Object(j.jsx)(D.a,{type:"radio",variant:"secondary",name:"radio",value:e.value,checked:n.hemisphere===e.value,onChange:function(){return i({hemisphere:e.value,featureCarousel:n.featureCarousel})},children:e.name},t)}))})]}),Object(j.jsxs)(C.a,{children:[Object(j.jsx)("b",{className:L.a.header,children:"Feat. toggle Carousel:"}),Object(j.jsx)(I.a,{toggle:!0,children:[{name:"On",value:"true"},{name:"Off",value:"false"}].map((function(e,t){return Object(j.jsx)(D.a,{type:"radio",variant:"secondary",name:"radio",value:e.value,checked:n.featureCarousel.toString()===e.value,onChange:function(){return i({hemisphere:n.hemisphere,featureCarousel:"true"===e.value})},children:e.name},t)}))})]})]})]})};var Y=function(){var e=r.a.useState({hemisphere:a.North,featureCarousel:!1}),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(j.jsx)(p.Provider,{value:{themes:n,setTheme:i},children:Object(j.jsxs)("div",{className:"App","data-testid":"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(P,{}),Object(j.jsx)(H,{}),Object(j.jsx)(G,{})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};n(69);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(Y,{})}),document.getElementById("root")),B()}},[[70,1,2]]]);
//# sourceMappingURL=main.3c5594a5.chunk.js.map