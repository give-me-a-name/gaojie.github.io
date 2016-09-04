/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 15:57:33
 * @version $Id$
 */

$(function(){
	isSession();
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
					session.html('欢迎<a href="personal.html">'+name+'</a><span>|</span><a href="" onclick="isSession()">退出</a>');
				});
			} else{
				session.html('<a href="enter.html">登录</a><span>|</span><a href="enter.html">注册</a>')
			};
		}
	
	});
}


/*  退出登录  */
function isSession(){
	$.ajax({
		type: 'post',
		url: url+'/quitLogin.action',
		async: true,
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			var session = $('.right');
			if (data.success) {
				$.each(data.data, function(i, landlord) {
					var name = landlord['lname'];
					session.html('<a href="enter.html">登录</a><span>|</span><a href="enroll.html">注册</a>');
				});
			} else{
				session.html('欢迎<a href="personal.html">'+name+'</a><span>|</span><a href="" onclick="isSession()">退出</a>')
			};
		}	
	});
}

/************************personal**************************/
	var menu=$('.menu li');
	var i;
	var tabs=$('.tab');
	var atabs=$('.tabs');
	var subMenu=$('.submenu li');
	var pPhoto=$('.pphoto');

	tabs.eq(3).show().siblings('div').hide();
	atabs.eq(0).show().siblings('div').hide();

	 menu.click(function(event) {
	 	i=$(this).index();
	 	$(this).children('a').addClass('current01');
	 	$(this).siblings('li').children('a').removeClass('current01')
	 	tabs.eq(i).show().siblings('div').hide();
	 });

	 subMenu.click(function(event) {
	 	i=$(this).index();
	 	$(this).addClass('current1').siblings('li').removeClass('current1');
	 	atabs.eq(i).show().siblings('div').hide();
	 });

	 pPhoto.click(function(event) {
	 	menu.eq(3).children('a').addClass('current01');
	 	menu.eq(3).siblings('li').children('a').removeClass('current01');
	 	tabs.eq(3).show().siblings('div').hide();
	 });


/************************personal end************************/