// on page scroll animations js
$(window).on('load', function () {
	$('.loader-wrapper').fadeOut('slow');
	$(function () {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (!e.isIntersecting) return;
				e.target.classList.add('move'); // 交差した時の処理
				observer.unobserve(e.target);
				// target element:
				//   e.target				ターゲット
				//   e.isIntersecting		交差しているかどうか
				//   e.intersectionRatio	交差している領域の割合
				//   e.intersectionRect		交差領域のgetBoundingClientRect()
				//   e.boundingClientRect	ターゲットのgetBoundingClientRect()
				//   e.rootBounds			ルートのgetBoundingClientRect()
				//   e.time					変更が起こったタイムスタンプ
			})
		}, {
			// オプション設定
			rootMargin: '0px 0px -5% 0px' //下端から5%入ったところで発火
			//threshold: [0, 0.5, 1.0]
		});
		var target = document.querySelectorAll('.io'); //監視したい要素をNodeListで取得
		for (var i = 0; i < target.length; i++) {
			observer.observe(target[i]); // 要素の監視を開始
		}
		//アニメーションによる各要素のはみ出しを解消
		$("body").wrapInner("<div style='overflow:hidden;'></div>");
		// $("#id_selectbox").on("change", function() {
		// 	$(this).removeClass("holder_col").addClass("active_col");
		// });
		setTimeout(function () {
			$(".banner_section").removeClass("before_load");
		}, 1000);
	});
});

$(document).ready(function () {

	$('.navbar_toggler').click(function () {
		$('body').toggleClass('no_scroll');
		$(this).toggleClass('open_menu');
		$(this).next("nav").toggleClass('navbar_animate');
	});

	// got to page top js
	// $(window).on('load scroll',function(){
	// 	var	windowTop = $(window).scrollTop();
	// 	if(windowTop > 600) {
	// 		$('.pagetop').fadeIn();
	// 	} else {
	// 		$('.pagetop').fadeOut();
	// 	}
	// });
	// $('.pagetop').on('click', function (event) {
	// 	event.preventDefault();
	// 	$('body,html').animate({
	// 		scrollTop: 0,
	// 	}, 800);
	// });
});

// Responsive Tabs
$(document).ready(function () {

	$('#re_purchase').responsiveTabs({
		startCollapsed: 'accordion',
		active: 1,
		animation: 'slide'
	});

	$('#re_sale').responsiveTabs({
		startCollapsed: 'accordion',
		active: 1,
		animation: 'slide'
	});

	setTimeout(function () {
		var triggerEl = $('.active_tab_on_load').prev('.r-tabs-accordion-title').find('.r-tabs-anchor')
		triggerEl.trigger('click');
		// console.log(triggerEl)
	}, 100);

	$(function () {
		$(".faq_content").accordion({
			heightStyle: "content",
			collapsible: true
		});
	});

	// banner animation JS
	// $(window).on('load', function(){
	// 	var	bannerHeight = $(".banner_animation").height();
	// 	$(".banner_after_section").css("margin-top", bannerHeight)
	// });

	// navigation animation JS
	// $(window).on('load resize scroll', function(){
	// 	var screen = jQuery(window).width();
	// 	var windowHeight = $(window).height();
	// 	var navHeight = $(".site_header.inner_page_header").innerHeight();
	// 	var windowTop = $(window).scrollTop();

	// 	if(windowTop > 0) {
	// 		$(".site_header.inner_page_header").addClass("header_fixed_inner");
	// 	} else {
	// 		$(".site_header.inner_page_header").removeClass("header_fixed_inner");
	// 	}

	// });
	$(window).on('load resize scroll', function () {
		var screen = jQuery(window).width();
		var windowHeight = $(window).height();
		var navHeight = $("header.site_header").innerHeight();
		var windowTop = $(window).scrollTop();
		if (windowTop > (windowHeight - 250)) {
			$("header.site_header").addClass("header_fixed");
		} else {
			$("header.site_header").removeClass("header_fixed");
		}
	});

	$('.trading_content_slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1167,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 901,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 676,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});