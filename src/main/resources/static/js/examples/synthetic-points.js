(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{348:function(e,n,o){"use strict";o.r(n);for(var t=o(23),a=o(3),r=o(2),i=o(27),l=o(31),s=o(22),w=o(15),c=o(16),u=o(47),d=o(25),g=o(20),m=new Array(2e4),v=18e6,f=0;f<2e4;++f)m[f]=new t.a({geometry:new i.a([2*v*Math.random()-v,2*v*Math.random()-v]),i:f,size:f%2?10:20});var p={10:new c.c({image:new u.a({radius:5,fill:new d.a({color:"#666666"}),stroke:new g.a({color:"#bada55",width:1})})}),20:new c.c({image:new u.a({radius:10,fill:new d.a({color:"#666666"}),stroke:new g.a({color:"#bada55",width:1})})})},y=new w.a({features:m,wrapX:!1}),h=new s.a({source:y,style:function(e){return p[e.get("size")]}}),k=new a.a({layers:[h],target:document.getElementById("map"),view:new r.a({center:[0,0],zoom:2})}),C=null,b=null,E=function(e){var n=y.getClosestFeatureToCoordinate(e);if(null===n)b=C=null;else{var o=n.getGeometry().getClosestPoint(e);null===C?C=new i.a(o):C.setCoordinates(o),null===b?b=new l.a([e,o]):b.setCoordinates([e,o])}k.render()};k.on("pointermove",function(e){if(!e.dragging){var n=k.getEventCoordinate(e.originalEvent);E(n)}}),k.on("click",function(e){E(e.coordinate)});var x=new g.a({color:"rgba(255,255,0,0.9)",width:3}),z=new c.c({stroke:x,image:new u.a({radius:10,stroke:x})});k.on("postcompose",function(e){var n=e.vectorContext;n.setStyle(z),null!==C&&n.drawGeometry(C),null!==b&&n.drawGeometry(b)}),k.on("pointermove",function(e){if(!e.dragging){var n=k.getEventPixel(e.originalEvent),o=k.hasFeatureAtPixel(n);k.getTarget().style.cursor=o?"pointer":""}})}},[[348,0]]]);
//# sourceMappingURL=synthetic-points.js.map