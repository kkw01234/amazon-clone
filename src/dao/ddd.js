const fs = require('fs');
console.log(__dirname);
const result = fs.readFileSync('./public/data/minicarousel.json');
const r = JSON.parse(result);
console.log(r);
const aaa = r.mini.reduce((prev,curr)=>{
    prev.push({
      sub_index : 1,
      image : curr.image
    });
    return prev;
},[]);
aaa.forEach(value=>{
    mini.insert(value);
});
bottom.insert();

//dummydata