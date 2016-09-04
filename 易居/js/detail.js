/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 15:55:46
 * @version $Id$
 */
$(function(){

	isSession()
})

/*获取路径*/
var url = window.location.href;
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));

/*  获取是否登录  */
function isSession(){
	$.ajax({
			type: 'post',
			url: url+'/loginSession.action',
			async: true,
			cache: false,
			contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
			success: function(data){
				var session = $('.right');
				if (data.success) {
					$.each(data.data, function(i, landlord) {
						var name = landlord['lname'];
						session.html('欢迎<a href="personal.html">'+name+'</a><span>|</span><a href="enter.html">退出</a>');
					});
				} else{
					session.html('<a href="enter.html">登录</a><span>|</span><a href="enter.html">注册</a>')
				};
			}
		
		});
}
	/****************************detail***************************/

	var imgLi=$('.imgshow ul li');
	var bigimg=$('.bigimg img');
	var m;
	bigimg.eq(0).show().siblings('img').hide();
	imgLi.mouseenter(function(event) {
		m=$(this).index();
		bigimg.eq(m).show().siblings('img').hide();
	});

	var save=$('.save i');
	save.click(function(event) {
		if ($(this).hasClass('saved')) {
			$(this).removeClass('saved')
		} else{
			$(this).addClass('saved');
		};
	});

	var share=$('.share i');
	var shares=$('.shares');
	
	share.click(function(event) {
		shares.toggle();
	});
	/**************share**************/
	window.onload=function(){
		window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
	}
	
	/***************share*****************/
/***********************detail end********************************/