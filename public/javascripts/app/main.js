import {Carousel} from "./carousel.js";
import data from "./data/data.js";
import {SubContainer} from "./subcontainer.js";
import dummy from "./data/dummy.js";
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
            value.enrollEvent();
        });
        const bottomCarousel = new Carousel({cards:[{html:`<div>asdfsafsfsda</div>`},{html: `<div>test</div>`}],width:100});
        //여기에 들어갈 세부내용
        root.insertAdjacentHTML("beforeend",bottomCarousel.render());
        const miniCarousel = new Carousel({cards:dummy.Mini,width:11.25,height:0,title:"mini"});
        const subContainer = new SubContainer({carousel:miniCarousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        root.insertAdjacentHTML("beforeend",subContainer.render()); 
        miniCarousel.enrollEvent();
        bottomCarousel.enrollEvent();
    }
}

root.init();