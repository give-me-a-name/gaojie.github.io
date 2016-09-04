/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-08-25 15:56:41
 * @version $Id$
 */

$(function(){
/******************************×¢²á*************************/

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
	var authCode = $('#auth').val();
	
	  var temp=$('#CPM');

	  $('#enroll').click(function(){
	    layer.open({
	      type: 1,
	      title: ['', 'background-color: #FFF;border-bottom:0'],
	      closeBtn: 1, //²»ÏÔÊ¾¹Ø±Õ°´Å¥
	      shift: 5,
	      shadeClose: false, //¿ªÆôÕÚÕÖ¹Ø±Õ
	      area: ['300px', '180px'],
	      content: temp,
	      scrollbar: false
	    });
	  })
	  $('.publish').click(function(){
	    layer.open({
	      type: 1,
	      title: ['', 'background-color: #FFF;border-bottom:0'],
	      closeBtn: 1, //²»ÏÔÊ¾¹Ø±Õ°´Å¥
	      shift: 5,
	      shadeClose: false, //¿ªÆôÕÚÕÖ¹Ø±Õ
	      area: ['300px', '180px'],
	      content: temp,
	      scrollbar: false
	    });
	  })
})	
