
export class MainContainer{
    constructor({cards,bottomCarousel}){
        this.cards = cards;
        this.bottomCarousel = bottomCarousel;
    }
    render(){
        return /*html*/`<div class="main-container">
                            <div>
                                <div class="benefit-cards">${this.insertCardCategory()}</div>
                            </div>
                            <div>
                                ${this.bottomCarousel.render()}
                            </div>
                        </div>`
    }

    insertCardCategory(){
        const re = this.cards.reduce((prev,curr,idx)=>{
            prev += curr.render({idx});
            return prev;
        },"");
        return re;
    }
}