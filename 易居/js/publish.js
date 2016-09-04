/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 16:00:11
 * @version $Id$
 */
$(function(){

	isSession();

})

/*********单选框**********/
$('.row label').click(function(event) {
	$(this).addClass('checked');
	$(this).siblings().removeClass('checked')
});

/**********复选框***********/
var txt07=$('.txt07');
txt07.click(function(event) {
	if ($(this).hasClass('selected')) {
		$(this).removeClass('selected');
		$(this).children('input')[0].checked = false;
	} else{
		$(this).addClass('selected');
		$(this).children('input')[0].checked = true;
	};
});

/*********关闭弹窗********/
$('#no').click(function(event) {
	$('.cpm').hide();
});




/*获取路径*/
var url = window.location.href;
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));
url = url.substring(0,url.lastIndexOf('/'));

$('#publish').click(function(event) {
	addHouses();
});

function addHouses(){
	var furniture = checkboxStr();//家具
	var rentway = $('input[name=renttype]:checked').val()//出租方式
	var type = $('input[name=status]:checked').val();//房东类型
	var villageName = $('#villageName').val();
	var shi = $('#shi').val();
	var ting = $('#ting').val();
	var wei = $('#wei').val();
	var room = shi+ting+wei;
	var area = $('#floor').val();
	var floor = $('#area').val();
	var countfloor = $('#countfloor').val();
	var direction = $('#direction').val();
	var hlevel = $('#hlevel').val();
	var price = $('#price').val();
	var paymethod = $('#paymethod').val();
	var tittle = $('#tittle').val();
	var features = $('#features').val();
	var address = $('#address').val();
	var linkman = $('#linkman').val();
	var linkphone = $('#linkphone').val();
	var hcondition = villageName+room;
	var data={
		furniture:furniture,
		type:type,
		rentway:rentway,
		villageName:villageName,
		shi:shi,
		room:room,
		area:area,
		floor:floor,
		countfloor:countfloor,
		direction:direction,
		hlevel:hlevel,
		price:price,
		paymethod:paymethod,
		tittle:tittle,
		features:features,
		address:address,
		linkman:linkman,
		linkphone:linkphone,
		hcondition:hcondition
	};
	console.log(fileIds);
	$.ajaxFileUpload({
		url: url+'/addHouses.action', 
		type: 'post',
        secureuri: false,
        fileElementId:fileIds,
		dataType: 'json',
		data: data,
		contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
		success: function(data){
			if (data.resultCode == '0000') {
				alert('发布成功！')
				location.href = url+'/myDemo/html/publish.html'
			};
		}
	})	
}

/**********多选框数据处理*********/

function checkboxStr(){
	var str = '';
	var cons = document.getElementsByName('configure');
	for (var i = 0; i < cons.length; i++) {
		if(cons[i].checked == true){
			str += cons[i].value + ',';
		}
	};
	console.log(str)
	if (str.length > 0) {
		str = str.substr(0,str.length-1)
	};
	return str;
}

/********全局变量***********/
var num=2;
var fileIds=[]; 
function addFile(obj){
	var file = obj.files[0];
	console.log(file);
	var imgUrl = window.URL.createObjectURL(file);
	console.log(imgUrl);
	$('.pictures').append('<img src="'+imgUrl+'" style="width:200px;height:200px;float:left;" </img>');
	$("input[type=file]").hide();
	var item='<input type="file" name="file" id="file'+num+'" onchange="addFile(this);"/>';
	$("#pic").append(item);
	fileIds.push('file'+num);
	num=num+1;
} 

 //获取file地址 
/*var getImgURL=function (node) {    
	 var imgURL = "";      
	         
	        var file = null;  
	        if( node.files && node.files.item(0)){ 
	            file = node.files.item(0);
	        }else if(node.files && node.files[0]) {                                  
	        	 file = node.files[0];       
	        }     
	        //Firefox 因安全性问题已无法直接通过input[file].value 获取完整的文件路径  
	        try{  
	            //Firefox7.0   
	            imgURL =  file.getAsDataURL();    
	            //alert("//Firefox7.0"+imgRUL);                           
	        }catch(e){  
	            //Firefox8.0以上                                
	            imgRUL = window.URL.createObjectURL(file);  
	            //alert("//Firefox8.0以上"+imgRUL);  
	        }  
	     catch(e){      //这里不知道怎么处理了，如果是遨游的话会报这个异常                   
	        //支持html5的浏览器,比如高版本的firefox、chrome、ie10  
	        if (node.files && node.files[0]) {                            
	            var reader = new FileReader();   
	            reader.onload = function (e) {                                        
	                imgURL = e.target.result;    
	            };  
	            reader.readAsDataURL(node.files[0]);   
	        }    
	     } 
	     return imgURL; 
}  */

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
					session.html('欢迎<a href="personal.html">'+name+'</a><span>|</span><a>退出</a>');
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
/********搜索房源*******/

function searchHouses(){
	var hcondition = $('#searchHouses').val();
	if (hcondition != '') {
		location.href = url + '/myDemo/html/sift.html?hcondition =' + hcondition;
	}else {
		location.href = url + '/myDemo/html/sift.html';
	}	
}