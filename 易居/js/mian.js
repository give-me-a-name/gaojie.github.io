/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 15:57:37
 * @version $Id$
 */
$(function(){
	
})

	
/****************轮播图***************/
	var houseList=$('.houselist');
	var prevBtn=$('.prev');
	var nextBtn=$('.next');
	var recommed=$('.recommed');
	var a=0;
	var timer;

	function nextFn(){
		a++;
		if (a>4) {
			a=1;
			houseList.css('left', 0);
		};
		var moves=a*-290;
		houseList.stop().animate({'left':moves}, 300);
	}
	function prevFn(){
		a--;
		if (a<0) {
			a=3;
			houseList.css('left', -1160);
		};
		var moves=a*-290;
		houseList.stop().animate({'left':moves}, 300);
	}
	timer=setInterval(nextFn, 2000);
	recommed.hover(function() {
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(nextFn, 2000);
	});
	nextBtn.click(nextFn);
	prevBtn.click(prevFn);

/*****************index end*************************/
