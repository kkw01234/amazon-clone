class UserInformation{
    constructor(user){
        this.user = user;
    }
    render(){
        let rendering = ``;
        for(let i in user){
            rendering += `<td>${user[i]}</td>`;
        }
        return rendering;
    }
}