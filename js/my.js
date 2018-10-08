/******点击向下效果****/
var height=$('.cslHome').height();
$('.down').click(function(){	
	$('html,body').animate({'scrollTop':height+'px'},1000);	
})
/******导航栏固定效果*****/
$(window).scroll(function(){
				if($(window).scrollTop()>=height){
					$('.cslnav').addClass('navbar-fixed-top');
					$('.logo').css('display','block');
				}else{
					$('.cslnav').removeClass('navbar-fixed-top');
					$('.logo').css('display','none');
				}
			})
/******导航栏菜单效果*****/
/********滑动******/
    var h2=$('.cslwhat').offset().top;
	var h3=$('.cslhow').offset().top;
	var h4=$('.cslwhy').offset().top;
	var h5=$('.cslbadge').offset().top;
    $(window).scroll(function(){
    if($(window).scrollTop()>=0){
	$('#nav li:nth-of-type(2)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
		   }
	if($(window).scrollTop()>=h2-100){
	$('#nav li:nth-of-type(3)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
		   }
	if($(window).scrollTop()>=h3-150){
	$('#nav li:nth-of-type(4)').children().addClass('cslcurrent');
    $('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
		   }
	if($(window).scrollTop()>=h4-100){
	$('#nav li:nth-of-type(5)').children().addClass('cslcurrent');	
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
		   }
	if($(window).scrollTop()>=h5-100){
	$('#nav li:nth-of-type(6)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
		  }
			})
/*******点击*******/
$('#nav li:nth-of-type(2)').click(function(){
	$('#nav li:nth-of-type(2)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
	$('html,body').animate({'scrollTop':0},1000);		
}
)
$('#nav li:nth-of-type(3)').click(function(){
	$('#nav li:nth-of-type(3)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
	$('html,body').animate({'scrollTop':h2+'px'},1000);	
}
)
$('#nav li:nth-of-type(4)').click(function(){
	$('#nav li:nth-of-type(4)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
	$('html,body').animate({'scrollTop':h3-100+'px'},1000);	
}
)
$('#nav li:nth-of-type(5)').click(function(){
	$('#nav li:nth-of-type(5)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(6)').children().removeClass('cslcurrent');
	$('html,body').animate({'scrollTop':h4-50+'px'},1000);	
}
)
$('#nav li:nth-of-type(6)').click(function(){
	$('#nav li:nth-of-type(6)').children().addClass('cslcurrent');
	$('#nav li:nth-of-type(3)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(4)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(5)').children().removeClass('cslcurrent');
	$('#nav li:nth-of-type(2)').children().removeClass('cslcurrent');
	$('html,body').animate({'scrollTop':h5-55+'px'},1000);	
}
)