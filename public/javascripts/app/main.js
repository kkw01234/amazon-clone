import {Carousel} from "./carousel.js";
import data from "./data.js";
import {SubContainer} from "./subcontainer.js";
import dummy from "./dummy.js";


const root = {
    init(){
        const root = document.querySelector("#root");
        const carousel = new Carousel(data.Mini);
        const subContainer = new SubContainer({carousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        root.innerHTML = subContainer.render(); 
        carousel.enrollEvent();
    }
}

root.init();