import {Carousel} from "./carousel.js";
import data from "./data.js";
import {SubContainer} from "./subcontainer.js";


const root = {
    init(){
        const root = document.querySelector("#root");
        const carousel = new Carousel(data.Mini);
        const subContainer = new SubContainer({carousel,title:"title",content:"content",url:"URL"});
        root.innerHTML = subContainer.render();
        console.log(subContainer.render());
        carousel.enrollEvent();
    }
}

root.init();