// 导出
// 方式一
/* export let name = '虹猫';
export let age = '15';

export function add(a,b){
    return a+b;
} */

// 方式二
let num = 100;
let msg = 'abc';
function show(){
    console.log('functionShow');
}
// 一次性全部导出
export default{
    num,
    msg,
    show
}