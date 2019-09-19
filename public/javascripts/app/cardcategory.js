export class CardCategory{
    constructor({title, image,backgroundColor, count = 0, nowCount = 0,emitter}){
        this.title = title;
        this.image = image;
        this.backgroundColor = backgroundColor
        this.count = count;
        this.nowCount = nowCount;
        this.emitter = emitter;
    }
    render({idx}){
        return /*html*/`
        <div class="category-card ${this.title.toLowerCase()}-card ${idx ? "": "card-clicked"}">
            <div class="category-title">${this.title}</div>
            <div class="category-content ${this.title.toLowerCase()}-content">${this.appendSmallCircle()}</div>
        </div>`;
    }
    
    appendSmallCircle(){
        let circles = "";
        for(let i=0;i<this.count;i++){
            circles += `<div class="circle ${this.title.toLowerCase()}-${i+1}" data-value="${this.nowCount+i+1}"></div>`; 
        }
        return circles;
    }
    enrollEvent(){ //메인에서 등록해주면 됨
        this.categoryCard = document.querySelector(`.${this.title.toLowerCase()}-card`);
        
        this.categoryContent = this.categoryCard.querySelector(".category-content");
        this.categoryCard.addEventListener("click",this.clickHandler.bind(this));
        this.categoryContent.addEventListener("click",this.circleClickHandler.bind(this));
        this.defaultCircle();
        
    }
    clickHandler(e){
        
        if(this.categoryCard.classList.contains("card-clicked")) return;
        const categoryCard = document.querySelectorAll('.category-card');
        categoryCard.forEach((value)=>{ //바꾸고싶은데
             value.classList.remove("card-clicked");
        });
        this.categoryCard.classList.add("card-clicked");
        this.defaultCircle();
        if(this.emitter)
            this.emitter.notifyAll(this.categoryCard.querySelector(".circle"));
    }
    circleClickHandler(e){
        this.categoryContent.childNodes.forEach(value=>{
            if(e.target !== value){
                value.classList.remove("circle-active");
            }
        });
        e.target.classList.add("circle-active");
        if(this.emitter)
            this.emitter.notifyAll(e.target);
    }
    defaultCircle(){
        this.categoryContent.childNodes.forEach(value=>{
            value.classList.remove("circle-active");
        });
        this.categoryContent.firstChild.classList.add("circle-active");
    }
}