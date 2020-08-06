{
    // 封装一个方法,根据传入的参数执行
    let time = (s,callback) => {
        setTimeout(()=>{
            console.log(`时间到,${s}秒已过`);
            callback()
        },s*1000)
    }
    // console.log('程序开始');
    /* time(3,function(){
        // time方法执行完成后的回调函数
        console.log('程序结束');
    }); */
}

{
    // 使用promise
    let time = s => {
        return new Promise((resolve,reject) => {
            // 要执行的异步操作
            setTimeout(() => {
                console.log(`执行完毕,${s}秒已过`);
                resolve();
            },s*1000)
        });
    }
    // 调用
    // console.log('start');
    // then方法: 处理异步操作的结果
    // time(2).then(() => {
    //     console.log('end');
    // })
}

{
    let rand = () => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                let num = Math.floor(Math.random()*100);
                if(num>=60){
                    resolve(num);//成功
                }else{
                    reject(num);//失败
                }
            },1000)
        })
    }

    /* rand().then((num) => {
        console.log('成功及格',num);
    },(num) => {
        console.log('没有及格',num);
    }); */
}

{
    /* let fs = require('fs');
    let p = new Promise((resolve,reject) => {
        fs.readFile('./note17.txt',(err,data) => {
            if(err){
                reject({err,msg:'读取失败'});
            }else{
                resolve({data,msg:'读取成功'});
            }
        })
    })

    p.then(({data,msg}) => {
        console.log(msg);
    }, ({err,msg}) => {
        console.log(msg);
    }) */
}

{
    let time = s => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log(`${s}秒过去了`);
                resolve();
            },s*1000)
        })
    }

    /* console.log('time 开始了');
    time(1).then(() => {
        console.log('第一次调用完成,开始第二次调用');
        // 返回一个新的promise对象
        return time(2);
    })
    .then(() => {
        console.log('第二次调用完成,开始第三次调用');
        return time(3);
    })
    .then(() => {
        console.log('第三次调用完成');
    }) */
}

{
    // catch方法
    let p = new Promise((resolve,reject) => {
        let num = Math.ceil(Math.random()*150);
        if(num>90){
            resolve('考试及格'+num);
        }else{
            throw new Error('考试不及格'+num);
        }
    })

    p.then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    }).finally(() => {
        // 无论成功还是失败,都会执行这个函数
        console.log('over');
    })
}