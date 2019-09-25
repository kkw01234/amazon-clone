
import {$,$$} from '../utils';
class Table{
    constructor(name,tableHead){
        this.name = name;
        this.tableHead = tableHead;
    }

    render(){
        return /*html */`<div class="${this.name}-card">
        <table>
            <thead class="${this.name}-thead">
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
        })
    }
    addUserInformatino(users){
        const tbody = $('.user-tbody');
        tbody.innerHTML = users.reduce((prev, curr)=>{
            prev += curr.render();
            return prev;
        },"");
    }
}