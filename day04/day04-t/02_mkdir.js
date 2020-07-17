var fs = require("fs");

// recursive: 是否要创建父目录
// console.log(1)
// fs.mkdir("a",function(err){
//   if(err){
//     console.log("创建失败")
//     console.log(err)
//     console.log(4)
//     return ;
//   }
//   console.log("创建成功")
//   console.log(2)
// })
// console.log(3)

// 同步方法
console.log(1)
fs.mkdirSync("a")
console.log(2)