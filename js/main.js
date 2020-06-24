$(function(){
	var mySwiper = new Swiper('.swiper-container', {
	    slidesPerView: 1,
	    loop: true,
	    navigation: {
		    nextEl: '.arrow',
		},
		breakpoints: {
	    	500: {
	    		slidesPerView: 2,
	    	},
	    },
	})
	const mNav = $('.header-wrapper')
	let mMenuBtn = $('.m-menu')
	mMenuBtn.on('click', function(){
		mNav.toggleClass('active')
		if (mNav.hasClass('active')) {
			$('.m-menu-img').attr('src','img/m-menu-close.png')
		} else
		$('.m-menu-img').attr('src','img/m-menu.png')
	})
})
