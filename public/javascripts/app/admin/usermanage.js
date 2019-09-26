
import {$,$$} from '../utils';
export class Table{
    constructor({name,tableHead,objs}){
        this.name = name || "none";
        this.tableHead = tableHead || ["id"];
        this.objs = objs || [];
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
        tbody.innerHTML = this.objs.reduce((prev, curr)=>{
            prev += curr.render();
            return prev;
        },"");
    }
    enrollEvent(){
        if(this.objs.length <= 0) return;
        this.objs.forEach(value=>{
            value.enrollEvent();
        });
    }
}