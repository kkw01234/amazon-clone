
export class Carousel {
    /**
     * @constructor
     * @param {Array} cards carousel에 넣을 html을 가지고 있는 배열 ex : [{html:"<div></div>"}]
     */
    constructor({cards,width = 0,height = 0,title = "none",emitter}) {
        this.title = title;
        this.cards = cards; 
        this.status = 1;
        this.width = width;
        this.height = height;
        this.emitter = emitter;

    }
    render() {
        return /*html*/`<div class="carousel-viewport carousel-${this.title.toLowerCase()}">
        <div class="arrow">
        <img src="/images/forwardarrow.svg" class="arrow-img left-arrow">
        </div>
        <div class="carousel-main">
        <ol class="carousel-list">
        ${this.makeLi()}
         </ol>
         </div>
         <div class="arrow">
          <img src="/images/backarrow.svg" class="arrow-img right-arrow">
        </div>
      </div>`
    }
    makeLi(){
        let list = this.cards.reduce((prev,curr,idx)=>{
            prev +=/*html*/ `<li class="carousel-card ${idx+1}">
                                ${curr.render()}
                            </li>`;
            return prev;
        },"");
        return list;
    }
    enrollEvent() {
        this.carouselViewPort = document.querySelector(`.carousel-${this.title.toLowerCase()}`);
        this.left = this.carouselViewPort.querySelector(".left-arrow");
        this.right = this.carouselViewPort.querySelector(".right-arrow");
        this.carouselMain = this.carouselViewPort.querySelector(".carousel-main");
        this.carouselList = this.carouselViewPort.querySelector(".carousel-list");
        this.carouselMain.style.width = this.width === 0 ? "auto" : this.width+"rem";
        this.carouselList.style.transform = `translateX(${this.width})`;
        this.carouseCards = this.carouselList.children;
        const lastCard = this.carouseCards[this.carouseCards.length-1];
        const firstCard = this.carouseCards[0]
        this.carouselList.appendChild(firstCard.cloneNode(true));
        this.carouselList.insertBefore(lastCard.cloneNode(true),this.carouselList.firstChild);
        this.carouselList.style.transform = `translateX(${-this.width}rem)`;
        this.right.addEventListener("click", this.rightHandler.bind(this));
        this.left.addEventListener("click", this.leftHandler.bind(this));
        this.carouselList.addEventListener("transitionend", this.endTransitionHandler.bind(this));
        if(this.emitter)
            this.emitter.insertObject(this.moveCards.bind(this));
        // this.interval = setInterval(this.leftHandler.bind(this),1000*3);
        // this.carouselViewPort.addEventListener('mouseover',()=>{clearInterval(this.interval)});
        // this.carouselViewPort.addEventListener('mouseout',()=>{this.interval = setInterval(this.rightHandler.bind(this),1000*3)});
        
    }
    leftHandler() {
        this.status--;
        this.carouselList.style.transition = "0.5s"
        this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
    }
    rightHandler() {
        this.status++;
        this.carouselList.style.transition =  "0.5s"
        this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
    }
     // transform : translateX(-12.8rem);
    endTransitionHandler(e){
        if(this.status === 0 ){
            this.status = this.cards.length;
            this.carouselList.style.transition = ``;
            this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
        }else if(this.status === this.cards.length){
            this.status = 0;
            this.carouselList.style.transition = ``;
            this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
        }
    }
    moveCards(target){
        this.status = target.getAttribute("data-value");
        this.carouselList.style.transition = "0.5s";
        this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
    }
}


