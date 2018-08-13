//定义数组，存储图片的路径
var imageArray = ["Desert.jpg","Lighthouser.jpg","Penguins.jpg","Tulips.jpg"];
//当前所显示的图片的索引
var imageIndex = 1;
//定时器对象
var imageTimer;

//启动图片轮换
function startRotate() {
	var rotateFunc = function() {
		var image = document.getElementById("img1");
		image.src = "images/"+imageArray[imageIndex];
		if (imageIndex == imageArray.length-1) 
			imageIndex = 0;
		 else 
			imageIndex++;
		};
			imageTimer = window.setInterval(rotateFunc,3000);
	}

	
	//停止图片轮换
	function stopRotate() {
		window.clearInterval(imageTimer);
	}
