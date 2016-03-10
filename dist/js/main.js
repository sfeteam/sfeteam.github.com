$(function () {
	// 首屏图片高度与视窗相同，自适应
	$('#start').height($(window).height());

	$(window).resize(function () {
		$('#start').height($(window).height());
	});

	// 滚屏超过首屏距离后改变导航条样式
	$(window).scroll(function () {
		var scrH = $(window).scrollTop(),
			viewH = $(window).height();
		if (scrH >= viewH) {
			$('.navbar').addClass('navbar-new');
			$('#demo-show').addClass('demo-show-new');
		} else {
			$('.navbar').removeClass('navbar-new');			
			$('#demo-show').removeClass('demo-show-new');
		}
	});

	// .start-down下拉首屏
	$('.start-down').on('click', function () {
		$('html, body').animate({
			'scrollTop': $(window).height()
		}, 1000);
	});
});