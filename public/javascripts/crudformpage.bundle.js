!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}({0:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));const i=(t,e,n="black")=>{t.innerHTML=e,t.style.color=n},o=(t,e=document)=>e.querySelector(t)},6:function(t,e,n){"use strict";n.r(e);var i=n(0);(new class{constructor(){}init(){Object(i.a)(".insert-button").addEventListener("click",function(){this.upload()}.bind(this)),this.setOption()}render(){}setOption(){fetch("/adminpage/write/setoption").then(t=>t.json()).then(t=>{Object(i.a)("select[name=title]").innerHTML=t.reduce((t,e)=>t+=`<option value="${e.title}">${e.title}</option>`,"")})}upload(){if(this.image=Object(i.a)("input[name=image-file]"),this.head=Object(i.a)("input[name=head]").value,this.color=Object(i.a)("input[name=color]").value,this.title=Object(i.a)("select[name=title]").value,this.content=Object(i.a)("textarea[name=content]").value,this.urlContent=Object(i.a)("input[name=url-content]").value,this.link=Object(i.a)("input[name=link]").value,!(this.head&&this.color&&this.title&&this.content&&this.urlContent&&this.link&&this.image.files[0]))return console.log(this.head,this.color,this.title,this.content,this.urlContent,this.link),void alert("다시한번 확인 부탁드립니다.");const t=new FormData;console.log(this.image.files[0]),t.append("image",this.image.files[0]),t.append("head",this.head),t.append("color",this.color),t.append("title",this.title),t.append("content",this.content),t.append("url_content",this.urlContent),t.append("link",this.link),fetch("/adminpage/write/upload",{method:"post",body:t}).then(t=>t.json()).then(t=>{t.result?(alert("추가가 완료되었습니다."),window.location.href="/adminpage/read/main"):alert("다시한번 확인해주세요")})}}).init()}});