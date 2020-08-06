let sg = require('superagent')
let url = 'http://www.baidu.com';

// sg.get(url, function (err, res) {
//     console.log(res);
// })

// sg.get(url).then(res => {
//     console.log(res.ok)
// }).catch(err => {
//     console.log(err)
// })

// async function getB(u) {
//     console.log(111);
//     let d = await sg.get(u);
//     console.log(222);
//     return d;
// }

let data = getB(url);
console.log(data);