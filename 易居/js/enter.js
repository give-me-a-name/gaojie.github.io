/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 15:54:06
 * @version $Id$
 */

$(function(){
	creatCode();
	
})	
$('#again').click(function(){
	creatCode();
})
$('.auth-code').click(function(event) {
	creatCode();
});

var deal=$('deal');
deal.children('div').hide();
deal.click(function(event) {
	$(this).children('div').toggle();
});

var inputBoxs=$('.infor input');
inputBoxs.click(function(event) {
	$(this).addClass('focused').siblings('input').removeClass('focused');			
});

var userName = $('#user').val();
var password = $('#RD').val();

var url = window.location.href;
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));
// url = url.substring(0,url.lastIndexOf('/'));
// alert(url)
var checkbox = document.getElementsByClassName('checkbox')[0];
$('.button').click(function(){
	if (checkbox.checked) {
		if (checkCode()) {
			var data = $('#infor').serialize();

			if("" != data){
				// 为在action中能正常接收，在每个属性前加上action中定义的对象名
				data = 'landlord.' + data;
				data = data.replace(/&/g, '&landlord.');
			}
			
			$.ajax({
				url: url + '/landlordLogin.action',
				type:'POST',
				async: true,
				dateType: 'json',
				cache: false,
				data: data,		
				contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
				success:function(data){
					if(data.resultCode == '0000'){
						// alert('操作成功！');
						location.href = url + '/myDemo/html/landlord.html';
					}else{
						alert('用户不存在')
					}
				},
				error:function(){
					alert('错误');
				}
			})

		};
	} else{
		alert('请同意协议！')
	};
})
/* 创建验证码 */
var code;
function creatCode(){
	code = '';
	var codeLength = 6;
	var authCode = $('.auth-code');
	var arry = new Array(0,1,2,3,4,5,6,7,8,9,
		 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
   		 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
    	//所有候选组成验证码的字符，当然也可以用中文的

    for (var i = 0; i < codeLength; i++) {
    	var num = Math.floor(Math.random()*62);
    	code += arry[num];
    };
    authCode.html(code);
}
/* 检验验证码 */
function checkCode(){
	var auth = $('#auth').val();
	if (auth.length <= 0) {
		alert('请输入验证码')
		return false;
	}else if(auth.toUpperCase() != code.toUpperCase()){
		alert('验证码输入错误！');
		return false;
	}else{
		return true;
	}

}


