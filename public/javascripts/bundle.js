!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){t.exports=s(1)},function(t,e,s){"use strict";s.r(e);class i{constructor({cards:t,width:e=0,height:s=0,title:i="none",emitter:r,interval:a=!1}){this.title=i,this.cards=t,this.status=1,this.width=e,this.height=s,this.emitter=r,this.interval=a}render(){return`<div class="carousel-viewport carousel-${this.title.toLowerCase()}">\n        <div class="arrow">\n        <img src="/images/forwardarrow.svg" class="arrow-img left-arrow">\n        </div>\n        <div class="carousel-main">\n        <ol class="carousel-list">\n        ${this.makeLi()}\n         </ol>\n         </div>\n         <div class="arrow">\n          <img src="/images/backarrow.svg" class="arrow-img right-arrow">\n        </div>\n      </div>`}makeLi(){return this.cards.reduce((t,e,s)=>t+=`<li class="carousel-card  ${s+1}" data-type="${e.className}" data-value="${s+1}">\n                                ${e.render()}\n                            </li>`,"")}enrollEvent(){this.carouselViewPort=document.querySelector(`.carousel-${this.title.toLowerCase()}`),this.left=this.carouselViewPort.querySelector(".left-arrow"),this.right=this.carouselViewPort.querySelector(".right-arrow"),this.carouselMain=this.carouselViewPort.querySelector(".carousel-main"),this.carouselList=this.carouselViewPort.querySelector(".carousel-list"),this.carouselMain.style.width=0===this.width?"auto":this.width+"rem",this.carouselList.style.transform=`translateX(${this.width})`,this.carouselCards=this.carouselList.querySelectorAll(".carousel-card");const t=this.carouselCards[this.carouselCards.length-1],e=this.carouselCards[0];this.carouselList.appendChild(e.cloneNode(!0)),this.carouselList.insertBefore(t.cloneNode(!0),this.carouselList.firstChild),this.carouselList.style.transform=`translateX(${-this.width}rem)`,this.right.addEventListener("click",this.rightHandler.bind(this)),this.left.addEventListener("click",this.leftHandler.bind(this)),this.carouselList.addEventListener("transitionend",this.endTransitionHandler.bind(this)),this.emitter&&this.emitter.insertEvent("moveCards",this.moveCards.bind(this)),this.interval&&(this.interval=setInterval(this.rightHandler.bind(this),3e3),this.carouselViewPort.addEventListener("mouseover",()=>{clearInterval(this.interval)}),this.carouselViewPort.addEventListener("mouseout",()=>{this.interval=setInterval(this.rightHandler.bind(this),3e3)}))}leftHandler(){this.status--,this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`,this.emitter&&this.emitter.notify(`moveMainCard-${this.carouselCards[this.status?this.status-1:this.cards.length-1].getAttribute("data-type")}`,{target:this.carouselCards[this.status?this.status-1:this.cards.length-1]})}rightHandler(){this.status++,this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`,this.emitter&&this.emitter.notify(`moveMainCard-${this.carouselCards[this.status>this.cards.length?0:this.status-1].getAttribute("data-type")}`,{target:this.carouselCards[this.status>this.cards.length?0:this.status-1]})}endTransitionHandler(t){0===this.status?(this.status=this.cards.length,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`):this.status===this.cards.length&&(this.status=0,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`)}moveCards(t){this.status=t.getAttribute("data-value"),this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`}}class r{constructor({carousel:t,title:e,content:s,url:i}){this.carousel=t,this.title=e,this.content=s,this.url=i}render(){return`<div class="sub-container">\n                            ${this.carousel.render()}\n                            <div class="sub-right">\n                                <div class="sub-title">\n                                    ${this.title}\n                                </div>\n                                <div class="sub-content">\n                                    ${this.content}\n                                </div>\n                                <div class="sub-url">\n                                <a href="${this.url}">Explore Prime Video ></a>\n                                </div>\n                            </div>\n                        </div>`}}class a{constructor({title:t,image:e,backgroundColor:s,count:i=0,nowCount:r=0,emitter:a}){this.title=t,this.image=e,this.backgroundColor=s,this.count=i,this.nowCount=r,this.emitter=a}render({idx:t}){return`\n        <div class="category-card ${this.title.toLowerCase()}-card ${t?"":"card-clicked"}" style="background-color:${this.backgroundColor}">\n            <div class="category-title">${this.title}</div>\n            <div class="category-content ${this.title.toLowerCase()}-content">${this.appendSmallCircle()}</div>\n        </div>`}appendSmallCircle(){let t="";for(let e=0;e<this.count;e++)t+=`<div class="circle ${this.title.toLowerCase()}-${e+1}" data-value="${this.nowCount+e+1}"></div>`;return t}enrollEvent(){this.categoryCard=document.querySelector(`.${this.title.toLowerCase()}-card`),this.categoryContent=this.categoryCard.querySelector(".category-content"),this.categoryCard.addEventListener("click",this.clickCardHandler.bind(this)),this.categoryContent.addEventListener("click",this.clickCircleHandler.bind(this)),this.defaultCircle(),this.emitter&&this.emitter.insertEvent(`moveMainCard-${this.title}`,this.clickCardHandler.bind(this),this.clickCircleHandler.bind(this))}clickCardHandler(t){if(this.categoryCard.classList.contains("card-clicked"))return;document.querySelectorAll(".category-card").forEach(t=>{t.classList.remove("card-clicked")}),this.categoryCard.classList.add("card-clicked"),this.defaultCircle(),this.emitter&&this.emitter.notify("moveCards",this.categoryCard.querySelector(".circle"))}clickCircleHandler(t){this.categoryContent.childNodes.forEach(e=>{t.target.getAttribute("data-value")===e.getAttribute("data-value")?e.classList.add("circle-active"):e.classList.remove("circle-active")}),this.emitter&&this.emitter.notify("moveCards",t.target)}defaultCircle(){this.categoryContent.childNodes.forEach(t=>{t.classList.remove("circle-active")}),this.categoryContent.firstChild.classList.add("circle-active")}}class n{constructor({cards:t,bottomCarousel:e}){this.cards=t,this.bottomCarousel=e}render(){return`<div class="main-container">\n                            <div>\n                                <div class="benefit-cards">${this.insertCardCategory()}</div>\n                            </div>\n                            <div>\n                                ${this.bottomCarousel.render()}\n                            </div>\n                        </div>`}insertCardCategory(){return this.cards.reduce((t,e,s)=>t+=e.render({idx:s}),"")}}class o{constructor(t){this.url=t}render(){return`<img src="${this.url}">`}}class l{constructor({className:t,image:e,title:s,head:i,content:r,url:a,urlContent:n,width:o,color:l,height:c=15}){this.className=t,this.image=e,this.title=s,this.head=i,this.content=r,this.url=a,this.urlContent=n,this.width=o,this.height=c,this.color=l}render(){return`<div class="bottom-card ${this.className}" \n                            style="background-image:url(${this.image});\n                            width:${this.width}rem;\n                            height:${this.height}rem">\n                            <div class="bottom-main">\n                                <div class="bottom-title" style="background-color:${this.color}">\n                                    ${this.title}\n                                </div>\n                                <div class="bottom-head">\n                                    ${this.head}\n                                </div>\n                                <div class="bottom-content">\n                                    ${this.content}\n                                </div>\n                                <div class="bottom-url">\n                                    <a href="${this.url}">${this.urlContent}</a>\n                                </div>\n                            </div>\n                        </div>`}setBackground(){}}class c{constructor(){this.objects=[],this.event={}}insertObject(t){this.objects.push(t)}insertEvent(t,...e){this.event[t]=e}deleteObject(t){const e=this.objects.indexOf(t);this.objects.splice(e,1)}deleteEvent(t){delete this.event[t]}notifyAll(t){console.log(this.objects),this.objects.forEach(e=>{e(t)})}notify(t,e){this.event[t].forEach(t=>{t(e)})}}const h={render:()=>"<footer>copyrightⓒBoostcamp-membership/ss08</footer>"},d={render:()=>'<header style="background-color:black"><img src="../../images/logo.png"></header>'};({root:document.querySelector("#root"),init(){this.root.innerHTML="",this.carouselemitter=new c,console.time("start1"),Promise.all([fetch("/data/maincard.json"),fetch("/data/bottomcarousel.json")]).then(async t=>{await this.makeCardCategory(t[0]),await this.makeBottomCard(t[1]),this.makeMainContainer()}).then(()=>{Promise.all([fetch("/data/minicarousel.json"),fetch("/data/sub.json")]).then(async t=>{await this.makeMiniCarousel(t[0]),await this.makeSubContainer(t[1])}).then(()=>{this.render(),this.enrollEvent()})}).catch(t=>{console.log(t)})},async makeCardCategory(t){const e=await t.json();let s=0;this.cards=e.main.reduce((t,e)=>{const i=new a({title:e.title,backgroundColor:e.color,image:e.image,count:e.button,nowCount:s,emitter:this.carouselemitter});return s+=e.button,t.push(i),t},[])},async makeBottomCard(t){const e=await t.json();this.bottomcards=e.result.reduce((t,e,s)=>(t.push(new l({className:e.type,title:e.title,head:e.head,content:e.body,image:e.image,url:e.link,urlContent:e.tail,color:e.color,width:50})),t),[]),this.bottomCarousel=new i({cards:this.bottomcards,width:50,emitter:this.carouselemitter,interval:!1})},async makeMainContainer(){this.maincontainer=new n({cards:this.cards,bottomCarousel:this.bottomCarousel})},async makeMiniCarousel(t){const e=await t.json();console.log(e);const s=e.mini.reduce((t,e)=>(t.push(new o(e.image)),t),[]);this.miniCarousel=new i({cards:s,width:11.25,height:0,title:"mini",interval:!0})},async makeSubContainer(t){const e=await t.json();this.subContainer=new r({carousel:this.miniCarousel,title:e.sub[0].title,content:e.sub[0].content,url:e.sub[0].url})},render(){this.root.insertAdjacentHTML("afterbegin",d.render()),this.root.insertAdjacentHTML("beforeend",this.maincontainer.render()),this.root.insertAdjacentHTML("beforeend",this.subContainer.render()),this.root.insertAdjacentHTML("beforeend",h.render())},enrollEvent(){this.bottomCarousel.enrollEvent(),this.miniCarousel.enrollEvent(),this.cards.forEach(t=>{t.enrollEvent()})}}).init()}]);