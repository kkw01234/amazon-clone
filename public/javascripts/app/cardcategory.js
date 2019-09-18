export class CardCategory{
    constructor({title, image,backgroundColor, count = 0}){
        this.title = title;
        this.image = image;
        this.backgroundColor = backgroundColor
        this.count = count;
    }
    render(){
        return /*html*/`
        <div class="main-card ${this.title.toLowerCase()}-card">
            <div class="category-title">${this.title}</div>
            <div class="category-content"></div>
        </div>`;
    }
    
    appendSmallCircle(){
        const maincontainer = document.querySelector(".category-content");
        for(let i=0;i<this.count;i++){
            maincontainer.insertAdjacentHTML("beforeend",`<div class="circle"></div>`);
        }
        this.addEventListner();
    }
    addEventListner(){

    }
}