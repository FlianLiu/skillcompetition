// JavaScript Document

$(document).ready(function(){
	
	var slide_now = 1;

	function slideShow(){
		$('.slideShow .wrapper').removeClass('slide1');
		$('.slideShow .wrapper').removeClass('slide2');
		$('.slideShow .wrapper').removeClass('slide3');
		$('.slideShow ul li').removeClass('show');
		
		
		if (slide_now == 4){
			slide_now = 1;
		}
		if (slide_now == 0){
			slide_now = 3;
		}
		if (slide_now == 1){
			$('.slideShow .wrapper').addClass('slide1');
			$('.slideShow ul li.list_1').addClass('show');
		}else if (slide_now == 2){
			$('.slideShow .wrapper').addClass('slide2');
			$('.slideShow ul li.list_2').addClass('show');
		}else if (slide_now == 3){
			$('.slideShow .wrapper').addClass('slide3');
			$('.slideShow ul li.list_3').addClass('show');
		}
	}
	
	var timer = setInterval (function(){
		slide_now ++;
		slideShow();
	},5000);
	
	$('.slideShow .btnL').click(function(){
		slide_now -=1;
		slideShow();
		clearInterval(timer);
	});
	$('.slideShow .btnR').click(function(){
		slide_now +=1;
		slideShow();
	});
	$('.slideShow ul li.list_1').click(function(){
		slide_now = 1
		slideShow();
	});
	$('.slideShow ul li.list_2').click(function(){
		slide_now = 2;
		slideShow();
	});
	$('.slideShow ul li.list_3').click(function(){
		slide_now = 3;
		slideShow();
	});
	
	var view_1 = 90000;
	var view_2 = 80000;
	var view_3 = 70000;
	var view_4 = view_1 + view_2;
	
	function view(count,target){
		var now = 0;
		setInterval(function(){
			if (count > now){
				now += 1000;
				$(target).text(now);
			}
		},20);
	}
	view(view_1,'.about .view_1');
	view(view_2,'.about .view_2');
	view(view_3,'.about .view_3');
	view(view_4,'.about .view_4');
	
//	form submit
	$('.contact form button').click(function(){
		alert('已送出表單，感謝您提供的建議!');
	});
	
//	navBar Scroll
	var brand = $('.navBar h3');
	var nav1 = $('.nav1');
	var nav2 = $('.nav2');
	var nav3 = $('.nav3');
	var nav4 = $('.nav4');
	var nav5 = $('.nav5');
	
	var area1 = $('.about').offset().top;
	var area2 = $('.envir').offset().top;
	var area3 = $('.shop').offset().top;
	var area4 = $('.contact').offset().top;
	var area5 = $('.footer').offset().top;
	
	function scrTop(c,t){
		c.click(function(){
			$('html,body').animate({scrollTop: t},500);
		});
	}
	
	scrTop(brand,0);
	scrTop(nav1,area1);
	scrTop(nav2,area2);
	scrTop(nav3,area3);
	scrTop(nav4,area4);
	scrTop(nav5,area5);
});

	