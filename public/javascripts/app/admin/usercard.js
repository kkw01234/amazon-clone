export class UserInformation{
    constructor(user){
        this.user = user;
    }
    render(){
        let rendering = `<tr>`;
        for(let i in this.user){
            rendering += `<td>${this.user[i]}</td>`;
        }
        rendering += `<td>
                        <div class="change-authority" style="display:flex">
                            <select>
                                <option>관리자</option>
                                <option>일반 사용자</option>
                            </select>
                            <button>변경</button>
                        </div>
                    </td>`
        rendering += `</tr>`;
        
        
        return rendering;
    }
}