!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){e.exports=i(1)},function(e,t,i){"use strict";i.r(t);class a{constructor({cards:e,width:t=0,height:i=0,title:a="none",emitter:s}){this.title=a,this.cards=e,this.status=1,this.width=t,this.height=i,this.emitter=s}render(){return`<div class="carousel-viewport carousel-${this.title.toLowerCase()}">\n        <div class="arrow">\n        <img src="/images/forwardarrow.svg" class="arrow-img left-arrow">\n        </div>\n        <div class="carousel-main">\n        <ol class="carousel-list">\n        ${this.makeLi()}\n         </ol>\n         </div>\n         <div class="arrow">\n          <img src="/images/backarrow.svg" class="arrow-img right-arrow">\n        </div>\n      </div>`}makeLi(){return this.cards.reduce((e,t,i)=>e+=`<li class="carousel-card  ${i+1}" data-type="${t.className}" data-value="${i+1}">\n                                ${t.render()}\n                            </li>`,"")}enrollEvent(){this.carouselViewPort=document.querySelector(`.carousel-${this.title.toLowerCase()}`),this.left=this.carouselViewPort.querySelector(".left-arrow"),this.right=this.carouselViewPort.querySelector(".right-arrow"),this.carouselMain=this.carouselViewPort.querySelector(".carousel-main"),this.carouselList=this.carouselViewPort.querySelector(".carousel-list"),this.carouselMain.style.width=0===this.width?"auto":this.width+"rem",this.carouselList.style.transform=`translateX(${this.width})`,this.carouseCards=this.carouselList.querySelectorAll(".carousel-card");const e=this.carouseCards[this.carouseCards.length-1],t=this.carouseCards[0];this.carouselList.appendChild(t.cloneNode(!0)),this.carouselList.insertBefore(e.cloneNode(!0),this.carouselList.firstChild),this.carouselList.style.transform=`translateX(${-this.width}rem)`,this.right.addEventListener("click",this.rightHandler.bind(this)),this.left.addEventListener("click",this.leftHandler.bind(this)),this.carouselList.addEventListener("transitionend",this.endTransitionHandler.bind(this)),this.emitter&&this.emitter.insertEvent("moveCards",this.moveCards.bind(this))}leftHandler(){this.status--,this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`,this.emitter&&this.emitter.notify(`moveMainCard-${this.carouseCards[this.status?this.status-1:this.cards.length-1].getAttribute("data-type")}`,{target:this.carouseCards[this.status?this.status-1:this.cards.length-1]})}rightHandler(){this.status++,this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`,console.log(this.status),this.emitter&&this.emitter.notify(`moveMainCard-${this.carouseCards[this.status>this.cards.length?0:this.status-1].getAttribute("data-type")}`,{target:this.carouseCards[this.status>this.cards.length?0:this.status-1]})}endTransitionHandler(e){0===this.status?(this.status=this.cards.length,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`):this.status===this.cards.length&&(this.status=0,this.carouselList.style.transition="",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`)}moveCards(e){this.status=e.getAttribute("data-value"),this.carouselList.style.transition="0.5s",this.carouselList.style.transform=`translateX(${-this.status*this.width}rem)`}}var s={result:[{type:"Ship",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A01._CB514650866_.jpg",title:"FAST, FREE DELIVERY",head:"Fast, FREE delivery on over 100 million items",body:"Super-fast delivery, tens of millions of items, and flexible delivery options to fit your life. Plus, Prime members get FREE One-Day Delivery on tens of millions of items.",tail:"Explore Prime Delivery",link:"https://www.amazon.com/b?node=15247183011",color:"#00A8E1"},{type:"Ship",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A02._CB514650866_.jpg",title:"SAME-DAY DELIVERY",head:"FREE Same-Day Delivery",body:"Prime members get FREE Same-Day Delivery on over three million items with qualifying orders.",tail:"Explore Same-Day Delivery",link:"https://www.amazon.com/b?node=8729023011",color:"#00A8E1"},{type:"Ship",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A03._CB514650829_.jpg",title:"RELEASE DAY DELIVERY",head:"Skip the lines and get it on release day",body:"No more waiting in line! Choose Free Release-Date Delivery at checkout on qualified items, and your package will be delivered on the release day by 7pm.",tail:"Explore Release-Date Delivery",link:"https://www.amazon.com/b?node=16067347011",color:"#00A8E1"},{type:"Ship",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_A04._CB494909365_.jpg",title:"PRIME NOW",head:"Ultrafast delivery on thousands of items",body:"Prime Now offers household items and essentials you need everyday plus the best of Amazon, delivered to your doorstep. Choose 2-hour delivery or 1-hour delivery in select cities.",tail:"Explore Prime Now",link:"https://primenow.amazon.com/onboard?sourceUrl=%2F",color:"#00A8E1"},{type:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B01._CB457663232_.jpg",title:"PRIME VIDEO",head:"Watch movies, TV, live events, and more",body:"As a Prime member, you can watch exclusive Amazon Originals and thousands of popular movies and TV shows—all at no extra cost. Watch at home or on the go with practically any device.",tail:"Explore Prime Video",link:"https://www.amazon.com/b/ref=dvm_us_aq_np_dhb_be_optpvt1?node=2858778011",color:"#FF6138"},{type:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B02._CB513839286_.jpg",title:"TWITCH PRIME",head:"Free Games & Loot with Twitch Prime",body:"Gamers can get free games, in-game items, a free Twitch channel subscription every month and more with Twitch Prime.",tail:"Explore Twitch Prime",link:"https://twitch.amazon.com/prime",color:"#FF6138"},{type:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B03._CB513839286_.jpg",title:"PRIME MUSIC",head:"Millions of songs for every moment",body:"As a Prime member, you can stream over 2 million songs ad free, listen on any Echo device, and take your music anywhere with offline listening.",tail:"Explore Prime Music",link:"https://www.amazon.com/gp/dmusic/promotions/PrimeMusic?ref=hawkfire_prime_detail_page_benefit_desc",color:"#FF6138"},{type:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD12272_PrimeContentUpdate/Card_B04_AVD12272_PrimeContentUpdate_1280x400_en_US._CB474157036_.jpg",title:"AMAZON ORIGINALS",head:"Enjoy Amazon Original series and more",body:"Watch award-winning Amazon Originals like The Marvelous Mrs. Maisel, as well as exclusive series available only with Prime, including Goliath, Sneaky Pete, and The Grand Tour.",tail:"Explore Amazon Originals",link:"https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&merchId=originals1",color:"#FF6138"},{type:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_B05._CB514650828_.jpg",title:"AUDIBLE CHANNELS",head:"Original audio programs for life on the go",body:"Audible Channels are free with your Prime membership. Enjoy original audio series and playlists handcrafted for every interest. Just download the Audible app and start listening.",tail:"Explore Audible Channels",link:"https://www.audible.com/mt/getchannels",color:"#FF6138"},{type:"Shop",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C06._CB495022579_.jpg",title:"PRIME AT WHOLE FOODS MARKET",head:"Our healthiest benefit yet",body:"Exclusive savings for Prime members in all US stores, 5% Back for eligible Prime members with the Amazon Prime Rewards Visa Card, and 2-hour delivery with Prime Now in select cities (more soon)",tail:"Explore Prime at Whole Foods",link:"https://www.amazon.com/wholefoods",color:"#A90067"},{type:"Shop",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C01_revised._CB502880131_.jpg",title:"ALEXA VOICE SHOPPING",head:"The simplest way to shop. Just ask Alexa.",body:"With Alexa, shopping for essentials and reordering your favorite items from Amazon has never been easier.",tail:"Learn more about Alexa and Prime",link:"https://www.amazon.com/alexa-voice-shopping/b?ie=UTF8&node=14552177011",color:"#A90067"},{type:"Shop",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C03._CB511882458_.jpg",title:"JUST WITH PRIME",head:"Exclusive brands and deals available only to Prime members",body:"As a Prime member enjoy early access to deals, Prime exclusive brands, and savings.",tail:"Shop Prime Member Exclusives",link:"https://www.amazon.com/b?ie=UTF8&node=16205654011",color:"#A90067"},{type:"Shop",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_C04._CB514650828_.jpg",title:"AMAZON FAMILY",head:"Save on supplies for the family",body:"Prime members save 20% off both diapers and baby food when they have 5 or more subscriptions arriving",tail:"Explore Family Supplies",link:"https://www.amazon.com/gp/family/signup",color:"#A90067"},{type:"Read",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D01._CB514706473_.jpg",title:"PRIME READING",head:"Prime members read free",body:"As a Prime member, you can now read as much as you like from over a thousand top Kindle books, magazines, short works, books with Audible narration, comics, children's books and more—all at no additional cost.",tail:"Explore Prime Reading",link:"https://www.amazon.com/kindle-dbs/fd/prime-pr",color:"#36C2B4"},{type:"Read",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_D02._CB513839283_.jpg",title:"AMAZON FIRST READS",head:"Read next month's new releases today",body:"Each month, Prime members can download one editors' pick for free--before the official publication date. Downloaded titles are yours to keep.",tail:"Learn more about Amazon First Reads",link:"https://www.amazon.com/kindlefirst",color:"#36C2B4"},{type:"More",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E03._CB513839888_.jpg",title:"5% BACK",head:"Earn more with Prime Rewards",body:"Eligible Prime members can earn 5% back at Amazon.com using the Amazon Prime Rewards Visa Card or the Amazon Prime Store card. All Prime members earn 2% rewards with Amazon Prime Reload.",tail:"Learn more about Prime Rewards",link:"https://www.amazon.com/b?node=16914437011&ref=acqNPrewards",color:"#FFC400"},{type:"More",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/Card_E01._CB513839282_.jpg",title:"AMAZON PHOTOS",head:"Unlimited, free photo storage",body:"Back up and share your photos with unlimited photo storage. Add your photos to the free app to see them on all your devices.",tail:"Explore Amazon Photos",link:"https://www.amazon.com/b?node=13234696011",color:"#FFC400"}]};class r{constructor({carousel:e,title:t,content:i,url:a}){this.carousel=e,this.title=t,this.content=i,this.url=a}render(){return`<div class="sub-container">\n                            ${this.carousel.render()}\n                            <div class="sub-right">\n                                <div class="sub-title">\n                                    ${this.title}\n                                </div>\n                                <div class="sub-content">\n                                    ${this.content}\n                                </div>\n                                <div class="sub-url">\n                                <a href="${this.url}">Explore Prime Video ></a>\n                                </div>\n                            </div>\n                        </div>`}}var o={sub:[{title:"Amazon Originals, exclusively on Prime Video",content:'Prime Video is the only place where you can watch Amazon Original series like "The Marvelous Mrs. Maisel", "Tom Clancy\'s Jack Ryan", "Homecoming", and "The Man in the High Castle".',url_content:"Explore Prime Video",url:"https://www.amazon.com/gp/video/storefront/ref=dvm_us_aq_np_dhb_be_optorigt1?ie=UTF8&merchId=originals1"}],main:[{title:"Ship",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_A._CB513333159_.png",color:"#00A8E1",button:4},{title:"Stream",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_B._CB513285352_.png",color:"#FF6138",button:5},{title:"Shop",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_C._CB513285352_.png",color:"#A90067",button:4},{title:"Read",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_D._CB513285353_.png",color:"#36C2B4",button:2},{title:"More",image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/InteractivePlane_TILES_SpriteSheet_E._CB513285352_.png",color:"#FFC400",button:2}],Mini:[{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/81WN._CB481226577_.jpg"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/91GWBxUa._CB482706877_.jpg"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/91yXd._CB482706877_.jpg"},{image:"https://images-na.ssl-images-amazon.com/images/G/01/marketing/prime/detail_page/9159TQ-lLuL._CB461046093_.jpg"}]};class n{constructor({title:e,image:t,backgroundColor:i,count:a=0,nowCount:s=0,emitter:r}){this.title=e,this.image=t,this.backgroundColor=i,this.count=a,this.nowCount=s,this.emitter=r}render({idx:e}){return`\n        <div class="category-card ${this.title.toLowerCase()}-card ${e?"":"card-clicked"}">\n            <div class="category-title">${this.title}</div>\n            <div class="category-content ${this.title.toLowerCase()}-content">${this.appendSmallCircle()}</div>\n        </div>`}appendSmallCircle(){let e="";for(let t=0;t<this.count;t++)e+=`<div class="circle ${this.title.toLowerCase()}-${t+1}" data-value="${this.nowCount+t+1}"></div>`;return e}enrollEvent(){this.categoryCard=document.querySelector(`.${this.title.toLowerCase()}-card`),this.categoryContent=this.categoryCard.querySelector(".category-content"),this.categoryCard.addEventListener("click",this.clickHandler.bind(this)),this.categoryContent.addEventListener("click",this.circleClickHandler.bind(this)),this.defaultCircle(),this.emitter&&this.emitter.insertEvent(`moveMainCard-${this.title}`,this.clickHandler.bind(this),this.circleClickHandler.bind(this))}clickHandler(e){if(this.categoryCard.classList.contains("card-clicked"))return;document.querySelectorAll(".category-card").forEach(e=>{e.classList.remove("card-clicked")}),this.categoryCard.classList.add("card-clicked"),this.defaultCircle(),this.emitter&&this.emitter.notify("moveCards",this.categoryCard.querySelector(".circle"))}circleClickHandler(e){this.categoryContent.childNodes.forEach(t=>{console.log(e.target,t),e.target.getAttribute("data-value")===t.getAttribute("data-value")?t.classList.add("circle-active"):t.classList.remove("circle-active")}),this.emitter&&this.emitter.notify("moveCards",e.target)}defaultCircle(){this.categoryContent.childNodes.forEach(e=>{e.classList.remove("circle-active")}),this.categoryContent.firstChild.classList.add("circle-active")}}class l{constructor({cards:e,bottomCarousel:t}){this.cards=e,this.bottomCarousel=t}render(){return`<div class="main-container">\n                            <div>\n                                <div class="benefit-cards">${this.insertCardCategory()}</div>\n                            </div>\n                            <div>\n                                ${this.bottomCarousel.render()}\n                            </div>\n                        </div>`}insertCardCategory(){return this.cards.reduce((e,t,i)=>e+=t.render({idx:i}),"")}}class m{constructor(e){this.url=e}render(){return`<img src="${this.url}">`}}class d{constructor({className:e,image:t,title:i,head:a,content:s,url:r,urlContent:o,width:n,color:l,height:m=15}){this.className=e,this.image=t,this.title=i,this.head=a,this.content=s,this.url=r,this.urlContent=o,this.width=n,this.height=m,this.color=l}render(){return`<div class="bottom-card ${this.className}" \n                            style="background-image:url(${this.image});\n                            width:${this.width}rem;\n                            height:${this.height}rem">\n                            <div class="bottom-main">\n                                <div class="bottom-title" style="background-color:${this.color}">\n                                    ${this.title}\n                                </div>\n                                <div class="bottom-head">\n                                    ${this.head}\n                                </div>\n                                <div class="bottom-content">\n                                    ${this.content}\n                                </div>\n                                <div class="bottom-url">\n                                    <a href="${this.url}">${this.urlContent}</a>\n                                </div>\n                            </div>\n                        </div>`}setBackground(){}}class c{constructor(){this.objects=[],this.event={}}insertObject(e){this.objects.push(e)}insertEvent(e,...t){this.event[e]=t}deleteObject(e){const t=this.objects.indexOf(e);this.objects.splice(t,1)}deleteEvent(e){delete this.event[e]}notifyAll(e){console.log(this.objects),this.objects.forEach(t=>{t(e)})}notify(e,t){this.event[e].forEach(e=>{e(t)})}}const h={render:()=>"<footer>copyrightⓒBoostcamp-membership/ss08</footer>"},g={render:()=>'<header style="background-color:black"><img src="../../images/logo.png"></header>'};({init(){const e=document.querySelector("#root"),t=new c,i=new a({cards:[],width:50,emitter:t});let u=0;const p=o.main.reduce((e,i)=>{const a=new n({title:i.title,backgroundColor:i.color,image:i.image,count:i.button,nowCount:u,emitter:t});return u+=i.button,e.push(a),e},[]),y=new l({cards:p,bottomCarousel:i}),v=s.result.reduce((e,t,i)=>(e.push(new d({className:t.type,title:t.title,head:t.head,content:t.body,image:t.image,url:t.link,urlContent:t.tail,color:t.color,width:50})),e),[]);i.cards=v,e.innerHTML="",e.insertAdjacentHTML("beforeend",y.render()),i.enrollEvent(),p.forEach(e=>{e.enrollEvent()});const b=o.Mini.reduce((e,t)=>(e.push(new m(t.image)),e),[]),w=new a({cards:b,width:11.25,height:0,title:"mini"}),_=new r({carousel:w,title:o.sub[0].title,content:o.sub[0].content,url:o.sub[0].url});e.insertAdjacentHTML("afterbegin",g.render()),e.insertAdjacentHTML("beforeend",_.render()),e.insertAdjacentHTML("beforeend",h.render()),w.enrollEvent()}}).init()}]);