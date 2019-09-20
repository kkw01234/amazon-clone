import { EventEmitter } from "../eventemitter/eventemitter";

export class Carousel {
    /**
     * @description Carousel class
     * @constructor 
     * 
     * @param {Object} param option
     * @param {Array} param.cards 카드에 넣을 객체 배열
     * @param {Number} param.width Carousel 너비
     * @param {Number} param.height Carousel 높이
     * @param {String} param.title Carousel 이름
     * @param {EventEmitter} param.emitter 
     * @param {Boolean} param.interval 주기적으로 반복 여부
     */
    constructor({cards,width = 0,height = 0,title = "none",emitter,interval = false}) {
        this.title = title;
        this.cards = cards; 
        this.status = 1;
        this.width = width;
        this.height = height;
        this.emitter = emitter;
        this.interval = interval;
        
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
            prev +=/*html*/ `<li class="carousel-card  ${idx+1}" data-type="${curr.className}" data-value="${idx+1}">
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
        this.carouselMain.style.height = this.height === 0 ? "auto" : this.height+"rem";
        this.carouselList.style.transform = `translateX(${this.width})`;
        this.carouselCards = this.carouselList.querySelectorAll(".carousel-card");
        const lastCard = this.carouselCards[this.carouselCards.length-1];
        const firstCard = this.carouselCards[0]
        this.carouselList.appendChild(firstCard.cloneNode(true));
        this.carouselList.insertBefore(lastCard.cloneNode(true),this.carouselList.firstChild);
        this.carouselList.style.transform = `translateX(${-this.width}rem)`;
        this.right.addEventListener("click", this.rightHandler.bind(this));
        this.left.addEventListener("click", this.leftHandler.bind(this));
        this.carouselList.addEventListener("transitionend", this.endTransitionHandler.bind(this));
        if(this.emitter)
            this.emitter.insertEvent("moveCards",this.moveCards.bind(this));
        if(this.interval){
            this.interval = setInterval(this.rightHandler.bind(this),1000*3);
            this.carouselViewPort.addEventListener('mouseover',()=>{clearInterval(this.interval);delete this.interval;});
            this.carouselViewPort.addEventListener('mouseout',()=>{this.interval = setInterval(this.rightHandler.bind(this),1000*3);});    
        }
             
    }
    leftHandler() {
        this.status--;
        this.setTransform();
        if(this.emitter){
            const status = this.status ? this.status-1 : this.cards.length-1;
            this.emitter.notify(`moveMainCard-${this.carouselCards[status].getAttribute("data-type")}`,{target:this.carouselCards[status]});

        }
              
    }
    rightHandler() {
        this.status++;
        console.log(this.status);
        this.setTransform();
        if(this.emitter){
            const status = this.status > this.cards.length ? 0 : this.status-1;
            this.emitter.notify(`moveMainCard-${this.carouselCards[status].getAttribute("data-type")}`,{target:this.carouselCards[status]});
        }
            
    }
    setTransform(){
        this.carouselList.style.transition = "0.5s"
        this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
    }
    endTransitionHandler(e){
        console.log("end",this.status);
        if(this.status <= 0 ){
            this.status = this.cards.length;
            this.carouselList.style.transition = ``;
            this.carouselList.style.transform = `translateX(${-this.status*this.width}rem)`;
        }else if(this.status >= this.cards.length){
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


