import {Carousel} from "./carousel.js";
import data from "./data.js";
import {SubContainer} from "./subcontainer.js";
import dummy from "./dummy.js";
import {CardCategory} from "./cardcategory.js"

const root = {
    init(){
        const root = document.querySelector("#root");
        const cardcategory = new CardCategory({title:dummy.main[0].title,backgroundColor:"black", image : dummy.main[0].image,count:4})
        root.innerHTML = cardcategory.render();
        cardcategory.appendSmallCircle();
        // 미니캐로셀 띄우는 부분
        // const carousel = new Carousel(data.Mini);
        // const subContainer = new SubContainer({carousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        // root.innerHTML = subContainer.render(); 
        // carousel.enrollEvent();
    }
}

root.init();