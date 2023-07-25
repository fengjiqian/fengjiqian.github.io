var isDown = false;
var x = 0;
var y = 0;
var l = 0;
var t = 0;


div_HERO.addEventListener("mousedown", function (e) {
	//获取鼠标初始x坐标和y坐标
	x = e.clientX;
	y = e.clientY;
	//获取移动元素左部和顶部的偏移量
	l = div_HERO.offsetLeft;
	t = div_HERO.offsetTop;

	isDown = true;
});

window.addEventListener("mouseup", function (e) {
	//开关关闭
	isDown = false;
});

window.addEventListener("mousemove", function (e) {
	if (isDown == false) return;

	div_HERO.style.left = e.clientX - (x - l) + 'px';
	div_HERO.style.top = e.clientY - (y - t) + 'px';
});

div_HERO.addEventListener("mousemove", function (e) {
	if (e.clientX < 0 || e.clientY < 0) {
		isDown = false;
	}
});
