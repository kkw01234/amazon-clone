export class EventEmitter{
    constructor(){
        this.objects = []; //함수 저장
    }
    insertObject(object){
        this.objects.push(object);
    }
    deleteObject(object){
        const deleteNumber = this.objects.indexOf(object);
        this.objects.splice(deleteNumber, 1);
    }
    notifyAll(object){
        this.objects.forEach((callback)=>{
            callback(object);
        });
    }
}