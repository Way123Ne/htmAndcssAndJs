//�������飬�洢ͼƬ��·��
var imageArray = ["Desert.jpg","Lighthouser.jpg","Penguins.jpg","Tulips.jpg"];
//��ǰ����ʾ��ͼƬ������
var imageIndex = 1;
//��ʱ������
var imageTimer;

//����ͼƬ�ֻ�
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

	
	//ֹͣͼƬ�ֻ�
	function stopRotate() {
		window.clearInterval(imageTimer);
	}
