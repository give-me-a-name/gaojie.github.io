
$(function() {
	
	//**************输入框变化开始******************/
	/*var searchAear=$('.search-area');
	var text=$('.text');
	var x=1;
	
	searchAear.hover(function() {
		text.css({
			'width': 238,
			'transition': '0.2s'
		});
	}, function() {
		text.css('width', 198);
	});
	*/
	//***************输入框变化结束**********************/

	//*******************导航定位开始*********************/
	var anav=$('.nav');
	var abannerArea=$('.banner-area');

	var abc=anav.offset().top;

	$(window).scroll(function(event) {
		
		if ($(window).scrollTop()>abc) {
			anav.addClass('current01');
			abannerArea.css('margin-top', 50);
		} else{
			anav.removeClass('current01');
			abannerArea.css('margin-top', 0);
		};
	});
	//***************导航定位结束****************/
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

	/**************banner区域轮播图开始****************/

	var aImgLi01=$('.list li');
	var sImgBtn01=$('.smallimg li');
	aImgLi01.first().show();
	var timer01;
	var num=0;
	var cover01=$('.cover01');
	var preBtn01=$('.to-pre');
	var nextBtn01=$('.to-next');
	var banner01=$('#banner');
	// banner01.css('zIndex', '9');

	function nextFn01(){
		cover01.stop().fadeIn(800, function() {
			num++;
			if (num>4) {num=0};
			aImgLi01.eq(num).show().siblings('li').hide();
			sImgBtn01.eq(num).addClass('current06').siblings('li').removeClass('current06');
			
		});
		cover01.fadeOut(800);
	}
	function preFn01(){
		cover01.stop().fadeIn(800, function() {
			num--;
			if (num<0) {num=4};
			aImgLi01.eq(num).show().siblings('li').hide();
			sImgBtn01.eq(num).addClass('current06').siblings('li').removeClass('current06');
			
		});
		cover01.fadeOut(800);
	}
	timer01=setInterval(nextFn01, 3000);
	banner01.hover(function() {
		clearInterval(timer01);
	}, function() {
		// clearInterval(timer01);
		timer01=setInterval(nextFn01, 3000);
	});

	nextBtn01.click(nextFn01);
	preBtn01.click(preFn01);

	sImgBtn01.click(function(event) {
		clearInterval(timer01);
		var m=$(this).index();
		cover01.stop().fadeIn(800, function() {
			aImgLi01.eq(m).show().siblings('li').hide();
		});
		sImgBtn01.eq(m).addClass('current06').siblings('li').removeClass('current06');
		cover01.fadeOut(800);
		num=m;
		timer01=setInterval(nextFn01, 3000);
	});


	/***************小按钮**************/
	var v1Plus=$('.v1plus');
	var v2Plus=$('.v2plus');
	var v3Plus=$('.v3plus');
	var v4Plus=$('.v4plus');
	var v5Plus=$('.v5plus');

	v1Plus.click(function(event) {
		if (v1Plus.hasClass('imgposition1')) {
			$(this).removeClass('imgposition1').addClass('imgposition2');
			$(this).siblings('s').addClass('vv');	
		}else{
			$(this).addClass('imgposition1').removeClass('imgposition2');
			$(this).siblings('s.v101').removeClass('vv').addClass('vvr1');
			$(this).siblings('s.v102').removeClass('vv').addClass('vvr2');
			$(this).siblings('s.v103').removeClass('vv').addClass('vvr3');
			$(this).siblings('s.v104').removeClass('vv').addClass('vvr4');
		};
	});
	v2Plus.click(function(event) {
		if (v2Plus.hasClass('imgposition1')) {
			$(this).removeClass('imgposition1').addClass('imgposition2');
			$(this).siblings('s').addClass('vv');	
		}else{
			$(this).addClass('imgposition1').removeClass('imgposition2');
			$(this).siblings('s.v201').removeClass('vv').addClass('vvr1');
			$(this).siblings('s.v202').removeClass('vv').addClass('vvr2');
			$(this).siblings('s.v203').removeClass('vv').addClass('vvr3');
			$(this).siblings('s.v204').removeClass('vv').addClass('vvr4');
		};
	});
	v3Plus.click(function(event) {
		if (v3Plus.hasClass('imgposition1')) {
			$(this).removeClass('imgposition1').addClass('imgposition2');
			$(this).siblings('s').addClass('vv');	
		}else{
			$(this).addClass('imgposition1').removeClass('imgposition2');
			$(this).siblings('s.v301').removeClass('vv').addClass('vvr1');
			$(this).siblings('s.v302').removeClass('vv').addClass('vvr2');
			$(this).siblings('s.v303').removeClass('vv').addClass('vvr3');
			$(this).siblings('s.v304').removeClass('vv').addClass('vvr4');
		};
	});
	v4Plus.click(function(event) {
		if (v4Plus.hasClass('imgposition1')) {
			$(this).removeClass('imgposition1').addClass('imgposition2');
			$(this).siblings('s').addClass('vv');	
		}else{
			$(this).addClass('imgposition1').removeClass('imgposition2');
			$(this).siblings('s.v401').removeClass('vv').addClass('vvr1');
			$(this).siblings('s.v402').removeClass('vv').addClass('vvr2');
			$(this).siblings('s.v403').removeClass('vv').addClass('vvr3');
			$(this).siblings('s.v404').removeClass('vv').addClass('vvr4');
		};
	});
	v5Plus.click(function(event) {
		if (v5Plus.hasClass('imgposition1')) {
			$(this).removeClass('imgposition1').addClass('imgposition2');
			$(this).siblings('s').addClass('vv');	
		}else{
			$(this).addClass('imgposition1').removeClass('imgposition2');
			$(this).siblings('s.v501').removeClass('vv').addClass('vvr1');
			$(this).siblings('s.v502').removeClass('vv').addClass('vvr2');
			$(this).siblings('s.v503').removeClass('vv').addClass('vvr3');
			$(this).siblings('s.v504').removeClass('vv').addClass('vvr4');
		};
	});
	/***************小按钮***************/


	/****************banner区域轮播图结束*************/
	/*********************嘉人焦点********************/
	var ddl=$('.details dl');
	var dli=$('.focusOn li');
	var i;
	dli.hover(function() {
		i=$(this).index();
		ddl.eq(i).stop(true,false).fadeIn(300).siblings('dl').fadeOut(300);
	});
	/********************嘉人焦点*************************/
	
	/*********************嘉人王牌轮播开始********************/
	var ban02List=$('.banner02');
	var prevBtn02=$('.pre');
	var nextBtn02=$('.next');
	var a=0;

	function nextFn02(){
		a++;
		if (a>5) {
			a=1;
			ban02List.css('left', 0);
		};
		var moves02=a*-700;
		ban02List.stop().animate({'left':moves02}, 300);
	}
	function prevFn02(){
		a--;
		if (a<0) {
			a=4;
			ban02List.css('left', -3500);
		};
		var moves02=a*-700;
		ban02List.stop().animate({'left':moves02}, 300);
	}
	nextBtn02.click(nextFn02);
	prevBtn02.click(prevFn02);/**/

	/*********************嘉人王牌轮播结束*****************/
	/*********************时装轮播结束*****************/
	var prevBtn03=$('.itapre03');
	var nextBtn03=$('.itanext03');
	var ban03List=$('.banner03');
	var b=0;
	var timer03;

	function nextFn03(){
		b++;
		if (b>3) {
			b=1;
			ban03List.css('left', 0);
		};
		var moves03=b*-300;
		ban03List.stop().animate({'left':moves03}, 300);
	}
	nextBtn03.click(nextFn03);
	timer03=setInterval(nextFn03,3000);
	$('.slide03').hover(function() {
		clearInterval(timer03);
	}, function() {
		timer03=setInterval(nextFn03,3000);
	});
	prevBtn03.click(function(event) {
		b--;
		if (b<0) {
			b=2;
			ban03List.css('left', -900);
		};
		var moves03=b*-300;
		ban03List.stop().animate({'left':moves03}, 300);
	});

	/*********************时装轮播结束*****************/
	/*********************美妆轮播结束*****************/
	var prevBtn04=$('.itapre04');
	var nextBtn04=$('.itanext04');
	var ban04List=$('.banner04');
	var c=0;
	var timer04;

	function nextFn04(){
		c++;
		if (c>3) {
			c=1;
			ban04List.css('left', 0);
		};
		var moves04=c*-300;
		ban04List.stop().animate({'left':moves04}, 300);
	}
	nextBtn04.click(nextFn04);
	timer04=setInterval(nextFn04,3000);
	$('.slide04').hover(function() {
		clearInterval(timer04);
	}, function() {
		timer04=setInterval(nextFn04,3000);
	});
	prevBtn04.click(function(event) {
		c--;
		if (c<0) {
			c=2;
			ban04List.css('left', -900);
		};
		var moves04=c*-300;
		ban04List.stop().animate({'left':moves04}, 300);
	});

	/*********************美妆轮播结束*****************/
	/*********************珠宝腕表轮播结束*****************/
	var prevBtn05=$('.itapre05');
	var nextBtn05=$('.itanext05');
	var ban05List=$('.banner05');
	var d=0;
	var timer05;

	function nextFn05(){
		d++;
		if (d>3) {
			d=1;
			ban05List.css('left', 0);
		};
		var moves05=d*-660;
		ban05List.stop().animate({'left':moves05}, 300);
	}
	nextBtn05.click(nextFn05);
	timer05=setInterval(nextFn05,3000);
	$('.slide05').hover(function() {
		clearInterval(timer05);
	}, function() {
		timer05=setInterval(nextFn05,3000);
	});
	prevBtn05.click(function(event) {
		d--;
		if (d<0) {
			d=2;
			ban05List.css('left', -1980);
		};
		var moves05=d*-660;
		ban05List.stop().animate({'left':moves05}, 300);
	});

	/*********************珠宝腕表轮播结束*****************/
	/*********************嘉人观点轮播结束*****************/
	var prevBtn06=$('.itapre06');
	var nextBtn06=$('.itanext06');
	var ban06List=$('.banner06');
	var e=0;
	var timer06;

	function nextFn06(){
		e++;
		if (e>3) {
			e=1;
			ban06List.css('left', 0);
		};
		var moves06=e*-660;
		ban06List.stop().animate({'left':moves06}, 300);
	}
	nextBtn06.click(nextFn06);
	timer06=setInterval(nextFn06,3000);
	$('.slide06').hover(function() {
		clearInterval(timer06);
	}, function() {
		timer06=setInterval(nextFn06,3000);
	});
	prevBtn06.click(function(event) {
		e--;
		if (e<0) {
			e=2;
			ban06List.css('left', -1980);
		};
		var moves06=e*-660;
		ban06List.stop().animate({'left':moves06}, 300);
	});

	/*********************嘉人观点轮播结束*****************/
	//*****************左右切换开始************************/
	var thL=$('.th-l');
	var thR=$('.th-r');
	
	thL.hover(function() {
		
		$(this).removeClass('current03').siblings('li').removeClass('current04');
		$(this).parent('ul').siblings('.con02').fadeOut(300);
	});
	thR.hover(function() {
		
		$(this).addClass('current04').siblings('li').addClass('current03');
		$(this).parent('ul').siblings('.con02').fadeIn(300);
	});
	//*********************左右切换结束***************/
	/*********************星座解读开始*****************/

	var sastro=$('.sastro');
	var prev=$('.pre');
	var snext=$('.next');
	var r=0;

	/*var tempLi=sli.eq(0).clone(true);
	sli.append(sastro);*/

	function nextFn09(){
		r++;
		/*r=$(this).index();*/
		if (r>12) {
			r=1;
			sastro.css('left', 0);
		};
		
		var moves=r*-260;
		sastro.stop().animate({'left': moves}, 500)
	};
	snext.click(nextFn09);

	prev.click(function(event) {
		
		r--;
		if (r<0) {
			r=11;
			sastro.css('left', -3120);
		};
		var moves=r*-260;
		sastro.stop().animate({'left':moves}, 500);
	});

	/**********************星座解读结束******************/
	/***********************友情链接开始*******************/

	var laList=$('.laList');
	var theTop=0;
	var timer;

	//top
	function tops(){
		theTop=theTop-40;
		if (theTop<-120) {
			theTop=-40;
			laList.css('margin-top', 0);
		};
		laList.stop().animate({'margin-top':theTop}, 300);
	}

	timer=setInterval(tops,3000);

	laList.hover(function() {
		
		clearInterval(timer);
	}, function() {
		clearInterval(timer);
		timer=setInterval(tops,3000);
	});

	/*****************友情链接结束*****************/
});
