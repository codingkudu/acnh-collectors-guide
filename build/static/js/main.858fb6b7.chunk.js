(this["webpackJsonpacnh-collectors-guide"]=this["webpackJsonpacnh-collectors-guide"]||[]).push([[0],{18:function(e,t,a){e.exports={header:"Settings_header__2ERoI",row:"Settings_row__1_AfF",buttonGroupToggle:"Settings_buttonGroupToggle__2dQtl"}},30:function(e,t,a){e.exports={CollectableCard:"CollectableCard_CollectableCard__3FBqh",row:"CollectableCard_row__3YRO9",details:"CollectableCard_details__1sFDY"}},34:function(e,t,a){e.exports={AcnhHeader:"AcnhHeader_AcnhHeader__hfl5w"}},45:function(e,t,a){e.exports={About:"About_About__w2mXW"}},47:function(e,t,a){e.exports={CollectableCards:"CollectableCards_CollectableCards__2SeV-"}},49:function(e,t,a){e.exports={CollectableGuide:"CollectableGuide_CollectableGuide__3Og2_"}},50:function(e,t,a){e.exports={CollectableViews:"CollectableViews_CollectableViews__3kVoS"}},51:function(e,t,a){e.exports={"App-link":"Footer_App-link__1a16Z"}},56:function(e,t,a){},57:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var c,l=a(0),n=a.n(l),s=a(22),r=a.n(s),i=(a(56),a(27)),o=(a(57),a(94)),d=a(34),h=a.n(d),b=a(1),u=function(){return Object(b.jsx)("div",{className:h.a.AcnhHeader,"data-testid":"AcnhHeader",children:Object(b.jsx)(o.a,{className:h.a.nav,bg:"success",variant:"dark",expand:"lg",children:Object(b.jsx)(o.a.Brand,{href:"#home",children:"ACNH: Collectors Guide"})})})},j=a(92),x=a(90);!function(e){e.Fish="fish",e.Bugs="bugs",e.SeaCreatures="sea"}(c||(c={}));var O,m=a(45),v=a.n(m),p=function(){return Object(b.jsxs)("div",{className:v.a.About,"data-testid":"About",children:[Object(b.jsx)("h1",{children:"Welcome to ACNH: Collectors Guide"}),Object(b.jsx)("p",{children:"Are you a Completionist gamer? Need to scratch that itch of getting a complete set?"}),Object(b.jsx)("p",{children:"This is the place to find out where to complete you ACNH collections. Just use the toggle buttons above to select you hemisphere and style of layout."}),Object(b.jsx)("p",{children:"Happy collecting! \ud83d\ude0d"})]})},f=a(46),C=a.n(f),g=function(e){var t=Object(l.useState)({status:"loading"}),a=Object(i.a)(t,2),c=a[0],n=a[1];return Object(l.useEffect)((function(){C.a.get("https://acnhapi.com/v1a/"+e+"/").then((function(e){return e.data})).then((function(e){return n({status:"loaded",payload:e})}))}),[e]),c},y=a(93);!function(e){e.North="north",e.South="south"}(O||(O={}));var _=Object(l.createContext)({themes:{hemisphere:O.North,featureCarousel:!1},setTheme:function(e){return console.warn("no theme provider")}}),N=function(){return Object(l.useContext)(_)},A=a(87),S=a(88),w=a(89),F=a(30),T=a.n(F);function G(e){return e?"Yes":"No"}function H(e){var t=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return t[e[0]]+"-"+t[e[e.length-1]]}var k=function(e){var t=e.collectable;return Object(b.jsx)("div",{className:T.a.CollectableCard,"data-testid":"CollectableCard",children:Object(b.jsx)(A.a,{children:Object(b.jsxs)(S.a,{className:T.a.row,children:[Object(b.jsx)(w.a,{children:Object(b.jsx)("img",{src:t.icon_uri,alt:t.name["name-EUen"],"data-testid":"CollectableImage"})}),Object(b.jsxs)(w.a,{className:T.a.details,children:[Object(b.jsxs)("div",{"data-testid":"CollectableName",children:[Object(b.jsx)("b",{children:"Name:"})," ",t.name["name-EUen"]]}),Object(b.jsxs)("div",{"data-testid":"CollectableId",children:[Object(b.jsx)("b",{children:"Id:"})," ",t.id]}),Object(b.jsxs)("div",{"data-testid":"CollectableAllDay",children:[Object(b.jsx)("b",{children:"All day:"})," ",G(t.availability.isAllDay)]}),Object(b.jsxs)("div",{"data-testid":"CollectableAllYear",children:[Object(b.jsx)("b",{children:"All year:"})," ",G(t.availability.isAllYear)]}),Object(b.jsxs)("div",{"data-testid":"CollectableSouth",children:[Object(b.jsx)("b",{children:"Southern Hemisphere Months:"})," ",H(t.availability["month-array-southern"])]}),Object(b.jsxs)("div",{"data-testid":"CollectableNorth",children:[Object(b.jsx)("b",{children:"Northern Hemisphere Months:"})," ",H(t.availability["month-array-northern"])]}),Object(b.jsxs)("div",{"data-testid":"CollectableLocation",children:[Object(b.jsx)("b",{children:"Location:"})," ",t.availability.location]}),Object(b.jsxs)("div",{"data-testid":"CollectableTime",children:[Object(b.jsx)("b",{children:"Time:"})," ",t.availability.time]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("b",{children:"Shadow:"})," ",t.shadow]})]})]})})})},B=a(47),D=a.n(B);function I(e){return e===c.Fish?"fish":e===c.Bugs?"bug":e===c.SeaCreatures?"sea creature":e}var E=function(e){var t,a=e.collectableType,c=e.collectables,l=N().themes,n=(new Date).getMonth()+1,s=c.filter((function(e){return!1===e.availability.isAllYear})).filter((function(e){return l.hemisphere===O.North?e.availability["month-array-northern"].includes(n):e.availability["month-array-southern"].includes(n)}));return t=l.featureCarousel&&s.length>0?Object(b.jsxs)("div",{children:[Object(b.jsxs)("b",{children:["Swipe LEFT \u2b05 or RIGHT \u27a1 to see next ",I(a)]}),Object(b.jsx)(y.a,{children:s.map((function(e){return Object(b.jsx)(y.a.Item,{children:Object(b.jsx)(k,{collectable:e})})}))})]}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("b",{children:["Swipe UP \u2b06 or DOWN \u2b07 to see ",I(a)]}),s.map((function(e,t){return Object(b.jsx)("div",{className:"collectable-item",children:Object(b.jsx)(k,{collectable:e})},t)}))]}),Object(b.jsx)("div",{className:D.a.CollectableCards,"data-testid":"CollectableCards",children:t})},M=a(49),V=a.n(M);function J(e){return e===c.Fish?"Fish":e===c.Bugs?"Bugs":e===c.SeaCreatures?"Sea Creatures":e}var K=function(e){var t=e.endpoint,a=g(t);return Object(b.jsx)("div",{className:V.a.CollectableGuide,"data-testid":"CollectableGuide",children:Object(b.jsxs)("main",{children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[J(t)," Guide"]}),Object(b.jsxs)("h5",{children:[J(t)," availiable this month"]})]}),Object(b.jsxs)("div",{children:["loading"===a.status&&Object(b.jsx)("div",{className:"loader-container",children:Object(b.jsx)("div",{children:"Loading"})}),"loaded"===a.status&&!!a.payload&&Object(b.jsx)(E,{collectableType:t,collectables:a.payload}),"loaded"===a.status&&!a.payload&&Object(b.jsx)("div",{children:"Error empty array returned"}),"error"===a.status&&Object(b.jsx)("div",{children:"Oh no, error in calling endpoint"})]})]})})},L=a(50),Y=a.n(L),P=function(){return Object(b.jsx)("div",{className:Y.a.CollectableViews,"data-testid":"CollectableViews",children:Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{defaultActiveKey:"about",id:"uncontrolled-tab-example",className:"mb-3",fill:!0,"data-testid":"tabs",children:[Object(b.jsx)(x.a,{eventKey:"about",title:"About","data-testid":"about-tab",children:Object(b.jsx)(p,{})}),Object(b.jsx)(x.a,{eventKey:"fish",title:"Fish","data-testid":"fish-tab",children:Object(b.jsx)(K,{endpoint:c.Fish})}),Object(b.jsx)(x.a,{eventKey:"bugs",title:"Bugs","data-testid":"bug-tab",children:Object(b.jsx)(K,{endpoint:c.Bugs})}),Object(b.jsx)(x.a,{eventKey:"sea",title:"Sea Creatures","data-testid":"sea-tab",children:Object(b.jsx)(K,{endpoint:c.SeaCreatures})})]})})})},R=a(51),U=a.n(R),W=function(){return Object(b.jsx)("div",{className:U.a.Footer,"data-testid":"Footer",children:Object(b.jsx)("footer",{children:Object(b.jsx)("a",{className:"App-link",href:"https://github.com/codingkudu/codingkudu",target:"_blank",rel:"noopener noreferrer",children:"CodingKudu on github"})})})},q=a(91),Q=a(95),X=a(18),Z=a.n(X),z=function(){var e=new Intl.DateTimeFormat("en",{month:"long"}),t=N(),a=t.themes,c=t.setTheme,l=[{name:"North",value:O.North},{name:"South",value:O.South}];return Object(b.jsxs)("div",{"data-testid":"Settings",children:[Object(b.jsx)(A.a,{children:Object(b.jsx)(S.a,{children:Object(b.jsxs)("h4",{children:["Month: ",e.format(new Date)]})})}),Object(b.jsxs)(A.a,{children:[Object(b.jsxs)(S.a,{className:Z.a.row,children:[Object(b.jsx)(w.a,{sm:4,children:Object(b.jsx)("b",{className:Z.a.header,children:"Hemisphere:"})}),Object(b.jsx)(w.a,{sm:8,children:Object(b.jsx)(q.a,{toggle:!0,className:Z.a.buttonGroupToggle,children:l.map((function(e,t){return Object(b.jsx)(Q.a,{type:"radio",variant:"secondary",name:"radio",value:e.value,checked:a.hemisphere===e.value,onChange:function(){return c({hemisphere:e.value,featureCarousel:a.featureCarousel})},"data-testid":"hemisphere-"+e.name,children:e.name},t)}))})})]}),Object(b.jsxs)(S.a,{className:Z.a.row,children:[Object(b.jsx)(w.a,{sm:4,children:Object(b.jsx)("b",{className:Z.a.header,children:"Feature toggle Carousel:"})}),Object(b.jsx)(w.a,{sm:8,children:Object(b.jsx)(q.a,{toggle:!0,className:Z.a.buttonGroupToggle,children:[{name:"On",value:"true"},{name:"Off",value:"false"}].map((function(e,t){return Object(b.jsx)(Q.a,{type:"radio",variant:"secondary",name:"radio",value:e.value,checked:a.featureCarousel.toString()===e.value,onChange:function(){return c({hemisphere:a.hemisphere,featureCarousel:"true"===e.value})},"data-testid":"carousel-"+e.name,children:e.name},t)}))})})]})]})]})};var $=function(){var e=n.a.useState({hemisphere:O.North,featureCarousel:!1}),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(b.jsx)(_.Provider,{value:{themes:a,setTheme:c},children:Object(b.jsxs)("div",{className:"App","data-testid":"App",children:[Object(b.jsx)(u,{}),Object(b.jsx)(z,{}),Object(b.jsx)(P,{}),Object(b.jsx)(W,{})]})})},ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,96)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),l(e),n(e),s(e)}))};a(84);r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),ee()}},[[85,1,2]]]);
//# sourceMappingURL=main.858fb6b7.chunk.js.map