import {Carousel} from "./carousel.js";
import data from "./data.js";



const root = {
    init(){
        const root = document.querySelector("#root");
        const carousel = new Carousel(data.Mini);
        root.innerHTML = carousel.render();
        carousel.enrollEvent();
    }
}

root.init();