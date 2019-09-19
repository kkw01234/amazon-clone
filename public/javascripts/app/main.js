import {Carousel} from "./carousel.js";
import data from "./data/data_rdb.js";
import {SubContainer} from "./subcontainer.js";
import dummy from "./data/dummy.js";
import {CardCategory} from "./cardcategory.js"
import {MainContainer} from "./maincontainer.js";
import {UrlImage} from "./carouselsource/urlimage.js";
import {BottomCard} from "./carouselsource/bottom.js";
import {EventEmitter} from "../eventemitter/eventemitter";
import {footer} from "./footer.js";
import {header} from "./header.js";

const root = {
    init(){
        const root = document.querySelector("#root");
        const carouselemitter = new EventEmitter();
        const bottomCarousel = new Carousel({cards:[],width:50,emitter:carouselemitter});
        let circleCount = 0;
        const cards = dummy.main.reduce((prev,curr)=>{
            const cardcategory = new CardCategory({
                                        title:curr.title,
                                        backgroundColor:curr.color,
                                        image:curr.image,
                                        count:curr.button,
                                        nowCount : circleCount,
                                        emitter : carouselemitter
                                        });
            circleCount +=curr.button;
            prev.push(cardcategory);
            return prev;
        },[]);
        const maincontainer = new MainContainer({cards,bottomCarousel});
        const bottomcards = data.result.reduce((prev,curr,idx)=>{
            prev.push(new BottomCard({
                className : curr.type,
                title : curr.title,
                head : curr.head,
                content : curr.body,
                image : curr.image,
                url : curr.link,
                urlContent : curr.tail,
                color : curr.color,
                width : 50
            }));
            return prev;
        },[]);
        bottomCarousel.cards = bottomcards;

        root.innerHTML = "";
        root.insertAdjacentHTML("beforeend",maincontainer.render()); 
        bottomCarousel.enrollEvent();
        cards.forEach(value=>{
            value.enrollEvent();
        });
        // const bottomContent = new BottomCard({className:"test",title:data.Ship[0].title,content:data.Ship[0].body,image:data.Ship[0].image,width:50});
        // const bottomContent2 = new BottomCard({className:"test",title:data.Ship[1].title,content:data.Ship[1].body,image:data.Ship[1].image,width:50});
        const images = dummy.Mini.reduce((prev,curr)=>{
            prev.push(new UrlImage(curr.image));
            return prev;
        },[]);
        const miniCarousel = new Carousel({cards:images,width:11.25,height:0,title:"mini"});
        const subContainer = new SubContainer({carousel:miniCarousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        root.insertAdjacentHTML("afterbegin",header.render());
        root.insertAdjacentHTML("beforeend",subContainer.render()); 
        root.insertAdjacentHTML("beforeend",footer.render());
        miniCarousel.enrollEvent();
        // bottomCarousel.enrollEvent();
    }
}

root.init();