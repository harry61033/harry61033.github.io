$(function(){
	$("nav>ul>li").on({
		mouseenter:function(){
			$(this).css("background-color","#708090");
			$(this).children("div").stop().slideDown();
		},
		mouseleave:function(){
			$(this).css("background-color","#0000");
			$(this).children("div").stop().slideUp();
		},
		click:function(){
			$(this).css("background-color","#708090");
			$(this).children("div").stop().slideDown();
		}
	});
})