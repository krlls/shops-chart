(this["webpackJsonpchart-card"]=this["webpackJsonpchart-card"]||[]).push([[0],{213:function(e,n,a){e.exports=a.p+"static/media/icon.c015845a.svg"},214:function(e,n,a){e.exports=a(532)},219:function(e,n,a){},220:function(e,n,a){},221:function(e,n,a){},530:function(e,n,a){},531:function(e,n,a){},532:function(e,n,a){"use strict";a.r(n);var t=a(6),i=a.n(t),o=a(211),r=a.n(o),l=(a(219),a(220),[{value:304594,date:"2020-05-10"},{value:104594,date:"2020-05-11"},{value:204500,date:"2020-05-12"},{value:134594,date:"2020-05-13"},{value:284590,date:"2020-05-14"},{value:274594,date:"2020-05-15"},{value:133450,date:"2020-05-16"},{value:181039,date:"2020-05-17"}]),c=(a(221),function(e){return i.a.createElement("div",{className:"card"},null===e||void 0===e?void 0:e.children)}),d=a(212),s=a.n(d),m=a(87),g=a(122),I=a.n(g),u=function(e,n,a,t,i,o){var r=i.viewSize,l=i.contentSize,c=o.series[0].data,d=c[n[0].dataIndex].value,s=function(e){var n=e.map((function(e){return e.value}));return Math.max.apply(null,n)}(c),m=0,g=0;return m=(r[0]-12)/(c.length-1)*n[0].dataIndex-l[0]/2+6,g=l[1]/100*(d/s*100),(g=l[1]-g)<0&&(g=0),m<6?m=6:m>r[0]-6-l[0]&&(m=r[0]-6-l[0]+1),[m,g]},p={greenGradient:new m.graphic.LinearGradient(0,0,0,1.2,[{offset:0,color:"rgba(62, 192, 173, 0.2)"},{offset:1,color:"rgba(62, 192, 173, 0)"}]),grayGradient:new m.graphic.LinearGradient(0,0,0,2,[{offset:0,color:"rgba(161, 159, 176, 0)"},{offset:1,color:"rgba(161, 159, 176, 0.2)"}]),gray:"#9E9FA7",green:"#3EC0AD",lightgreen:"#E4F6F3",white:"#FFFFFF",transparent:"transparent"},v=function(e){return e.map((function(e){return e.date}))}(l),Z={grid:{left:-30,right:30,top:10,bottom:0,containLabel:!0},tooltip:{trigger:"axis",backgroundColor:p.transparent,textStyle:{color:"black"},formatter:function(e){return function(e){var n=e[0].data,a=n.value,t=n.date,i=I()(t).format("DD MMM YYYY"),o="\n    margin-bottom: auto;\n  ";return'\n    <div style="'.concat("\n    display: flex;\n    flex-direction: column;\n    width: 150px;\n    height: 90px;\n    padding: 10px 0px 0px 10px; \n    background: white; \n    box-shadow: 0px 8px 32px rgba(18, 16, 37, 0.03);\n    border-radius: 8px; \n    border: 1px solid rgba(18, 16, 37, 0.05);\n    color: rgba(18, 16, 37, 0.5);\n    font-family: 'Rubik', sans-serif;\n    font-size: 11px;\n    line-height: 16px;\n  ",'">\n      <div style="').concat(o+"\n    text-transform: uppercase;\n    font-weight: 500;\n  ",'">\n        Total sold\n      </div>\n      <div style="').concat(o+"\n    font-size: 20px;\n    color: #121025;\n  ",'">\n        ').concat(a.toLocaleString(),' \u20ac\n      </div>\n      <div style="').concat(o+"\n    color: #A19FB0;\n    font-size: 13px;\n  ",'">\n        ').concat(i,"\n      </div> \n    </div>\n  ")}(e)},position:function(e,n,a,t,i){return u(0,n,0,0,i,Z)}},xAxis:{axisLabel:{inside:!1,backgroundColor:p.white,fontFamily:"Rubik",fontWeight:500,color:p.gray,formatter:function(e,n){return n?I()(e).format("DD"):""},axisTick:{lineStyle:{opacity:0}}},type:"category",boundaryGap:!1,axisLine:{lineStyle:{color:p.transparent}},splitLine:{show:!0,lineStyle:{color:p.grayGradient}},data:v,axisPointer:{z:0,lineStyle:{color:p.lightgreen,width:9,borderRadius:2}}},yAxis:{show:!1,boundaryGap:["0%","100%"],type:"value",splitLine:{show:!1}},series:[{data:l,type:"line",smooth:!0,symbol:"image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cmVjdCB4PSIxMiIgeT0iOCIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iOCIgZmlsbD0iI0ZGNjk1NSIvPgo8cmVjdCB4PSIxNCIgeT0iMTAiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgcng9IjYiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iNCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2QiIHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjQiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=",symbolSize:35,symbolOffset:[0,3],showSymbol:!1,cursor:"arrow",lineStyle:{color:p.green},areaStyle:{color:p.greenGradient}}]},f={height:"100%",width:"100%"},b=(a(530),function(){return i.a.createElement("div",{className:"chart-container"},i.a.createElement(s.a,{option:Z,style:f}))}),h=(a(531),a(213)),x=a.n(h),y=function(e){var n=e.data,a=n[n.length-1].value,t=a-n[n.length-2].value;return i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"info--test"},i.a.createElement("div",null,i.a.createElement("div",{className:"info--title"},"Revenue"),i.a.createElement("div",{className:"info--cost-wrapper"},i.a.createElement("span",{className:"info--cost"},"".concat(a.toLocaleString()," \u20ac")),i.a.createElement("span",{className:"info--cost--duration "},function(e){return e>0?"+ ".concat(e.toLocaleString()," \u20ac"):e<0?"".concat(e.toLocaleString()," \u20ac"):""}(t)))),i.a.createElement("div",null,i.a.createElement("div",{className:"info--left-label--wrapper"},i.a.createElement("div",{className:"info--left-label"},"Build custom report"),i.a.createElement("div",null,i.a.createElement("img",{src:x.a,alt:"icon"}))))))},C=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"warp"},i.a.createElement(y,{data:l}),i.a.createElement(c,null,i.a.createElement(b,null))))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,null)),document.getElementById("root"))}},[[214,1,2]]]);
//# sourceMappingURL=main.86a68a56.chunk.js.map