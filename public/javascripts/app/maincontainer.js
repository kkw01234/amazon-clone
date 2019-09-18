
export class MainContainer{
    constructor({cards}){
        this.cards = cards;
    }
    render(){
        return /*html*/`<div class="main-container">
                            <div class="benefit-cards">${this.insertCardCategory()}</div>
                        </div>`
    }

    insertCardCategory(){
        const re = this.cards.reduce((prev,curr)=>{
            prev += curr.render();
            return prev;
        },"");
        return re;
    }
}