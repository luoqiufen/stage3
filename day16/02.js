{
    // 字符串新增的表达方式
    let str1 = 'abc';
    let str2 = "abc";
    let str3 = `abc`;

    // 使用``表示的字符串在引号中间可以换行
    let str4 = `
    <div>
        <h1>神兵小将</h1>
    </div>`;
    console.log(str4);
    document.write(str4);

    str4 = str4.replace(`h1`,`h4`);
    console.log(str4);
    document.write(str4);
}

{
    // 字符串的拼接
    let name = '虹猫';
    let age = 15;
    let str = `你好,我叫${name},今年${age}岁了`;
    console.log(str);

    str = `abcd${age>18?'成年人':'未成年'}skr`;
    console.log(str);

    str = `今年${age}岁,明年${age+1}岁`;
    console.log(str);

    str =  `aaa${10>8}bbb`;
    console.log(str);
}

// 字符串新增的方法
// includes(), startsWith(), endsWith()
// repeat()
// padStart()，padEnd()
// trimStart(),trimEnd()
// MatchAll()
{
    // includes() 判断字符串中是否包含某一个字符串
    var str = `Hello,world!An apple a day,keeps the doctor away`;
    console.log(str.includes('day'));//是否包含day
    // 第二个参数表示从哪个位置开始查询
    console.log(str.includes('day',30));

    // startsWith() 判断字符串是否是以某个字符串开头的
    console.log(str.startsWith('Hello'));
    console.log(str.endsWith('day'));
}

{
    // repeat() 重复某个字符串
    console.log('a'.repeat(12));
    console.log('\\'.repeat(8));
    // 如果参数不是整数,则舍弃小数部分(向下取整)
    console.log('\\'.repeat(5.8));
}

{
    // padStart()，padEnd() 向字符串的开头会结尾填充内容
    // 实现左对齐或右对齐
    // 参数1: 表示填充到目标长度
    // 参数2: 表示使用什么字符串来填充
    console.log('123'.padStart('10','0'));
    console.log('123456'.padStart('10','#'));
    console.log('12fdsy3456'.padStart('10','#'));
    // 如果填充的内容超过了10位，则截取使其达到10位
    console.log('126'.padStart('10','abc'));
    // 如果原字符串已经达到10位,则不作操作
    console.log('1fghjjjjjjjjjjjjjjjjj26'.padStart('10','#'));
}

{
    // trimStart() 清除字符串开头部分的空格
    // trimEnd() 尾部空格
    // trim() 尾部开头和结尾的空格
}

{
    // matchAll()
    let result = 'jfadoadfiea'.matchAll(/a/g);
    console.log(result);
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());

    let res = null;
    res = result.next();
    while(!res.done){
        console.log(res);
        res = result.next();
    }
    console.log(res);

}


