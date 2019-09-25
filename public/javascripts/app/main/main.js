import { Carousel } from "../carousel/carousel.js";
import { SubContainer } from "./subcontainer.js";
import { CardCategory } from "../carousel/cardcategory.js"
import { MainContainer } from "./maincontainer.js";
import { UrlImage } from "../carousel/urlimage.js";
import { BottomCard } from "../carousel/bottom.js";
import { EventEmitter } from "../../eventemitter/eventemitter";
import { footer } from "../footer.js";
import { header } from "../header.js";
import { banner } from "../banner.js";

const rootContainer = {
    root: document.querySelector("#root"),
    init() {
        this.root.innerHTML = "";
        this.carouselemitter = new EventEmitter();
        Promise.all([fetch("/data/mainCardCarousel"), fetch("/data/bottomCarousel"), fetch("/auth")]).then(async values => {

            Promise.all([values[0].json(), values[1].json(), values[2].json()]).then(data => {
                console.log(data[2].isAdmin);
                this.makeCardCategory(data[0]);
                this.makeBottomCard(data[1]);
                this.username = data[2].username;
                this.isAdmin = data[2].isAdmin;
                this.makeMainContainer();
            }).then(() => {
                Promise.all([fetch("/data/miniCarousel"), fetch("/data/subContainer")]).then(async (values) => {
                    Promise.all([values[0].json(), values[1].json()]).then(async data => {
                        this.makeMiniCarousel(data[0]);
                        this.makeSubContainer(data[1]);
                    }).then(() => {
                        this.render();
                        this.enrollEvent();
                    });
                });
            })
        }).catch(err => {
            console.error(err);
        });

    },
    async makeCardCategory(data) {
        let circleCount = 0;
        this.cards = data.result.reduce((prev, curr) => {
            console.log(curr.title);
            const cardcategory = new CardCategory({
                title: curr.title,
                backgroundColor: curr.color,
                image: curr.image,
                count: curr.count,
                nowCount: circleCount,
                emitter: this.carouselemitter
            });
            circleCount += curr.count;
            prev.push(cardcategory);
            return prev;
        }, []);
    },
    async makeBottomCard(data) {
        this.bottomcards = data.result.reduce((prev, curr, idx) => {
            prev.push(new BottomCard({
                className: curr.title,
                title: curr.title,
                head: curr.head,
                content: curr.content,
                image: curr.image,
                url: curr.link,
                urlContent: curr.url_content,
                color: curr.color,
                width: 50
            }));
            return prev;
        }, []);
        this.bottomCarousel = new Carousel({ cards: this.bottomcards, width: 50, height: 20, emitter: this.carouselemitter, interval: false });
    },
    async makeMainContainer() {
        this.maincontainer = new MainContainer({ cards: this.cards, bottomCarousel: this.bottomCarousel });
    },
    async makeMiniCarousel(data) {
        const images = data.result.reduce((prev, curr) => {
            prev.push(new UrlImage(curr.image));
            return prev;
        }, []);
        this.miniCarousel = new Carousel({ cards: images, width: 15, height: 0, title: "mini", interval: true });
    },
    async makeSubContainer(data) {
        console.log(data.result);
        this.subContainer = new SubContainer({ carousel: this.miniCarousel, title: data.result[0].title, content: data.result[0].content, url: data.result[0].url });
    },
    render() {
        console.log(this.isAdmin);
        this.root.insertAdjacentHTML("afterbegin", header.render(this.username,this.isAdmin));
        this.root.insertAdjacentHTML("beforeend", banner.render());
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
        header.addMenuEvent();
    }
}

rootContainer.init();
