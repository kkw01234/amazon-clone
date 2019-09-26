
import {$,$$} from '../utils';
export class Table{
    constructor({name,tableHead,userObjs}){
        this.name = name || "none";
        this.tableHead = tableHead || ["id"];
        this.userObjs = userObjs || [];
    }
    render(){
        return /*html */`<div class="${this.name}-table">
                            <table>
                                <thead>
                                    <tr>
                                        ${this.addTableHead()}
                                    </tr>
                                </thead>
                                <tbody class="${this.name}-tbody">
               
                                </tbody>
                            </table>
                      
                        </div>`;
    }
    addTableHead(){
        return this.tableHead.reduce((prev,curr)=>{
            prev += `<th>${curr}</th>`;
            return prev;
        },"");
    }
    addUserInformation(){
        const tbody = $(`.${this.name}-tbody`);
        tbody.innerHTML = this.userObjs.reduce((prev, curr)=>{
            prev += curr.render();
            return prev;
        },"");
    }
    enrollEvent(){
        if(this.userObjs.length <= 0) return;
        this.userObjs.forEach(value=>{
            value.enrollEvent();
        });
    }
}