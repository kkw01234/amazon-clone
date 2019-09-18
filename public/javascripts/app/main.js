import {Carousel} from "./carousel.js";
import data from "./data.js";
import {SubContainer} from "./subcontainer.js";
import dummy from "./dummy.js";
import {CardCategory} from "./cardcategory.js"
import {MainContainer} from "./maincontainer.js";

const root = {
    init(){
        const root = document.querySelector("#root");
       
        root.innerHTML = "";
        const cards = dummy.main.reduce((prev,curr)=>{
            const cardcategory = new CardCategory({title:curr.title,backgroundColor:curr.backgroundColor,image:curr.image,count:curr.button});
            prev.push(cardcategory);
            return prev;
        },[]);
        const maincontainer = new MainContainer({cards});
        root.insertAdjacentHTML("beforeend",maincontainer.render()); 
        cards.forEach(value=>{
            value.addEventListner();
        });
        // const underCarousel = new Carousel({cards:["<div>test</div>"],width:200});
        // root.insertAdjacentHTML("beforeend",underCarousel.render());
        const miniCarousel = new Carousel({cards:dummy.Mini,width:12.8,height:0,title:"mini"});
        const subContainer = new SubContainer({carousel:miniCarousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        root.insertAdjacentHTML("beforeend",subContainer.render()); 
        miniCarousel.enrollEvent();
    }
}

root.init();