// on page scroll animations js
$(window).on('load',function() {
	$('.loader-wrapper').fadeOut('slow');
	$(function() {
		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(e) {
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
		},{
			// オプション設定
			rootMargin: '0px 0px -5% 0px' //下端から5%入ったところで発火
			//threshold: [0, 0.5, 1.0]
		});
		var target = document.querySelectorAll('.io'); //監視したい要素をNodeListで取得
		for(var i = 0; i < target.length; i++ ) {
			observer.observe(target[i]); // 要素の監視を開始
		}
		//アニメーションによる各要素のはみ出しを解消
		$("body").wrapInner("<div style='overflow:hidden;'></div>");
		// $("#id_selectbox").on("change", function() {
		// 	$(this).removeClass("holder_col").addClass("active_col");
		// });
	});
});

$(document).ready(function(){

	$('.navbar_toggler').click(function(){
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


// CUSTOM TABS
// $(document).ready(function(){
// 	// On Page Load Active Tab
// 	var currActiveTab = $('.custom_tabs .custom_tabs_nav a.tab_nav_active').attr('data-tag');
// 	console.log(currActiveTab);
// 	$('.custom_tabs .tabs_content_item').hide();
// 	$('.custom_tabs .tabs_content_item.' + currActiveTab).fadeIn();
// 	$('.custom_tabs .tabs_content_item.' + currActiveTab).addClass('tab_content_active');

// 	// On Click Change Tab
// 	$('.custom_tabs .custom_tabs_nav a').click(function(){
// 		$(this).parents('.custom_tabs').find('.custom_tabs_nav a').removeClass('tab_nav_active');
// 		$(this).addClass('tab_nav_active');

// 		var currActiveTab = $(this).attr('data-tag');
// 		$(this).parents('.custom_tabs').find('.tabs_content_item').hide();
// 		$(this).parents('.custom_tabs').find('.tabs_content_item').removeClass('tab_content_active');
// 		$(this).parents('.custom_tabs').find('.tabs_content_item.' + currActiveTab).fadeIn();
// 		$(this).parents('.custom_tabs').find('.tabs_content_item.' + currActiveTab).addClass('tab_content_active');
// 	});
// });

// Responsive Tabs
$(document).ready(function(){

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

	setTimeout(function(){
		var triggerEl = $('.active_tab_on_load').prev('.r-tabs-accordion-title').find('.r-tabs-anchor')
		triggerEl.trigger('click');
		console.log(triggerEl)
	},100);

});


//**** */ COUNT NUMBER OF LIENS AND APPEND IT : START ****
// COUNT NUMBER OF ELEMENT LINES
function countElemLines(yourElement) {
	var el = $(yourElement);
	var elHeight = el.height();
	var elLineHeight = parseInt(el.css('line-height'));
	var ellines = elHeight / elLineHeight;
	return ellines;
}

// Add Attr(no-of-line)
function attrNoLines(yourElement) {
	$(yourElement).each(function() {
		var currElem = $(this)
		var noOfLines = countElemLines(currElem);
		currElem.attr('no-of-lines', noOfLines);
		return noOfLines;
	});
}

// Append Span Element To repeating lines()
function appendPerLineData(yourElement, appendHtml){
	$(window).on('load resize', function(){
		var currElem = yourElement;
		attrNoLines(currElem);

		$(currElem).each(function() {
			$(this).find('span').remove();
			var noOfLinesAttr = $(this).attr('no-of-lines');

			let i = 0;
			while(i < noOfLinesAttr){
				$(this).append(appendHtml);
				i++;
			}
		});
	});
}

// Note** 	Use this function where you want to append span per lines.
// 			In this function 1-arrgument => whom you want to target example('.regular-head2 h2');
// 			In this function 2-arrgument => what you want to append(HTML|TEXT ONLY)* example('<span></span>');
// appendPerLineData();
//**** */ COUNT NUMBER OF LIENS AND APPEND IT : END ****


appendPerLineData('.regular-head2 h2', '<span></span>');