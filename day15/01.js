{
    // 一对大括号就是一个块级作用域
    var a = 10;
    // let a;//let声明的变量只能声明一次
    let b = 30;
    console.log(b);
}
console.log(a);
// console.log(b);//报错,b的作用域只在{}中

var c = 5;
let d = 8;
console.log(window.c);
console.log(window.d);//undefined

for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i);//i is not defined

{
    // const 用于声明变量
    // 必须同时初始化
    const PI = 3.14;
    // cosnt a;
    // a=1;常量不能先声明后初始化,必须声明的同时就初始化

    // 声明出来的常量,不能修改它的值
    // 如果常量中的值的一个对象或数组,则可以修改对象中的属性或数组中的元素
    // 通过常量所指向的引用修改的数据,而不是直接修改它的引用
    const obj = {
        a:1
    }
    obj.a = 10;
    obj.b = 100;//没有修改引用地址,所有不会报错
    console.log(obj);

    const arr = [1,2,3] 
    // arr = [1,2,3] //不能直接修改数组的地址
}