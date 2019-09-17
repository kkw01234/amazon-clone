export class Carousel {
    constructor() {

    }
    render() {
        return /*html*/`<div class="carousel-viewport">
        <button class="button left-button">
          왼쪽
        </button>
         <ol class="carousel-list">
         <li class="carousel-card  1 show">
           테스트1
         </li>
         <li class="carousel-card 2 hidden">
           테스트2
         </li>
         <li class="carousel-card 3 hidden">
           테스트3
         </li>
         </ol>
          <button class="button right-button">
          오른쪽
        </button>
      </div>`;
    }
    enrollEvent() {
        const left = document.querySelector(".left-button");
        const right = document.querySelector(".right-button");
        right.addEventListener("click", this.rightHandler.bind(this));
        left.addEventListener("click", this.leftHandler.bind(this));
    }
    leftHandler() {

    }
    rightHandler() {
        const carouselList = document.querySelector(".carousel-list");
        const cards = document.querySelectorAll(".carousel-card");
        
        for (let i = 0; i < cards.length; i++) {
            const value = cards[i];
            if (value.classList.contains("show")) {
                const nextValue = cards[(i + 1) % cards.length];
                console.log(this);
                value.addEventListener("transitionend", this.endTransitionHandler.bind(this, {carouselList,value, nextValue}));
                value.style.transition = "0.5s all"
                value.style.transform = "translateX(-4rem)";
                break;
            }
        }
    }
    endTransitionHandler({carouselList, value, nextValue}){
        console.log(carouselList,value,nextValue);
        carouselList.removeChild(value);
        nextValue.classList.remove("hidden");
        nextValue.classList.add("show");
        value.classList.remove("show");
        value.classList.add("hidden");
        value.style.transform = "translateX(0rem)"
        carouselList.appendChild(value);
    }
}


