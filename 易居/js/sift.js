/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 16:00:48
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
					session.html('欢迎<a href="personal.html">'+name+'</a><span>|</span><a href="enter.html">退出</a>');
				});
			} else{
				session.html('<a href="enter.html">登录</a><span>|</span><a href="enter.html">注册</a>')
			};
		}
	
	});
}
/***************************sift*****************************/
	var choose1=$('.choose1 a');
	var choose2=$('.choose2 a');
	var choose3=$('.choose3 a');
	choose1.eq(0).addClass('current');
	choose2.eq(0).addClass('current');
	choose3.eq(0).addClass('current');

	choose1.click(function(event) {
		$(this).addClass('current');
		choose1.eq(0).removeClass('current');
	});
	choose1.eq(0).click(function(event) {
		$(this).addClass('current').siblings('a').removeClass('current');
	});
	choose2.click(function(event) {
		$(this).addClass('current');
		choose2.eq(0).removeClass('current');
	});
	choose2.eq(0).click(function(event) {
		$(this).addClass('current').siblings('a').removeClass('current');
	});
	choose3.click(function(event) {
		$(this).addClass('current');
		choose3.eq(0).removeClass('current');
	});
	choose3.eq(0).click(function(event) {
		$(this).addClass('current').siblings('a').removeClass('current');
	});

	var submenu=$('.submenu li');
	var option=$('.option li');
	var houses=$('.houses li');
	var Afaith=$('.afaith');
	var AgeRen=$('.ageren');
	var Abroker=$('.abroker');
	var c;
	var n=0;

	submenu.eq(0).addClass('current1');
	option.eq(0).addClass('current2');

	submenu.click(function(event) {
		c=$(this).index();
		submenu.eq(c).addClass('current1').siblings('li').removeClass('current1');
	});
	submenu.eq(0).click(function(event) {
		houses.show();
	});

	option.click(function(event) {
		c=$(this).index();
		option.eq(c).addClass('current2').siblings('li').removeClass('current2');
	});
/***************************sift end**************************/

