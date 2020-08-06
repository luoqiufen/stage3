
{
    // promiseImpl.all()
    // 将多个promise对象封装成一个新的promise对象
    // 只有当所有promise对象的状态都变成fulfilled时
    // 新的promise对象才会变成fulfilled状态
    // 只要有一个是rejected状态，新的promise对象就是rejected

    // 同时加载多张图片,将其显示在页面上
    // let loadImg = src => {}
    function loadImg(src){
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            // 图片加载完成之后调用
            img.onload = () => {
                // 加载完后,返回img
                resolve(img);
            }
            img.onerror = err => {
                // 加载失败,返回错误信息
                reject(err);
            }
        })
    }

    // Promise.race()
    // 参数和all方法一样,是一个promise实例数组
    // 返回值也是一个新的promise对象
    // 当参数中的promise有一个状态变为fufilled
    // 新的promise对象的状态就会变成fufilled,剩下的忽略

    /* Promise.race([
        loadImg('https://image.baidu.com/search/detail?ct=503316480&z=9&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2608870614,758445612&os=2411740940,4175437551&simid=4123681728,875614262&pn=2&rn=1&di=60940&ln=1386&fr=&fmq=1596696368958_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=0&height=0&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2F7.tjoys.net%2Fslh_qn_item2_2015_12_30_292_kanazuw3cfwjawqxrjhhisokzhijnn98.jpeg&rpstart=0&rpnum=0&adpicid=0&force=undefined'),
        loadImg('./img/9.jpg'),
        loadImg('./img/10.jpg'),
        loadImg('./img/11.jpg')
    ])
    .then(img => {
        console.log(img);
        img.width = 500;
        document.body.appendChild(img);
    })
    .catch(err => {
        console.log(err);
    }).finally(() => {
        console.log('over');
    }) */

    // Promise.allSettled()
    Promise.allSettled([
        loadImg('https://image.baidu.com/search/detail?ct=503316480&z=9&tn=baiduimagedetail&ipn=d&word=%E5%9B%BE%E7%89%87&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2608870614,758445612&os=2411740940,4175437551&simid=4123681728,875614262&pn=2&rn=1&di=60940&ln=1386&fr=&fmq=1596696368958_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=0&height=0&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&hs=2&objurl=http%3A%2F%2F7.tjoys.net%2Fslh_qn_item2_2015_12_30_292_kanazuw3cfwjawqxrjhhisokzhijnn98.jpeg&rpstart=0&rpnum=0&adpicid=0&force=undefined'),
        loadImg('./img/9.jpg'),
        loadImg('./img/10.jpg'),
        loadImg('./img/11.jpg')
      ])
      .then(results=>{
        console.log(results)
        results.forEach(img=>{
          console.log(img)
          if(img.status=='fulfilled'){
            img.value.width = 500;
            document.body.appendChild(img.value)
          }else{
            let h1 = document.createElement('h1');
            h1.innerHTML = '图片加载失败'
            document.body.appendChild(h1)
          }
        })
      })


    /* // all 方法的参数是一个promise实例数组
    Promise.all([
        loadImg('./img/8.jpg'),
        loadImg('./img/9.jpg'),
        loadImg('./img/10.jpg'),
        loadImg('./img/11.jpg')
    ])
    // 全部加载成功
    .then(imgs => {
        console.log(imgs);
        imgs.forEach(img => {
            img.width = 500;
            document.body.appendChild(img);
        })
    })
    // 捕获第一个加载失败的promise对象
    .catch(err => {
        console.log(err);
    }) */
}