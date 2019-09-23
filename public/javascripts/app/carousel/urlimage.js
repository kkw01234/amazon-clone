export class UrlImage{
    constructor(url){
        this.url = url;
    }
    render(){
        return `<img src="${this.url}">`
    }
}