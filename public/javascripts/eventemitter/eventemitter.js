export class EventEmitter{
    constructor(){
        this.event = {};
    }

    insertEvent(type, ...callback){
        this.event[type] = callback;
    }

    deleteEvent(type){
        delete this.event[type];
    }
    notify(type,object){
        
        console.log(this.event,this.event[type],type);
        this.event[type].forEach(value=>{
            value(object);
        });
    }
}