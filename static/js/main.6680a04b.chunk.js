(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var o=c(2),r=c.n(o),n=c(6),i=c.n(n),s=(c(15),c(16),c(3)),a=c(7),p=c(1);var j=function(e){var t=e.projectData;return Object(p.jsxs)("div",{className:"project",onClick:function(){document.getElementById(t.projectName).scrollIntoView({behavior:"smooth"})},children:[Object(p.jsx)("img",{src:t.projectIcon,alt:"",className:"project-icon"}),Object(p.jsx)("h3",{className:"project-name",children:t.projectName}),Object(p.jsx)("p",{className:"project-description",children:t.projectShortDescription})]})},l=[{projectName:"Video Clip Sharer",projectIcon:"video.png",projectShortDescription:"Basic video editor developed using C#",projectDescription:"Project 2 long description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/Video-Clip-Sharer/master/portfolio.md"},{projectName:"League Bot",projectIcon:"draven.png",projectShortDescription:"Discord bot to provide utility for league of legends discord servers",projectDescription:"This is my long leaguebot description.",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/LeagueBot/main/portfolio.md"},{projectName:"Discord Voice Assistant",projectIcon:"mic.png",projectShortDescription:"Multi-purpose discord bot built to utilize speech recognition",projectDescription:"This is my long leaguebot description.",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/discord-voice-assistant/main/README.md"},{projectName:"Realtime Livestream Server",projectIcon:"videoclip.png",projectShortDescription:"Deployable low latency video live streaming server/website.",projectDescription:"Project 3 long description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/realtime-livestream-server/main/portfolio.md"},{projectName:"Restaurant Menu Services",projectIcon:"RestaurantMenuLogo.png",projectShortDescription:"Virtually host and create restaurant menus",projectDescription:"Long portfolio description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/restaurant-menu/main/portfolio.md"},{projectName:"Portfolio",projectIcon:"smile.png",projectShortDescription:"Website portfolio built in ReactJS. Its where your at right now!",projectDescription:"Long portfolio description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/portfolio/master/portfolio.md"},{projectName:"Login Page",projectIcon:"memo.png",projectShortDescription:"React.JS website that uses AWS Cognito for the backend.",projectDescription:"Long portfolio description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/login-page/master/portfolio.md"},{projectName:"Nytelock Sample Page",projectIcon:"sparkles.png",projectShortDescription:"React.JS page to display photos.",projectDescription:"Long portfolio description",projectMarkDown:"https://raw.githubusercontent.com/quentinmay/nytelock-sample-page/master/portfolio.md"}];var u=function(){return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)("div",{className:"header-title",children:Object(p.jsx)("h1",{children:"Quentin May"})}),Object(p.jsxs)("div",{className:"subjects",children:[Object(p.jsxs)("div",{className:"subject",id:"subject1",children:[Object(p.jsx)("h2",{className:"subject-title",children:"About Me"}),Object(p.jsx)("p",{className:"about-me paragraph",children:"Hey!\ud83d\udc4b I'm Quentin, an aspiring Software Engineer and senior at California State University, Fullerton pursuing a Bachelor's degree in Computer Science. My core programming experience lies in C#, Java, and JavaScript, but I love all things computing. \ud83d\ude42"})]}),Object(p.jsxs)("div",{className:"subject",id:"subject2",children:[Object(p.jsx)("h2",{className:"subject-title",children:"Projects"}),l.map((function(e){return Object(p.jsx)(j,{projectData:e})}))]}),Object(p.jsxs)("div",{className:"subject",id:"subject3",children:[Object(p.jsx)("h2",{className:"subject-title",children:"Contact"}),Object(p.jsxs)("div",{className:"container-contact",children:[Object(p.jsxs)("h3",{className:"contact-info email paragraph",children:[Object(p.jsx)(s.a,{})," quentinemay@gmail.com"]}),Object(p.jsx)("a",{href:"https://github.com/quentinmay",children:Object(p.jsxs)("h3",{className:"contact-info github paragraph",children:[Object(p.jsx)(s.b,{})," quentinmay"]})}),Object(p.jsx)("a",{href:"https://www.linkedin.com/in/quentin-may-7b28a8213/",children:Object(p.jsxs)("h3",{className:"contact-info linked-in paragraph",children:[Object(p.jsx)(a.a,{})," in/quentin-may-7b28a8213/"]})})]})]})]})]})},m=c(5),d=c.n(m),h=c(10),b=c(8),g=c(9);function f(){return(f=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return c=e.sent,e.abrupt("return",c.text());case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var v=function(e){var t=e.project,c=Object(o.useState)({status:"loading",data:null}),r=Object(h.a)(c,2),n=r[0],i=r[1];return"loading"===n.status&&function(e){return f.apply(this,arguments)}(t.projectMarkDown).then((function(e){i({status:"loaded",data:e})})),Object(p.jsxs)("div",{className:"project-header",children:["loading"===n.status&&Object(p.jsx)(p.Fragment,{}),"loaded"===n.status&&Object(p.jsx)("div",{className:"projects-header",id:t.projectName,children:Object(p.jsxs)("details",{children:[Object(p.jsxs)("summary",{className:"project-summary",children:[" ",Object(p.jsx)("img",{src:t.projectIcon,alt:"",className:"project-icon"}),t.projectName]}),Object(p.jsx)("div",{className:"project-item",children:Object(p.jsx)(g.a,{children:n.data})})]})})]})};var x=function(){return Object(p.jsxs)("div",{className:"projects-header1",children:[Object(p.jsx)("h1",{className:"projects-header-title",children:"Projects"}),l.map((function(e){return Object(p.jsx)(v,{project:e})}))]})};var O=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(u,{}),Object(p.jsx)(x,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(t){var c=t.getCLS,o=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),o(e),r(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),N()}},[[19,1,2]]]);
//# sourceMappingURL=main.6680a04b.chunk.js.map