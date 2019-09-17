
export class Carousel {
    constructor(cards) {
        this.cards = cards;
        this.status = 1;
        this.imageWidth = 12.8;
        this.imageHeight = 0;
    }
    render() {
        return /*html*/`<div class="carousel-viewport">
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
        </button>
      </div>`
    }
    makeLi(){
        let list = this.cards.reduce((prev,curr,idx)=>{
            prev +=/*html*/ `<li class="carousel-card ${idx+1} ${idx === 0 ? "show" : "hidden"}"><img src="${curr.image}"></li>`
            return prev;
        },"");

        return list;
    }
    enrollEvent() {
        
        this.left = document.querySelector(".left-arrow");
        this.right = document.querySelector(".right-arrow");
        this.carouselMain = document.querySelector(".carousel-main");
        this.carouselList = document.querySelector(".carousel-list");
        this.carouseCards = this.carouselList.children;
        const lastCard = this.carouseCards[this.carouseCards.length-1];
        const firstCard = this.carouseCards[0]
        this.carouselList.appendChild(firstCard.cloneNode(true));
        this.carouselList.insertBefore(lastCard.cloneNode(true),this.carouselList.firstChild);
        this.right.addEventListener("click", this.rightHandler.bind(this));
        this.left.addEventListener("click", this.leftHandler.bind(this));
        this.carouselList.addEventListener("transitionend", this.endTransitionHandler.bind(this));
    }
    leftHandler() {
       
        this.status++;
        this.carouselList.style.transition = "0.5s"
        this.carouselList.style.transform = `translateX(${this.status*this.imageWidth}rem)`;

    }
    rightHandler() {
      
        this.status--;
        this.carouselList.style.transition = "0.5s"
        this.carouselList.style.transform = `translateX(${this.status*this.imageWidth}rem)`;
    }
    endTransitionHandler(e){
        console.log(`${e.target.className} finished`);
    }
}


