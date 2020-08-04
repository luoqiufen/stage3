var fs = require('fs');
var gm = require('gm');
 
// resize and remove EXIF profile data
gm('./1.jpg').resize(240, 240,'!').noProfile().write('./img/resize.png', function (err,data) {
  if (!err) console.log('done');
  console.log(data);
});