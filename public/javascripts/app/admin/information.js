import { $ } from "../utils";
export class Information {
    constructor(obj, name = "none") {
        this.obj = obj;
        this.name = name;
        this.id = this.obj[Object.keys(this.obj)[0]];
    }
    render() {
        let rendering = `<tr>`;
        for (let i in this.obj) {
            if (i === "image") {
                rendering += `<td class="${i}-${this.id}"><img src="${this.obj[i]}" style="width:10rem;height:5rem;"></td>`;
                continue;
            }
            rendering += `<td class="${i}-${this.id}">${this.obj[i]}</td>`;
        }
        if (this.name === "user") {
            rendering += `<td>
            <div class="change-authority" style="display:flex">
                <select name="auth-${this.id}-change">
                    <option value=""></option>
                    <option value="admin">관리자</option>
                    <option value="general">일반 사용자</option>
                    <option value="block">차단</option>
                </select>
                <button class="btn btn-auth-${this.id}-change">변경</button>
            </div>
        </td>`;
        } else {
            rendering += ` <button class="btn btn-auth-${this.id}-change">변경</button>
            <button class="btn btn-auth-${this.id}-delete">삭제</button>`;
        }
        rendering += `</tr>`;
        return rendering;
    }
    enrollEvent() {
        if (this.name === 'user')
            this.enrollUserEvent();
        else
            this.enrollCarouselEvent();
           

    }
    enrollUserEvent() {
        const changeButton = $(`.btn-auth-${this.id}-change`);
        changeButton.addEventListener('click', () => {
            const authChange = $(`select[name=auth-${this.id}-change]`).value;
            //fetch
            if (authChange === '') {
                alert('권한을 다시 선택해주세요');
                return;
            }
            fetch(`/admin/auth-change/${this.id}`, {
                method: `post`,
                body: JSON.stringify({
                    change_authority_name: authChange
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                if (!data.result) {
                    alert('다시 한번 눌러주세요');
                    return;
                }
                alert(`${data.id}님의 권한이 수정되었습니다.`);
                const authority = $(`.authority-${data.id}`);
                authority.innerHTML = data.authority_name;
            });
        });
    }
    enrollCarouselEvent(){
        const deleteButton = $(`.btn-auth-${this.id}-delete`);
        deleteButton.addEventListener('click', () => {
            const check = confirm("정말로 삭제하시겠습니까?");
            if (!check) return;
            const data = {};
            data[`${this.name}_index`] = this.id;
            console.log(data);
            fetch(`/admin/delete${this.name}`, {
                method: "post",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
            });
        });
    }

}