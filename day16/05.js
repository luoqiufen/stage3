{
    function Point(x,y){
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function(){
        return `(${this.x},${this.y})`;
    }

    console.log(new Point(1,2).toString())
}

{
    // class类的使用
    class Stu{
        constructor(id,name){//构造方法
            this.id = id;
            this.name = name;
        }
        say(){}
        sing(){}
        run(){}
    }
    let s = new Stu('1001','apple');
    console.log(s)
}