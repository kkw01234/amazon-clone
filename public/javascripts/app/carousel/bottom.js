export class BottomCard{
    constructor({className,image,title,head,content,url,urlContent,width,color,height = 15}){
        this.className = className;
        this.image = image;
        this.title = title;
        this.head = head;
        this.content = content;
        this.url = url;
        this.urlContent = urlContent;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(){
        return /*html*/`<div class="bottom-card ${this.className}" 
                            style="background-image:url(${this.image});
                            width:${this.width}rem;
                            height:${this.height}rem">
                            <div class="bottom-main">
                                <div class="bottom-title" style="background-color:${this.color}">
                                    ${this.title}
                                </div>
                                <div class="bottom-head">
                                    ${this.head}
                                </div>
                                <div class="bottom-content">
                                    ${this.content}
                                </div>
                                <div class="bottom-url">
                                    <a href="${this.url}">${this.urlContent}</a>
                                </div>
                            </div>
                        </div>`;
    }

    setBackground(){

    }
    
}