$('.open').click(function() {
	$('.more').slideToggle(1000);
})
$('.serve').mouseenter(function() {
	$('.way').css("display", "block");
})
$('.way').mouseleave(function() {
	$('.way').css("display", "none");
})
$('.ac').click(function() {
	$('.yunying,.solve').css("display", "none");
	$('.qiye').css("display", "block")
})
$('.dc').click(function() {
	$('.qiye,.solve').css("display", "none");
	$('.yunying').css("display", "block")
})
$('.fc').click(function() {
	$('.qiye,.yunying').css("display", "none");
	$('.solve').css("display", "block")
})
$('.search').click(function() {
	$('.box,.bo').show(1000);
	$('.other,.serve,.shop').hide();
	$('.cover').css('display','block')
})
$('.bo>i').click(function() {
	$('.box,.bo').hide();
	$('.other,.serve,.shop').show(1000);
	$('.cover').css('display','none')
})
//滚动条监听事件

$(function() {
	/**
	 * 根据屏幕宽度的变化决定轮播图片应该展示什么 5    */
	function resize() {
		// 获取屏幕宽度
		var windowWidth = $(window).width();
		// 判断屏幕属于大还是小
		var isSmallScreen = windowWidth < 768;
		// 根据大小为界面上的每一张轮播图设置背景
		$('#main_ad > .carousel-inner > .item').each(function(i, item) {
			var $item = $(item);
			// var imgSrc = $item.data(isSmallScreen ? 'image-xs' : 'image-lg');
			var imgSrc =
				isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
			// 设置背景图片
			$item.css('backgroundImage', 'url("' + imgSrc + '")');
			//
			// 因为我们需要小图时 尺寸等比例变化，所以小图时我们使用img方式
			if(isSmallScreen) {
				$item.html('<img src="' + imgSrc + '" alt="" />');
			} else {
				$item.empty();
			}
		});
	}
	// // 让window对象立即触发一下resize，初始化div的背景图
	// $(window).trigger('resize');

	$(window).on('resize', resize).trigger('resize');
});
$('.people').mouseenter(function() {
	$('.people>.number>span>i').show();
})
$('.people').mouseleave(function() {
	$('.people>.number>span>i').hide();
})
$('.copany').mouseenter(function() {
	$('.copany>.number>span>i').show();
})
$('.copany').mouseleave(function() {
	$('.copany>.number>span>i').hide();
})
$('.user').mouseenter(function() {
	$('.user>.number>span>i').show();
})
$('.user').mouseleave(function() {
	$('.user>.number>span>i').hide();
})
$(".aboutBranchWebsite>P>i").hide().closest("p").hover(function() {
	$(this).find("i").show();
}, function() {
	$(this).find("i").hide();
});

var i = 0;

			var clone = $(".banner .img li").first().clone(); //克隆第一张图片
			$(".banner .img").append(clone); //复制到列表最后
			var size = $(".banner .img li").length;

			for(var j = 0; j < size - 1; j++) {
				$(".banner .num").append("<li></li>");
			}

			$(".banner .num li").first().addClass("on");

			/*自动轮播*/

			var t = setInterval(function() {
				i++;
				move();
			}, 5000);

			/*鼠标悬停事件*/

			$(".banner").hover(function() {
				clearInterval(t); //鼠标悬停时清除定时器
			}, function() {
				t = setInterval(function() {
					i++;
					move();
				}, 5000); //鼠标移出时清除定时器
			});

			/*鼠标滑入原点事件*/

			$(".banner .num li").hover(function() {

				var index = $(this).index(); //获取当前索引值
				i = index;
				$(".banner .img").stop().animate({
					left: -index * 900
				}, 900);
				$(this).addClass("on").siblings().removeClass("on");
			});

			/*向左按钮*/
			$(".banner .btn_l").click(function() {
				i++;
				move();
			})

			/*向右按钮*/
			$(".banner .btn_r").click(function() {
				i--;
				move();
			})

			/*移动事件*/
			function move() {
				if(i == size) {
					$(".banner .img").css({
						left: 0
					});
					i = 1;
				}
				if(i == -1) {
					$(".banner .img").css({
						left: -(size - 1) * 900
					});
					i = size - 2;
				}
				$(".banner .img").stop().animate({
					left: -i * 900
				}, 900);

				if(i == size - 1) {
					$(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
				} else {
					$(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
				}
			}