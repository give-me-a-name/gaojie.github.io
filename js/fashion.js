$(function(){

	/***************搜索框变化**************/
/*	var txt=$('input');
	var tBtn=$('button');
	var aForm=$('form');
	aForm.hover(function() {
		tBtn.css('backgroundPosition', '-148px -178px');
		txt.stop().animate({'width':233}, 200);
		aForm.css('border', '1px solid #F2F2F2');
	}, function() {
		if (txt.clicked) {
			txt.css('width', 233);
		} else{
			txt.stop().animate({'width':0}, 200);
			aForm.css('border', '1px solid #fff');
		};
	});
	$('body').click(function(){
		if (txt.clicked){
			txt.css('width', 233);
		}else{
			txt.stop().animate({'width':0}, 200);
			aForm.css('border', '1px solid #fff');
		}
	});*/
	/***************搜索框变化**************/
	//*******************导航定位开始*********************/
	var Nav=$('.Anav');
	var abannerArea=$('.banner');

	var abc=Nav.offset().top;

	$(window).scroll(function(event) {
		
		if ($(window).scrollTop()>abc) {
			Nav.addClass('fixed');
			abannerArea.css('margin-top', 50);
		} else{
			Nav.removeClass('fixed');
			abannerArea.css('margin-top', 0);
		};
	});
	//*******************导航定位结束****************/
	//*****************下拉导航开始******************/

	var alis=$('.curli');
	var _hider=$('.hider');
	var twoNav=$('.in-hider');
	var timer0;
	alis.each(function(index, el) {
            $(el).attr('xuHao', index);
        });	//自定义序列

	alis.hover(function() {
		clearTimeout(timer0);
		var i=$(this).attr('xuHao');	//获取自定义序号
		twoNav.eq(i).stop().show().siblings('div').hide();
		_hider.stop().slideDown('slow');
	}, function() {
		timer0=setTimeout(function(){
			_hider.stop().slideUp('slow')
		},0);
	});
	_hider.hover(function() {
		clearTimeout(timer0);
	}, function() {
		_hider.stop().slideUp('slow');
	});

	twoNav.hover(function() {
		clearTimeout(timer0);
	}, function() {
		_hider.stop().slideUp('slow');
	});
	//*****************下拉导航结束******************/
	/**************banner区域轮播图开始****************/
	var prevBtn01=$('#prev');
	var nextBtn01=$('#next');
	var ban01List=$('#list01');
	var sImgBtn01=$('.smallimg li'); 
	var b=0;
	var timer01;
	function nextFn01(){
		b++;
		ban01List.eq(b).css('left', 0);
		if (b=0) {
			ban01List.eq(b+1).css('left', 1000);
			ban01List.eq(b+2).css('left', -1000);
		};
		if (b=1) {
			ban01List.eq(b+1).css('left', 1000);
			ban01List.eq(b-1).css('left', -1000);
		};
		if (b=2) {
			ban01List.eq(1).css('left', 1000);
			ban01List.eq(0).css('left', -1000);
		};
		var moves01=b*-1000;
		var i=b;
		ban01List.stop().animate({'left':moves01}, 300);
		sImgBtn01.eq(i).addClass('current0').siblings('li').removeClass('current0');
	}
	nextBtn01.click(nextFn01);

	timer01=setInterval(nextFn01,3000);
	$('.center ul li').hover(function() {
		clearInterval(timer01);
	}, function() {
		timer01=setInterval(nextFn01,3000);
	});

	prevBtn01.click(function(event) {
		b--;
		if (b<0) {
			b=1;
			ban01List.css('left', -2000);
		};
		var moves01=b*-1000;
		var i=b;
		ban01List.stop().animate({'left':moves01}, 300);
		sImgBtn01.eq(i).addClass('current0').siblings('li').removeClass('current0');
	});

	/**************banner区域轮播图结束****************/
	/*********************特别策划轮播开始**************/
	var ban02List=$('.banner02');
	var prevBtn02=$('.pre');
	var nextBtn02=$('.next');
	var a=0;

	function nextFn02(){
		a++;
		if (a>2) {
			a=1;
			ban02List.css('left', 0);
		};
		var moves02=a*-660;
		ban02List.stop().animate({'left':moves02}, 300);
	}
	function prevFn02(){
		a--;
		if (a<0) {
			a=1;
			ban02List.css('left', -1320);
		};
		var moves02=a*-660;
		ban02List.stop().animate({'left':moves02}, 300);
	}
	nextBtn02.click(nextFn02);
	prevBtn02.click(prevFn02);

	/*******************特别策划轮播结束***************/

})