export class SubContainer{
    constructor({carousel, title, content, url}){
        this.carousel = carousel;
        this.title = title;
        this.content = content;
        this.url = url;
    }
    render(){
        return /*html*/ `<div class="sub-container">
                            ${this.carousel.render()}
                            <div class="sub-right">
                                <div class="sub-title">
                                    ${this.title}
                                </div>
                                <div class="sub-content">
                                    ${this.content}
                                </div>
                                <div class="sub-url">
                                <a href="${this.url}">Explore Prime Video ></a>
                                </div>
                            </div>
                        </div>`;
    }

}