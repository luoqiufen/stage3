{
    // 箭头函数的声明方式:
    // 无参无返回值
    let a = () => {
        console.log('这是箭头函数');
    }
    // 调用方式不变
    a();

    // 有参无返回值
    // 如果参数有且只有一个,则小括号可以省略不写
    // let b = (msg) => {
    let b = msg => {
        console.log('一个参数'+msg);
    }
    b('111');
    // 多个参数,小括号不可省略
    let c = (x,y) => {
        console.log(x+y);
    }
    c(5,10);

    // 有返回值
    let d = () => {
        let rand = Math.random();
        return rand;
    }
    console.log(d());
    // 如果函数体中只有一句返回语句,则大括号和return可以省略
    let e = () => Math.random();
    console.log(e());
}

{
    let a = x => 2*x;
    console.log(a(10));
}

{
    // 箭头函数参数的默认值
    let fn = (a=0,b=0) => a+b;
    console.log(fn(1,2));
}

{
    let stu = {
        name:'apple',
        sayHello: function(){
            console.log(`${this.name}说hello`);
        },
        work:function(){
            // 因为箭头函数中没有this,在这里使用的this实际上是从外层继承进来的
            return () => {
                console.log(this);
                console.log(`${this.name}工作了`)
            }
        }
    }
    stu.sayHello();
    stu.work()();
}

{
    
}