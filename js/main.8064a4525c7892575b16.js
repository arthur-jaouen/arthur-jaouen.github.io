!function(e){function t(t){for(var a,o,c=t[0],i=t[1],s=t[2],m=0,p=[];m<c.length;m++)o=c[m],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(l.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={0:0},l=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=i;l.push([63,1]),n()}({25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){e.exports=n.p+"img/comerso.287704d452f954aa520a54df16aaabd3.png"},37:function(e,t,n){e.exports=n.p+"img/silamir.dcc4b122b78043ce76774565e4cd0b50.png"},38:function(e,t,n){e.exports=n.p+"img/consept.4dfd0f3b8e669e2137cd864585dbf40d.jpg"},39:function(e,t,n){e.exports=n.p+"img/factorfx.462305cc419337298f77678b12ecf255.jpg"},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){e.exports=n.p+"img/portrait.796ed22e322070cb43d51ff10884911f.jpg"},60:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n.n(a),l=n(1),o=n.n(l),c=n(14),i=n.n(c),s=n(2),u=n.n(s),m=n(3),p=n.n(m),d=n(4),f=n.n(d),g=n(5),h=n.n(g),E=n(6),v=n.n(E),y=o.a.createContext({language:"en",updateLanguage:function(e){}}),b=y.Consumer,k=function(e){function t(){var e;return u()(this,t),(e=f()(this,h()(t).apply(this,arguments))).state={language:"en"},e.updateLanguage=function(t){r.a.locale(t),e.setState({language:t})},e}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.language;return o.a.createElement(y.Provider,{value:{language:t,updateLanguage:this.updateLanguage}},e)}}]),t}(o.a.Component),w=n(7),C=n(0),S=Object(C.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{fill:"#F0F0F0",cx:"256",cy:"256",r:"256"},child:[]},{tag:"path",attr:{fill:"#D80027",d:"M512,256c0-110.071-69.472-203.906-166.957-240.077v480.155C442.528,459.906,512,366.071,512,256z"},child:[]},{tag:"path",attr:{fill:"#0052B4",d:"M0,256c0,110.071,69.473,203.906,166.957,240.077V15.923C69.473,52.094,0,145.929,0,256z"},child:[]}]}),Y=Object(C.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{fill:"#F0F0F0",cx:"256",cy:"256",r:"256"},child:[]},{tag:"path",attr:{fill:"#FF9811",d:"M512,256c0-110.07-69.472-203.906-166.957-240.076v480.155C442.528,459.906,512,366.072,512,256z"},child:[]},{tag:"path",attr:{fill:"#6DA544",d:"M0,256c0,110.072,69.472,203.906,166.957,240.078V15.924C69.472,52.094,0,145.93,0,256z"},child:[]}]}),N=n(15),M=n.n(N),P=(n(25),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=M()(e,["icon"]);return o.a.createElement("span",{className:"icon"},o.a.createElement(t,n))}}]),t}(o.a.Component)),F=(n(26),function(e){function t(){var e;return u()(this,t),(e=f()(this,h()(t).apply(this,arguments))).onClick=function(t){t.preventDefault(),e.props.onSelect(e.props.language)},e}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.name,a=e.icon,r=e.selectedLanguage;return o.a.createElement("a",{className:"language-picker-link"+(r===t?" language-picker-link-selected":""),onClick:this.onClick,href:"#"},o.a.createElement(P,{icon:a}),n)}}]),t}(o.a.Component)),x=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(b,null,(function(e){var t=e.language,n=e.updateLanguage;return o.a.createElement("div",{className:"language-picker"},o.a.createElement(F,{language:"en",name:"En",icon:Y,onSelect:n,selectedLanguage:t}),o.a.createElement(F,{language:"fr",name:"Fr",icon:S,onSelect:n,selectedLanguage:t}))}))}}]),t}(o.a.Component),R=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props.msg;return"string"==typeof e||o.a.isValidElement(e)?e:o.a.createElement(b,null,(function(t){var n=t.language;return e[n]}))}}]),t}(o.a.Component),A=(n(27),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.image,n=e.name,a=e.title;return o.a.createElement("div",{className:"portrait"},o.a.createElement("div",{className:"portrait-image"},o.a.createElement("img",{src:t,title:n,alt:n,width:386,height:407})),o.a.createElement("h1",{className:"portrait-name"},n),o.a.createElement("hr",null),o.a.createElement("h2",{className:"portrait-title"},o.a.createElement(R,{msg:a})))}}]),t}(o.a.Component)),D=(n(28),n(29),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text;return o.a.createElement("p",{className:"item"},o.a.createElement(P,{icon:t}),o.a.createElement("span",{className:"item-content"},o.a.createElement(R,{msg:n})))}}]),t}(o.a.Component)),L=(n(30),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.icon,a=e.className,r=e.children;return o.a.createElement("section",{className:a},o.a.createElement("h3",{className:"section-title"},o.a.createElement(P,{icon:n})," ",o.a.createElement(R,{msg:t})),r)}}]),t}(o.a.Component)),I=(n(31),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.left,n=e.right;return o.a.createElement("div",{className:"two-panes-layout"},o.a.createElement("div",{className:"two-panes-layout-left"},t),o.a.createElement("div",{className:"two-panes-layout-right"},n))}}]),t}(o.a.Component)),j=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{className:"contact",icon:w.n,title:{en:"Contact",fr:"Contact"}},o.a.createElement(I,{left:o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{icon:w.f,text:o.a.createElement("a",{href:"mailto:arthur.jaouen@gmail.com",target:"_blank"},"arthur.jaouen@gmail.com")}),o.a.createElement(D,{icon:w.m,text:o.a.createElement("a",{href:"tel:00353894461939",target:"_blank"},"(+353) 89 446 1939")}),o.a.createElement(D,{icon:w.l,text:{en:o.a.createElement(o.a.Fragment,null,"112 Richmond Road",o.a.createElement("br",null),"Dublin 3",o.a.createElement("br",null),"D03 XC85"),fr:o.a.createElement(o.a.Fragment,null,"112 Richmond Road",o.a.createElement("br",null),"Dublin 3",o.a.createElement("br",null),"D03 XC85",o.a.createElement("br",null),"IRELAND")}})),right:o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{icon:w.k,text:o.a.createElement("a",{href:"https://www.linkedin.com/in/arthur-jaouen/",target:"_blank"},"Linkedin")}),o.a.createElement(D,{icon:w.i,text:o.a.createElement("a",{href:"https://github.com/arthur-jaouen",target:"_blank"},"Github")}))}))}}]),t}(o.a.Component),T=(n(32),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return o.a.createElement("article",null,o.a.createElement("p",{className:"subsection-title"},o.a.createElement(P,{icon:w.r,color:"#009a49"}),o.a.createElement(R,{msg:t})),o.a.createElement("div",{className:"subsection-content"},n))}}]),t}(o.a.Component)),O=(n(33),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.start,n=e.end,a=e.title,r=e.description;return o.a.createElement("div",{className:"degree"},o.a.createElement(T,{title:(t?t.format("YYYY")+" - ":"")+n.format("YYYY")},o.a.createElement("h4",{className:"degree-title"},o.a.createElement(R,{msg:a})),o.a.createElement("p",{className:"degree-description"},o.a.createElement(R,{msg:r}))))}}]),t}(o.a.Component)),H=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{icon:w.j,title:{en:"Education",fr:"Formation"}},o.a.createElement(O,{start:r()("2008","YYYY"),end:r()("2011","YYYY"),title:{en:o.a.createElement(o.a.Fragment,null,"Two-year degree in"," ",o.a.createElement("a",{href:"http://www.iut-lannion.fr/presentation/dut-informatique",target:"_blank"},"Computer Science")),fr:"DUT Informatique"},description:{en:o.a.createElement(o.a.Fragment,null,"At the"," ",o.a.createElement("a",{href:"http://www.iut-lannion.fr/english",target:"_blank"},"Lannion Institue of Technology (France)")," ","with an emphasis on software engineering"),fr:"Délivré par l'IUT de Lannion, option génie logiciel"}}),o.a.createElement(O,{end:r()("2008","YYYY"),title:{en:"Science A-levels",fr:"Baccalauréat S"},description:{en:"With an emphasis on mathematics and engineering sciences",fr:"Mention assez bien, option sciences de l'ingénieur, spécialité mathématiques"}}))}}]),t}(o.a.Component),_=Object(C.a)({tag:"svg",attr:{viewBox:"0 0 554.648 554.648"},child:[{tag:"path",attr:{d:"M533.197,437.046l-56.515,41.76c-3.385,2.505-10.461,2.716-14.009,0.363l-49.515-32.646    c-12.737-8.415-32.016-8.511-44.811-0.182l-50.71,32.904c-3.901,2.506-11.818,2.563-15.739,0.096l-52.69-33.277    c-13.148-8.281-32.427-7.487-44.848,1.855l-40.937,30.829c-3.385,2.562-10.404,2.802-13.971,0.487L98.763,446.36    c-13.34-8.674-32.627-7.517-44.829,2.677L4.849,489.975c-5.718,4.762-6.483,13.254-1.74,18.972    c2.687,3.194,6.521,4.849,10.366,4.849c3.041,0,6.11-1.033,8.625-3.127l49.084-40.938c3.118-2.61,9.486-2.983,12.891-0.774    l50.71,32.896c13.11,8.52,32.407,7.821,44.857-1.568l40.937-30.83c3.395-2.591,10.586-2.897,14.21-0.593l52.709,33.277    c12.813,8.081,32.054,7.966,44.781-0.277l50.71-32.904c3.825-2.467,11.522-2.429,15.3,0.076l49.515,32.637    c13.015,8.616,32.331,8.109,44.877-1.166l56.515-41.77c5.977-4.427,7.229-12.871,2.82-18.848    C547.617,433.871,539.174,432.609,533.197,437.046z"},child:[]},{tag:"path",attr:{d:"M338.457,398.146l126.865-80.019c8.932-5.642,15.73-18.781,14.143-29.232C459.136,154.761,316.836,64.061,196.166,41.188    c-10.375-1.96-15.749,4.934-11.896,14.764l131.035,334.592C319.159,400.384,329.525,403.788,338.457,398.146z"},child:[]},{tag:"path",attr:{d:"M92.203,249.516c14.506,0,26.288-11.781,26.288-26.229c0-14.506-11.781-26.288-26.288-26.288    c-14.497,0-26.278,11.781-26.278,26.288C65.925,237.725,77.706,249.516,92.203,249.516z"},child:[]},{tag:"path",attr:{d:"M76.922,291.687l27.827,63.485c4.313,9.448,13.952,16.104,25.006,16.104h75.266l43.271,41.616    c6.971,6.483,17.872,6.033,24.413-0.89c6.474-7.019,6.139-17.92-0.842-24.461l-49.868-47.315    c-3.022-2.706-6.579-4.427-11.609-4.427h-50.854l-23.007-51.131h27.435c0,0,5.767-0.335,8.807-2.706l45.594-20.541    c3.328-2.372,5.584-6.35,5.584-10.787c0-7.143-5.862-13.053-13.053-13.053c-1.827,0-3.538,0.382-4.208,0.832l-41.951,19.029    l-73.861,0.201c-15.845,0.038-25.389,7.679-21.315,17.06C73.623,284.084,76.922,291.687,76.922,291.687z"},child:[]}]}),J=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{className:"interests",icon:w.o,title:{en:"Interests",fr:"Centres d'intérêt"}},o.a.createElement(I,{left:o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{icon:w.d,text:{en:"Personal projects",fr:"Projets personnels"}}),o.a.createElement(D,{icon:_,text:{en:"Windsurf",fr:"Planche à voile"}})),right:o.a.createElement(o.a.Fragment,null,o.a.createElement(D,{icon:w.b,text:{en:"Chess",fr:"Jeu d'échecs"}}),o.a.createElement(D,{icon:w.a,text:{en:"Reading",fr:"Lecture"}}))}))}}]),t}(o.a.Component),z=(n(34),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.url,a=e.logo;return o.a.createElement("h5",{className:"company"},o.a.createElement("a",{className:"company-name",href:n,target:"_blank"},o.a.createElement("img",{className:"company-logo",src:a}),o.a.createElement("br",null),t))}}]),t}(o.a.Component)),B=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.start,n=e.end,r=Object(a.duration)(n.diff(t)).add(2,"months"),l=r.years(),c=r.months()%12,i=l?l>1?o.a.createElement(R,{msg:{en:"".concat(l," years"),fr:"".concat(l," ans")}}):o.a.createElement(R,{msg:{en:"".concat(l," year"),fr:"".concat(l," an")}}):null,s=c?c>1?o.a.createElement(R,{msg:{en:"".concat(c," months"),fr:"".concat(c," mois")}}):o.a.createElement(R,{msg:{en:"".concat(c," month"),fr:"".concat(c," mois")}}):null;return o.a.createElement(o.a.Fragment,null,i,i&&s?" ":"",s)}}]),t}(o.a.Component),Q=(n(35),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.start,n=e.end,a=e.company,r=e.title,l=e.description,c=e.languages,i=e.databases,s=e.frameworks;return o.a.createElement("div",{className:"job"},o.a.createElement("div",{className:"job-company"},a?o.a.createElement(z,a):null),o.a.createElement(T,{title:o.a.createElement(o.a.Fragment,null,t.format("MMMM YYYY")," - ",n.format("MMMM YYYY")," (",o.a.createElement(B,{start:t,end:n}),")")},o.a.createElement("h4",{className:"job-title"},o.a.createElement(R,{msg:r})),o.a.createElement("p",{className:"job-tools"},c.map((function(e){return o.a.createElement("span",{key:e,className:"job-tool"},e)})),o.a.createElement(P,{icon:w.c,color:"#009a49"}),s.map((function(e){return o.a.createElement("span",{key:e,className:"job-tool"},e)})),o.a.createElement(P,{icon:w.c,color:"#009a49"}),i.map((function(e){return o.a.createElement("span",{key:e,className:"job-tool"},e)}))),o.a.createElement(R,{msg:l})))}}]),t}(o.a.Component)),V=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{icon:w.t,title:{en:"Work experience",fr:"Expériences professionnelles"}},o.a.createElement(Q,{start:r()("2018-02","YYYY-MM"),end:r()("2019-09","YYYY-MM"),company:{name:"Comerso",url:"https://comerso.fr/en/homepage/",logo:n(36)},title:{en:"Full Stack Developer (React, Android, .Net)",fr:"Développeur fullstack (React, Android, .Net)"},description:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Comerso's goal is to help retail and industry adopt a zero-waste strategy with a strong technological approach. Comerso provides multiple solutions to handle the end of life of retail products :"),o.a.createElement("ul",null,o.a.createElement("li",null,"Logistics to donate products to non-profit organizations"),o.a.createElement("li",null,"Tools to help donate, track due dates and edit discounts for products"),o.a.createElement("li",null,"A portal to monitor and manage the end of life of products")),o.a.createElement("p",null,"As a team of four developers we worked in a scrum environment, and built up a modern continuous integration workflow based on Azue DevOps. As a full stack developer, I worked on various applications :"),o.a.createElement("ul",null,o.a.createElement("li",null,"The REST API backend (C#, .Net, .Net Core)"),o.a.createElement("li",null,"The internal administration frontend (React, Typescript)"),o.a.createElement("li",null,"C-Stats customer portal (React, Typescript)"),o.a.createElement("li",null,"Comerso android app, to track due dates and edit discounts for products"),o.a.createElement("li",null,"GefMobile android app, to track logistics between retailers and non-profit endpoints"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null))},languages:["Java","JS","C#","HTML/CSS"],databases:["SQLServer","SQLite"],frameworks:["Android","React",".Net"]}),o.a.createElement(Q,{start:r()("2016-01","YYYY-MM"),end:r()("2016-03","YYYY-MM"),company:{name:"Silamir",url:"http://silamir.com/en",logo:n(37)},title:{en:"Full Stack Developer (PHP, Angular, Cordova)",fr:"Développeur fullstack (PHP, Angular, Cordova)"},description:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Implementation of a mobile app to display a catalog of products for a large aeronautics industrial company :"),o.a.createElement("ul",null,o.a.createElement("li",null,"PHP REST API to manage and query the catalog"),o.a.createElement("li",null,"Cordova mobile app (Android and iOS) to view the catalog"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Développement d'applications web et mobile"))},languages:["PHP","JS","HTML/CSS"],databases:["MySQL","Solr"],frameworks:["Bootstrap","Angular","Cordova"]}),o.a.createElement(Q,{start:r()("2015-11","YYYY-MM"),end:r()("2015-12","YYYY-MM"),company:{name:"Consept",url:"https://www.consept.fr/",logo:n(38)},title:{en:"Backend Developer (Ruby)",fr:"Développeur backend (Ruby)"},description:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Implementation of a REST API for the company ITG using Ruby on Rails :"),o.a.createElement("ul",null,o.a.createElement("li",null,"User and client authentication"),o.a.createElement("li",null,"Mapping of an existing SQL Server database"),o.a.createElement("li",null,"Unit and functional testing"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Réalisation d'une API REST pour une société de portage salarial sur une base de données existante"))},languages:["Ruby"],databases:["SQLServer"],frameworks:["Ruby on Rails"]}),o.a.createElement(Q,{start:r()("2015-09","YYYY-MM"),end:r()("2015-10","YYYY-MM"),title:{en:"Full Stack Developer (PHP, Javascript)",fr:"Développeur fullstack (PHP, Javascript)"},description:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Implementation of a customer portal for the accounting company BDO :"),o.a.createElement("ul",null,o.a.createElement("li",null,"Dashboard with KPIs for agents and customers"),o.a.createElement("li",null,"Integration of an existing EDM"),o.a.createElement("li",null,"Messaging interface between agents and customers"),o.a.createElement("li",null,"Timeline with actions to perform for the customers"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Réalisation d'une plate-forme clients web responsive pour un grand groupe d'experts comptables"))},languages:["PHP","JS","HTML/CSS"],databases:["MySQL","Solr"],frameworks:["Bootstrap","jQuery"]}),o.a.createElement(Q,{start:r()("2011-04","YYYY-MM"),end:r()("2015-05","YYYY-MM"),company:{name:"FactorFX",url:"https://www.factorfx.com/",logo:n(39)},title:{en:"Full Stack Developer",fr:"Développeur fullstack"},description:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Enterprise service around open source software :"),o.a.createElement("ul",null,o.a.createElement("li",null,"Web and Android applications development"),o.a.createElement("li",null,"Custom plugin development for open-source software (OpenERP, Alfresco, OCS Inventory, GLPI, Redmine)"),o.a.createElement("li",null,"Reporting (Talend, Pentaho)"),o.a.createElement("li",null,"Trainings (OCS Inventory, GLPI)"),o.a.createElement("li",null,"Member of the OCS Inventory core team"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Service aux entreprises en open source : développements web et Android, plugins (OpenERP, Alfresco, OCS Inventory, GLPI, Redmine), solutions de reporting (Talend, Pentaho), formations"))},languages:["PHP","Java","Ruby","Python","JS","HTML/CSS"],databases:["MySQL","PostgreSQL","SQLServer"],frameworks:["Symfony","Rails","Android"]}))}}]),t}(o.a.Component),G=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{className:"profile",icon:w.q,title:{en:"Profile",fr:"Profil"}},o.a.createElement(R,{msg:{en:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"28 years old - Driving licence - French"),o.a.createElement("p",null,o.a.createElement("b",null,"Having recently moved to Dublin, I am now looking for a company that can provide a great team and Agile experience in a modern development workflow. I love code reviews, unit testing, automated builds and team happiness :)")),o.a.createElement("p",null,"After a two-year degree in software engineering, I have acquired a solid 6 years work experience centered around the web, mastering diverse frontend and backend technologies. I view myself as a generalist, being able to develop Android applications or React web frontends as well as PHP, Ruby or .Net backends. Passionate about open-source software, I like to try leading-edge technologies such as Rust or Elm and apply the lessons learned to my everyday code."),o.a.createElement("p",null,"This CV is powered by React, Typescript, SCSS and built by Webpack."),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/arthur-jaouen/cv",target:"_blank"},"View source on Github"))),fr:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"28 ans - Permis B"),o.a.createElement("p",null,o.a.createElement("b",null,"Having recently moved to Dublin, I am now looking for a company that can provide a great team and Agile experience in a modern development workflow. I love code reviews, unit testing, automated builds and team happiness :)")),o.a.createElement("p",null,"After a two-year degree in software engineering, I have acquired a solid 6 years work experience centered around the web, mastering diverse frontend and backend technologies. I view myself as a generalist, being able to develop Android applications or React web frontends as well as PHP, Ruby or .Net backends. Passionate about open-source software, I like to try leading-edge technologies such as Rust or Elm and apply the lessons learned to my everyday code."),o.a.createElement("p",null,"This CV is powered by React, Typescript, SCSS and built by Webpack."),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/arthur-jaouen/cv",target:"_blank"},"View source on Github")))}}))}}]),t}(o.a.Component),q=n(10),U=n.n(q),W=(n(57),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.rate;return o.a.createElement("div",{className:"skill"},o.a.createElement("p",{className:"skill-name"},o.a.createElement(R,{msg:t})),o.a.createElement("p",{className:"skill-rate"},U()(0,n).map((function(e){return o.a.createElement(P,{key:e,icon:w.s})})),U()(n,5).map((function(e){return o.a.createElement(P,{key:e,icon:w.p})}))))}}]),t}(o.a.Component)),X=(n(58),function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children;return o.a.createElement("div",{className:"skill-list"},o.a.createElement(T,{title:t},n))}}]),t}(o.a.Component)),K=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement(L,{icon:w.s,title:{en:"Skills",fr:"Compétences"}},o.a.createElement(X,{title:{en:"Frontend development",fr:"Développement frontend"}},o.a.createElement(W,{name:"Android",rate:5}),o.a.createElement(W,{name:"JS/TS",rate:5}),o.a.createElement(W,{name:"HTML",rate:5}),o.a.createElement(W,{name:"CSS",rate:5})),o.a.createElement(X,{title:{en:"Backend development",fr:"Développement backend"}},o.a.createElement(W,{name:"C#/.Net",rate:4}),o.a.createElement(W,{name:"PHP",rate:4}),o.a.createElement(W,{name:"Python",rate:3})),o.a.createElement(X,{title:{en:"Devops",fr:"Devops"}},o.a.createElement(W,{name:"Linux",rate:5}),o.a.createElement(W,{name:"Azure DevOps",rate:4}),o.a.createElement(W,{name:"Docker",rate:4})),o.a.createElement(X,{title:{en:"Languages",fr:"Langues"}},o.a.createElement(W,{name:"French",rate:5}),o.a.createElement(W,{name:"English",rate:4}),o.a.createElement(W,{name:"Spanish",rate:1}),o.a.createElement(W,{name:"Italian",rate:1})))}}]),t}(o.a.Component),Z=function(e){function t(){return u()(this,t),f()(this,h()(t).apply(this,arguments))}return v()(t,e),p()(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"layout-container"},o.a.createElement("header",null,o.a.createElement("div",{className:"sticky"},o.a.createElement("div",{className:"pdf-download"},o.a.createElement(R,{msg:{en:o.a.createElement("a",{href:"CV Arthur JAOUEN.pdf",target:"_blank"},o.a.createElement(P,{icon:w.g})," PDF"),fr:o.a.createElement("a",{href:"CV Arthur JAOUEN.pdf",target:"_blank"},o.a.createElement(P,{icon:w.h}),o.a.createElement(P,{icon:w.e}))}})),o.a.createElement(x,null),o.a.createElement(A,{image:n(59),name:"Arthur JAOUEN",title:{en:"Full Stack Developer",fr:"Développeur Fullstack"}}),o.a.createElement(j,null),o.a.createElement(G,null),o.a.createElement(J,null))),o.a.createElement("main",null,o.a.createElement(V,null)),o.a.createElement("aside",null,o.a.createElement("div",{className:"sticky"},o.a.createElement("div",{className:"education-container"},o.a.createElement(H,null)),o.a.createElement("div",{className:"skills-container"},o.a.createElement(K,null)))))}}]),t}(o.a.Component);n(60),n(61),n(62);r.a.locale("en"),i.a.render(o.a.createElement((function(){return o.a.createElement(k,null,o.a.createElement(Z,null))}),null),document.getElementById("root"))}});
//# sourceMappingURL=main.8064a4525c7892575b16.js.map