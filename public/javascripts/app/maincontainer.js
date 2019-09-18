
export class MainContainer{
    constructor({cards}){
        this.cards = cards;
    }
    render(){
        return /*html*/`<div class="main-container">
                            <div>
                                <div class="benefit-cards">${this.insertCardCategory()}</div>
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