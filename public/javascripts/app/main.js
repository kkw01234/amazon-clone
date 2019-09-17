import {Carousel} from "./carousel.js";




const root = {
    init(){
        const root = document.querySelector("#root");
        const carousel = new Carousel();
        root.innerHTML = carousel.render();
        carousel.enrollEvent();
    }
}

root.init();