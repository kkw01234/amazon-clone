export class EventEmitter{
    constructor(){
        this.objects = []; //함수 저장
        this.event = {};
    }
    insertObject(object){
        this.objects.push(object);
    }
    insertEvent(type, ...callback){
        this.event[type] = callback;
    }
    deleteObject(object){
        const deleteNumber = this.objects.indexOf(object);
        this.objects.splice(deleteNumber, 1);
    }
    deleteEvent(type){
        delete this.event[type];
    }
    notifyAll(object){
        console.log(this.objects);
        this.objects.forEach((callback)=>{
            callback(object);
        });
    }
    notify(type,object){
        this.event[type].forEach(value=>{
            value(object);
        });
    }
}