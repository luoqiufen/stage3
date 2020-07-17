var fs = require("fs")

var path = "tes.txt";
var data = "\n呵呵呵"
var ops = {flag: "a"}

fs.writeFile(path,data,ops,function(err){
  if(err){
    console.log(err);
    return ;
  }
  console.log("写入成功")
})

