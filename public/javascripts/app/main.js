import {Carousel} from "./carousel.js";
import data from "./data.js";



const root = {
    init(){
        const root = document.querySelector("#root");
        console.log(data.Ship);
        const carousel = new Carousel(data.Ship);
        root.innerHTML = carousel.render();
        carousel.enrollEvent();
    }
}

root.init();