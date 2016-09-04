/*
* @Author: Administrator
* @Date:   2016-08-26 09:58:27
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-26 16:21:18
*/
$(function(){
	isSession();
	myHouses();
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


/*   推荐房源   */
var houseList = $('.houselist');
function myHouses(){
	$.ajax({
		type: 'post',
		url: url+'/queryHousesTop.action',
		async: true,
		cache: false,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8', 
		success: function(data){
			houseList.html('');
			if (data.success) {
				var item;
				$.each(data.data, function(i, houses) {
					var photo  = editPhoto(houses['photo']);
					item = '<li><a href="details.html"><img src="'+url+'/upload/'+photo+'" height="208" width="254" alt="" /></a><b>'+houses['villageName']+'</b><br /><p>'+houses['room']+'<i class="green">'+houses['price']+'</i>元／月</p></li>';
					houseList.append(item);
				});
			} else{
				alert('没有推荐房源！');
			};
		}
	
	});
}

/* 处理照片的路径 */
function editPhoto(photoStr){
	var arr = photoStr.split(',');
	return arr[0];
};