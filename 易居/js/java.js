
$(function(){

/**************分页*************/
	var Pagination=$('#Pagination');
	var Pagination2=$('#Pagination2');
	var Pagination3=$('#Pagination3');

	var initPagination = function() {
		var num_entries = $("#hiddenresult ul.result").length;
		// 创建分页
		Pagination.pagination(num_entries, {
			num_edge_entries: 1, //边缘页数
			num_display_entries: 4, //主体页数
			callback: pageselectCallback,
			items_per_page:1 //每页显示1项
		});
	 }();
	 
	function pageselectCallback(page_index, jq){
		var new_content = $("#hiddenresult ul.result:eq("+page_index+")").clone();
		$("#Searchresult").empty().append(new_content); //装载对应分页的内容
		return false;
	}

	/****************************/
	var initPagination = function() {
		var num_entries2 = $("#hiddenresult2 ul.result2").length;
		// 创建分页
		Pagination2.pagination(num_entries2, {
			num_edge_entries: 1, //边缘页数
			num_display_entries: 4, //主体页数
			callback: pageselectCallback2,
			items_per_page:1 //每页显示1项
		});
	 }();
	 
	function pageselectCallback2(page_index, jq){
		var new_content = $("#hiddenresult2 ul.result2:eq("+page_index+")").clone();
		$("#Searchresult2").empty().append(new_content); //装载对应分页的内容
		return false;
	}

	/*******************************/
	var initPagination = function() {
		var num_entries3 = $("#hiddenresult3 ul.result3").length;
		// 创建分页
		Pagination3.pagination(num_entries3, {
			num_edge_entries: 1, //边缘页数
			num_display_entries: 3, //主体页数
			callback: pageselectCallback3,
			items_per_page:1 //每页显示1项
		});
	 }();
	 
	function pageselectCallback3(page_index, jq){
		var new_content = $("#hiddenresult3 ul.result3:eq("+page_index+")").clone();
		$("#Searchresult3").empty().append(new_content); //装载对应分页的内容
		return false;
	}
	/****************分页******************/



	/********************删除 确定*****************/
	var del = $('#Searchresult ul li .delete');
	del.click(showdel);
	var index_num = null;
	$('#Pagination').on('click', 'a', function(event) {
		alert(del.length);
		del = $('#Searchresult ul li .delete');
		del.click(showdel);
	});	
	
	function showdel(event) {
		index_num = $(this).parent().index();
		$('.cpm').css('display', 'block');
		// console.log(index_num);

	}
	$('#CPM .yes').click(function(event) {
		$('#Searchresult ul li').eq(index_num).remove();
		$('.cpm').css({'display': 'none'});
	});
	$('#CPM .not').click(function(event) {
		$('.cpm').css({'display': 'none'});
	});
	$('#CPM .no').click(function(event) {
		$('.cpm').css({'display': 'none'});
	});

})
