export class CardCategory{
    constructor({title, image,backgroundColor, count = 0}){
        this.title = title;
        this.image = image;
        this.backgroundColor = backgroundColor
        this.count = count;
    }
    render(){
        return /*html*/`
        <div class="category-card ${this.title.toLowerCase()}-card">
            <div class="category-title">${this.title}</div>
            <div class="category-content">${this.appendSmallCircle()}</div>
        </div>`;
    }
    
    appendSmallCircle(){
        let circles = "";
        for(let i=0;i<this.count;i++){
            circles += `<div class="circle ${this.title.toLowerCase()}-${i+1}"></div>`; 
        }
        return circles;
    }
    addEventListner(){
        this.categoryCard = document.querySelector(`.${this.title.toLowerCase()}-card`);
        this.categoryCard.addEventListener("click",this.clickHandler.bind(this));
    }
    clickHandler(e){
        
    }
}