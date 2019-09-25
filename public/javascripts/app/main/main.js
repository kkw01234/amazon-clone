import { Carousel } from "../carousel/carousel.js";
import { SubContainer } from "./subcontainer.js";
import { CardCategory } from "../carousel/cardcategory.js"
import { MainContainer } from "./maincontainer.js";
import { UrlImage } from "../carousel/urlimage.js";
import { BottomCard } from "../carousel/bottom.js";
import { EventEmitter } from "../../eventemitter/eventemitter";
import { footer } from "../footer.js";
import { header } from "../header.js";
import { banner} from "../banner.js";

const rootContainer = {
    root: document.querySelector("#root"),
    init() {
        this.root.innerHTML = "";
        this.carouselemitter = new EventEmitter();
        Promise.all([fetch("/data/maincard.json"), fetch("/data/bottomcarousel.json"), fetch("/auth")]).then(async values => {
            await this.makeCardCategory(values[0]);
            await this.makeBottomCard(values[1]);
            const userData = await values[2].json();
            console.log(userData);
            this.username = userData.username;
            this.makeMainContainer();
        }).then(() => {
            Promise.all([fetch("/data/minicarousel.json"), fetch("/data/sub.json")]).then(async (values) => {
                await this.makeMiniCarousel(values[0]);
                await this.makeSubContainer(values[1]);
            }).then(() => {
                    this.render();
                    this.enrollEvent();
                });
        }).catch(err=>{
            console.log(err);
        });
      
    },
    async makeCardCategory(res) {
        const json = await res.json();
        let circleCount = 0;
        this.cards = json.main.reduce((prev, curr) => {
            const cardcategory = new CardCategory({
                title: curr.title,
                backgroundColor: curr.color,
                image: curr.image,
                count: curr.button,
                nowCount: circleCount,
                emitter: this.carouselemitter
            });
            circleCount += curr.button;
            prev.push(cardcategory);
            return prev;
        }, []);
    },
    async makeBottomCard(res) {
        const json = await res.json();
        this.bottomcards = json.result.reduce((prev, curr, idx) => {
            prev.push(new BottomCard({
                className: curr.type,
                title: curr.title,
                head: curr.head,
                content: curr.body,
                image: curr.image,
                url: curr.link,
                urlContent: curr.tail,
                color: curr.color,
                width: 50
            }));
            return prev;
        }, []);
        this.bottomCarousel = new Carousel({ cards: this.bottomcards, width: 50, height:20,emitter: this.carouselemitter, interval: false });
    },
    async makeMainContainer() {
        this.maincontainer = new MainContainer({ cards: this.cards, bottomCarousel: this.bottomCarousel });
    },
    async makeMiniCarousel(res) {
        const json = await res.json();
        const images = json.mini.reduce((prev, curr) => {
            prev.push(new UrlImage(curr.image));
            return prev;
        }, []);
        this.miniCarousel = new Carousel({ cards: images, width: 15, height: 0, title: "mini", interval: true });
    },
    async makeSubContainer(res) {
        const json = await res.json();
        this.subContainer = new SubContainer({ carousel: this.miniCarousel, title: json.sub[0].title, content: json.sub[0].content, url: json.sub[0].url });
    },
    render() {
        this.root.insertAdjacentHTML("afterbegin", header.render(this.username));
        this.root.insertAdjacentHTML("beforeend",banner.render());
        this.root.insertAdjacentHTML("beforeend", this.maincontainer.render());
        this.root.insertAdjacentHTML("beforeend", this.subContainer.render());
        this.root.insertAdjacentHTML("beforeend", footer.render());
    },
    enrollEvent() {
        this.bottomCarousel.enrollEvent();
        this.miniCarousel.enrollEvent();
        this.cards.forEach(value => {
            value.enrollEvent();
        });
    }
}

rootContainer.init();
