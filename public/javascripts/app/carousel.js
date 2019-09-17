import data from "./data.js";

export class Carousel {
    constructor(cards) {
        this.cards = cards;
        this.status = 0;
    }
    render() {
        return /*html*/`<div class="carousel-viewport">
        <button class="button left-button">
          왼쪽
        </button>
         <ol class="carousel-list">
        ${this.makeLi()}
         </ol>
          <button class="button right-button">
          오른쪽
        </button>
      </div>`
    }
    makeLi(){

        return this.cards.reduce((prev,curr,idx)=>{
            prev +=/*html*/ `<li class="carousel-card ${idx} ${idx === 0 ? "show" : "hidden"}"><img src="${curr.image}"></li>`
            return prev;
        },"");
    }
    enrollEvent() {
        const left = document.querySelector(".left-button");
        const right = document.querySelector(".right-button");
        const carouselList = document.querySelector(".carousel-list");
        const carouseCards = document.querySelectorAll(".carousel-card");
        right.addEventListener("click", this.rightHandler.bind(this, {carouseCards}));
        left.addEventListener("click", this.leftHandler.bind(this, {carouseCards}));
        carouselList.addEventListener("transitionend", this.endTransitionHandler.bind(this));
    }
    leftHandler({carouseCards}) {
        // console.log(this.status);
       
        const value = carouseCards[this.status];
        this.status = this.status - 1 < 0 ? this.cards.length-1:this.status -1;
        // const nextValue = carouseCards[this.status];
        
        value.style.transition = "0.5s all"
        value.style.transform = "translateX(-4rem)";
        this.buttonclick = "left";
      
    }
    rightHandler({carouseCards}) {
        const value = carouseCards[this.status];
        this.status = (this.status + 1) % this.cards.length;
        value.style.transition = "0.5s all"
        value.style.transform = "translateX(+4rem)";
        this.buttonclick = "right";
    }
    endTransitionHandler(e){
        const carouselList = document.querySelector(".carousel-list");
        console.log(this.status);
        const currentCard = e.target;
        const nextCard = carouselList.children[this.status];
        nextCard.classList.remove("hidden");
        nextCard.classList.add("show");
        currentCard.classList.remove("show");
        currentCard.classList.add("hidden");
        currentCard.style.transform = "";
        currentCard.style.transition = "";
    }
}


