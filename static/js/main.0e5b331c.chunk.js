(this["webpackJsonpquote-machine"]=this["webpackJsonpquote-machine"]||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(6),c=n.n(r),i=(n(16),n(3)),u=n.n(i),s=n(7),l=n(10),h=(n(18),n(8)),m=n(9),d=function(){var e=Object(o.useState)({}),t=Object(l.a)(e,2),n=t[0],r=t[1];Object(o.useEffect)((function(){c()}),[]);var c=function(){var e=Object(s.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://quotes.stormconsultancy.co.uk/random.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),r({author:n.author,quote:n.quote}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error fetching quote:\n",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return a.a.createElement("div",null,a.a.createElement("h1",{id:"title"},"Random Quotes"),a.a.createElement("div",{id:"quote-box"},a.a.createElement("p",{id:"text"},'"',n.quote,'"'),a.a.createElement("p",{id:"author"},"-",n.author),a.a.createElement("div",{id:"clickables"},a.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"},a.a.createElement(h.a,{icon:m.a}),"share this wisdom on twitter"),a.a.createElement("button",{id:"new-quote",onClick:c},"Get A New Quote"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.0e5b331c.chunk.js.map