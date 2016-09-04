/*
* @Author: Administrator
* @Date:   2016-08-29 15:02:34
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-29 15:27:26
*/

//兼容浏览器获取当前视窗的宽高
function getInner(){
	if(typeof window.innerWidth != 'undefined'){
		return {
			width : window.innerWidth,
			height : window.innerHeight
		}
	}else{
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	}
}
function tanchuang(){
	var no = document.getElementById('no')
	var cpm = document.getElementsByClassName('cpm')[0];
	cpm.style.display = 'block';
	cpm.style.width = getInner().width + 'px';	//获取当前视窗的宽
	cpm.style.height = getInner().height + 'px';	//获取当前视窗的高
	cpm.style.backgroundColor = 'rgba(0,0,0,.5)'
	
	no.onclick = function(){
		cpm.style.display = 'none';
	}

	var CPM = document.getElementById('CPM');
	CPM.style.left = (getInner().width - CPM.offsetWidth)/2 + 'px';	
	CPM.style.top = (getInner().height - CPM.offsetHeight)/2 + 'px';

	document.documentElement.style.overflow = 'hidden';	//清除滚动条

	// var head = document.getElementsByClassName('t-head')[0];

	if (typeof onselectstart != "undefined") {        
		// IE下禁止元素被选取        
		CPM.onselectstart = new Function("return false");        
	} else {
		// firefox下禁止元素被选取的变通办法        
		CPM.onmousedown = new Function("return false");        
		CPM.onmouseup = new Function("return true");        
	} 
	//当鼠标在弹窗头部按下时
	CPM.onmousedown = function(ev){
		this.style.cursor = 'move';
		var ev = ev || window.event;
		var _this = this;
		var left = ev.clientX - CPM.offsetLeft;	//鼠标点击点距元素左边的距离
		var top = ev.clientY - CPM.offsetTop;		//鼠标点击点距元素上边的距离
		if (typeof setCaptrue != 'undefined') {
			_this.setCaptrue()	//捕获鼠标
		};

		document.onmousemove = function(ev){
			var newLeft = ev.clientX - left;
			var newTop = ev.clientY - top;
			if (newLeft < 0) {
				newLeft = 0
			} else if(newLeft > getInner().width - CPM.offsetWidth){
				newLeft = getInner().width - CPM.offsetWidth;
			};
			if (newTop < 0) {
				newTop = 0
			} else if(newTop > getInner().height - CPM.offsetHeight){
				newTop = getInner().height - CPM.offsetHeight;
			};

			CPM.style.left = newLeft + 'px';
			CPM.style.top = newTop + 'px';
		}
		document.onmouseup = function(){			
			document.onmousemove = null;	
			document.onmouseup = null;
			_this.releaseCapture()	//释放捕获
			head.style.cursor = 'default';
		}
	}
}