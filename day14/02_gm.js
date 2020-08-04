var gm = require('gm');

gm('./1.jpg')
	.stroke("#ffffff")
	.drawCircle(200, 200, 100, 100)
	.font("./glyphicons-halflings-regular.ttf", 50)
	.drawText(600, 200, "GMagick!")
	.write("./2.jpg", function (err) {
		if (err) {
			console.log(err);
			console.log('修图失败');
			return;
		}
		console.log('修图成功');
	});


// gm('./1.jpg')//被处理图片的路径
	// .flip()//垂直翻转
	// .magnify()//放大一倍
	// .rotate('green', 45)//翻  转45°,空白部分使用绿色填充
	// .blur(7, 3)//使图片模糊化,失去焦点
	// .crop(300, 300, 150, 130)//剪切图片.宽高xy坐标
	// .edge(3)
	// .write('./2.jpg', function (err) {
	// 	// 输出路径
	// 	if (err) {
	// 		console.log(err);
	// 		console.log('修图失败');
	// 		return;
	// 	}
	// 	console.log('修图成功');
	// })