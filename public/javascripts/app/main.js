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

const rootContainer = {
    root : document.querySelector("#root"),
    init(){
        this.root.innerHTML = "";
        this.carouselemitter = new EventEmitter();
        this.bottomCarousel = new Carousel({cards:[],width:50,emitter:this.carouselemitter,interval : false});
        let circleCount = 0;
        this.cards = dummy.main.reduce((prev,curr)=>{
            const cardcategory = new CardCategory({
                                        title:curr.title,
                                        backgroundColor:curr.color,
                                        image:curr.image,
                                        count:curr.button,
                                        nowCount : circleCount,
                                        emitter : this.carouselemitter
                                        });
            circleCount +=curr.button;
            prev.push(cardcategory);
            return prev;
        },[]);
        this.maincontainer = new MainContainer({cards:this.cards,bottomCarousel:this.bottomCarousel});
        this.bottomcards = data.result.reduce((prev,curr,idx)=>{
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
        this.bottomCarousel.cards = this.bottomcards;
        const images = dummy.Mini.reduce((prev,curr)=>{
            prev.push(new UrlImage(curr.image));
            return prev;
        },[]);
        this.miniCarousel = new Carousel({cards:images,width:11.25,height:0,title:"mini",interval:true});
        this.subContainer = new SubContainer({carousel:this.miniCarousel,title:dummy.sub[0].title,content:dummy.sub[0].content,url:dummy.sub[0].url});
        
        // bottomCarousel.enrollEvent();
    },
    render(){
        this.root.insertAdjacentHTML("beforeend",this.maincontainer.render()); 
        this.root.insertAdjacentHTML("afterbegin",header.render());
        this.root.insertAdjacentHTML("beforeend",this.subContainer.render()); 
        this.root.insertAdjacentHTML("beforeend",footer.render());
        this.enrollEvent();
    },
    enrollEvent(){
        this.bottomCarousel.enrollEvent();
        this.miniCarousel.enrollEvent();
        this.cards.forEach(value=>{
            value.enrollEvent();
        });
    }
}

rootContainer.init();
rootContainer.render();