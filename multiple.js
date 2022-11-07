
let myGlobal=10;//global scope

function timesFive(num)
{
const funGlobal=5;//local scope
    return num*5;
}
const ans=timesFive(4);
console.log(ans);
