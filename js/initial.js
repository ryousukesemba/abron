$(function(){
	/* jquery 準備

	<link rel="stylesheet" type="text/css" href="initial.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="slick/slick-theme.css">
	<link rel="stylesheet" type="text/css" href="slick/slick.css">
	<script type="text/javascript" src = "slick/slick.min.js"></script> 

	*/

/*  ============================
 			スライダー
    ============================ */  
    /* ~~ HTML ~~
		<div class = "slider">
			<div><img src="images/image1.png"></div>
			<div><img src="images/image2.png"></div>
			<div><img src="images/image3.jpg"></div>
			<div><img src="images/image4.jpg"></div>
			<div><img src="images/image5.jpeg"></div>
			<div><img src="images/image6.jpeg"></div>
		</div>
	*/

	/* $(".slider").slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnDotsHover: true,
		lazyLoad: "pogressive"
	});

	*/




/*  ============================
 			アコーディオン
    ============================ */  

    /* ~~ HTML ~~
		<div class = "accordion">
			<p class = "accordion_parent">リスト1</p>
			<ul class ="accordion_children">
				<li>リスト1−1</li>
				<li>リスト1−1</li>
			</ul>	
		</div>
	*/

	/*
    	$(".accordion_parent").on("click",function(){
			$(this).next().slideToggle();
		});
	*/

/*  ============================
 			ページトップへの変遷
    ============================ */  
		
	/* ~~ HTML ~~
		<p class = "toTop">
		    <a href="#">ページトップへ</a>
		</p>
	*/

	/*
		$(".toTop").hide();
			$(window).scroll(function(){
				//  1000の値を変更  //
				if($(this).scrollTop() > 1000){  
					$(".toTop").fadeIn();
				} else {
					$(".toTop").fadeOut();
				}
		});
			
		$(".toTop").on("click",function(){
			$("body,html").animate({
				scrollTop:0
			},1000);
				return false;
		});	

	*/
			
});
