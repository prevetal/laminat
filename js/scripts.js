// Ширина окна для ресайза
WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]
OVERLAY = document.querySelector('.overlay')


document.addEventListener('DOMContentLoaded', function () {
	// Основной слайдер на главной
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			}
		})
	}


	// Карусель товаров
	const productsSliders = [],
		products = document.querySelectorAll('.products:not(.compare_products) .swiper')

	products.forEach(function (el, i) {
		el.classList.add('products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				}
			},
			on: {
				init: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)
				},
				resize: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)
				}
			}
		}

		productsSliders.push(new Swiper('.products_s' + i, options))
	})


	// Карусель статей
	const articlesSliders = [],
		articles = document.querySelectorAll('.articles .swiper')

	articles.forEach(function (el, i) {
		el.classList.add('articles_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 3
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.article .name'))
				},
				resize: swiper => {
					swiper.el.querySelectorAll('.article .name').forEach(el => el.style.height = 'auto')

					setHeight(swiper.el.querySelectorAll('.article .name'))
				}
			}
		}

		articlesSliders.push(new Swiper('.articles_s' + i, options))
	})


	// Карусель партнёров
	const partnersSliders = [],
		partners = document.querySelectorAll('.partners .swiper')

	partners.forEach(function (el, i) {
		el.classList.add('partners_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 10,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				},
				1440: {
					spaceBetween: 40,
					slidesPerView: 'auto'
				},
				1900: {
					spaceBetween: 55,
					slidesPerView: 'auto'
				}
			},
		}

		partnersSliders.push(new Swiper('.partners_s' + i, options))
	})


	// Галерея
	const gallerySliders = [],
		gallery = document.querySelectorAll('.gallery .swiper')

	gallery.forEach(function (el, i) {
		el.classList.add('gallery_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				1280: {
					spaceBetween: 16,
					slidesPerView: 3
				}
			}
		}

		gallerySliders.push(new Swiper('.gallery_s' + i, options))
	})


	// Карусель отзывов
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach(function (el, i) {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 'auto'
				}
			},
			on: {
				init: swiper => {
					setHeight(swiper.el.querySelectorAll('.review'))
				},
				resize: swiper => {
					swiper.el.querySelectorAll('.review').forEach(el => el.style.height = 'auto')

					setHeight(swiper.el.querySelectorAll('.review'))
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Страница товара
	if ($('.product_info .images').length) {
		const productThumbs = new Swiper('.product_info .thumbs .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 8,
					slidesPerView: 'auto'
				},
				768: {
					slidesPerView: 6,
					spaceBetween: 8
				},
				1024: {
					slidesPerView: 7,
					spaceBetween: 8
				},
				1280: {
					slidesPerView: 4,
					spaceBetween: 8
				},
				1900: {
					slidesPerView: 5,
					spaceBetween: 8
				}
			}
		})

		new Swiper('.product_info .big .swiper', {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 10,
			slidesPerView: 1,
			preloadImages: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			thumbs: {
				swiper: productThumbs
			},
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			}
		})
	}


	// Сравнение товаров
	const compareStickyProductsSliders = [],
		compareStickyProducts = document.querySelectorAll('.compare_info .sticky_products .swiper')

	compareStickyProducts.forEach(function (el, i) {
		el.classList.add('compare_sticky_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 20,
					slidesPerView: 5
				}
			},
		}

		compareStickyProductsSliders.push(new Swiper('.compare_sticky_products_s' + i, options))
	})


	// Сравнение товаров
	const compareProductsSliders = [],
		compareProducts = document.querySelectorAll('.compare_products .swiper')

	compareProducts.forEach(function (el, i) {
		el.classList.add('compare_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			breakpoints: {
				0: {
					spaceBetween: 20,
					slidesPerView: 1
				},
				768: {
					spaceBetween: 20,
					slidesPerView: 2
				},
				1024: {
					spaceBetween: 20,
					slidesPerView: 3
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 4
				},
				1900: {
					spaceBetween: 20,
					slidesPerView: 5
				}
			},
			on: {
				init: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)

					let productH = $(swiper.el).find('.product').outerHeight()

					$(swiper.el).find('.swiper-button-prev, .swiper-button-next').height(productH)

					$(swiper.el).closest('.tab_content').find('.filter').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).closest('.tab_content').find('.sticky_products_wrap').css({
						'top': $(swiper.el).find('.product').outerHeight(),
						'margin-top': $(swiper.el).closest('.tab_content').find('.sticky_products').outerHeight() * -1 + 'px'
					})

					compareHeight($(swiper.el))
				},
				resize: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)

					let productH = $(swiper.el).find('.product').outerHeight()

					$(swiper.el).find('.swiper-button-prev, .swiper-button-next').height(productH)

					$(swiper.el).closest('.tab_content').find('.filter').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).closest('.tab_content').find('.sticky_products_wrap').css({
						'top': $(swiper.el).find('.product').outerHeight(),
						'margin-top': $(swiper.el).closest('.tab_content').find('.sticky_products').outerHeight() * -1 + 'px'
					})

					compareHeight($(swiper.el))
				}
			}
		}

		compareProductsSliders.push(new Swiper('.compare_products_s' + i, options))
	})

	compareProductsSliders.forEach((el, i) => el.controller.control = compareStickyProductsSliders[i])
	compareStickyProductsSliders.forEach((el, i) => el.controller.control = compareProductsSliders[i])


	// Моб. сравнение товаров
	const mobCompareStickyProductsSliders = [],
		mobCompareStickyProducts = document.querySelectorAll('.compare_info .mob_sticky_products .swiper')

	mobCompareStickyProducts.forEach(function (el, i) {
		el.classList.add('mob_compare_sticky_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 20,
			slidesPerView: 1,
			initialSlide: el.getAttribute('data-initialSlide') ? el.getAttribute('data-initialSlide') : 0
		}

		mobCompareStickyProductsSliders.push(new Swiper('.mob_compare_sticky_products_s' + i, options))
	})


	const mobCompareProductsSliders = [],
		mobCompareProducts = document.querySelectorAll('.mob_compare_products .swiper')

	mobCompareProducts.forEach(function (el, i) {
		el.classList.add('mob_compare_products_s' + i)

		let options = {
			loop: false,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			spaceBetween: 20,
			slidesPerView: 1,
			initialSlide: el.getAttribute('data-initialSlide') ? el.getAttribute('data-initialSlide') : 0,
			on: {
				init: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)

					let productH = $(swiper.el).find('.product').outerHeight()

					$(swiper.el).find('.swiper-button-prev, .swiper-button-next').height(productH)

					$(swiper.el).closest('.tab_content').find('.mob_filter').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).find('.controls').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).closest('.tab_content').find('.mob_sticky_products_wrap').css({
						'top': $(swiper.el).find('.product').outerHeight(),
						'margin-top': $(swiper.el).closest('.tab_content').find('.mob_sticky_products').outerHeight() * -1 + 'px'
					})

					compareHeight($(swiper.el))

					$(swiper.$el).find('.count .total').text(swiper.slides.length)
					setTimeout(() => $(swiper.$el).find('.count .current').text((swiper.activeIndex + 1)))
				},
				resize: swiper => {
					let products = swiper.el

					setProductsHeight(products, products.querySelectorAll('.product').length)

					let productH = $(swiper.el).find('.product').outerHeight()

					$(swiper.el).find('.swiper-button-prev, .swiper-button-next').height(productH)

					$(swiper.el).closest('.tab_content').find('.mob_filter').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).find('.controls').css({'top': $(swiper.el).find('.product').outerHeight()})

					$(swiper.el).closest('.tab_content').find('.mob_sticky_products_wrap').css({
						'top': $(swiper.el).find('.product').outerHeight(),
						'margin-top': $(swiper.el).closest('.tab_content').find('.mob_sticky_products').outerHeight() * -1 + 'px'
					})

					compareHeight($(swiper.el))
				},
				activeIndexChange: swiper => {
					setTimeout(() => $(swiper.$el).find('.count .current').text((swiper.activeIndex + 1)))
				}
			}
		}

		mobCompareProductsSliders.push(new Swiper('.mob_compare_products_s' + i, options))
	})

	mobCompareProductsSliders.forEach((el, i) => el.controller.control = mobCompareStickyProductsSliders[i])
	mobCompareStickyProductsSliders.forEach((el, i) => el.controller.control = mobCompareProductsSliders[i])


	// Залипание блока
	$('.sticky').stick_in_parent({
		offset_top: 0
	})


	// Страница товара - моб. табы
	$('.product_data .mob_tab_btn').click(function(e) {
		e.preventDefault()

		if($(this).hasClass('active')) {
			$('.product_data .mob_tab_btn').removeClass('active')
			$('.product_data .tab_content').slideUp(300)
		} else {
			$('.product_data .mob_tab_btn').removeClass('active')
			$('.product_data .tab_content').slideUp(300)

			$(this).addClass('active').next().slideDown(300)
		}
	})


	// Спойлер в тексте
	$('.text_block .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.text_block')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Отзывы
	$('.review .spoler_btn').click(function(e) {
		e.preventDefault()

		let review = $(this).closest('.review_wrap')

		review.toggleClass('open')
		review.find('.answer').slideToggle(300)
	})


	// Фильтр
	$('.filter .form .label').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})

	$priceRange = $('.filter #price_range').ionRangeSlider({
		type: 'double',
		min: 0,
		max: 35000,
		from: 1585,
		to: 34849,
		step: 1,
		onChange: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			$('.filter .item .val .from').text(data.from.toLocaleString())
			$('.filter .item .val .to').text(data.to.toLocaleString())
		},
		onUpdate: data => {
			$('.filter .price_range input.from').val(data.from.toLocaleString())
			$('.filter .price_range input.to').val(data.to.toLocaleString())

			$('.filter .item .val .from').text(data.from.toLocaleString())
			$('.filter .item .val .to').text(data.to.toLocaleString())
		}
	}).data('ionRangeSlider')

	$('.filter .price_range .input').keyup(function () {
		$priceRange.update({
			from: parseInt($('.filter .price_range input.from').val().replace(/\s/g, '')),
			to: parseInt($('.filter .price_range input.to').val().replace(/\s/g, ''))
		})
	})


	$('.filter .reset_btn').click(function() {
		$priceRange.reset()
	})


	// Фильтр - Спойлер
	$('.filter .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.data')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle(300)
	})


	// Страница товара - характеристики спойлер
	$('.product_info .features .spoler_btn').click(function(e) {
		e.preventDefault()

		let parent = $(this).closest('.features')

		$(this).toggleClass('active')
		parent.find('.hide').slideToggle('show')
	})


	// Копирование
	const clipboard = new ClipboardJS('.copy_btn')

	clipboard.on('success', (e) => {
		$(e.trigger).addClass('copied')

		setTimeout(() => $(e.trigger).removeClass('copied'), 3000)

		e.clearSelection()
	})


	// Меню
	$('header .menu_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')
		$('.menu').toggleClass('open')
	})


	// Поиск
	$('.search .input').keyup(function() {
		let parent = $(this).closest('.search')

		$(this).val().length
			? parent.find('.tips').fadeIn(200)
			: parent.find('.tips').fadeOut(100)
	})


	// Товар в сравнение
	$('.product .compare_btn, .product_info .compare_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Товар в избрайнное
	$('.product .favorite_btn, .product_info .favorite_btn').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
	})


	// Изменение количества товара
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val().replace(/,/, '.')),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if(step != 1) {
			if (inputVal > minimum) $input.val((inputVal - step).toFixed(2)  + unit)
		} else {
			if (inputVal > minimum) $input.val(inputVal - step + unit)
		}
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val().replace(/,/, '.')),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if(step != 1) {
			if (inputVal < maximum) $input.val((inputVal + step).toFixed(2) + unit)
		} else {
			if (inputVal < maximum) $input.val(inputVal + step + unit)
		}
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent           = $(this).closest('.tabs_container'),
				  activeTab         = $(this).data('content'),
				  $activeTabContent = $(activeTab),
				  level             = $(this).data('level')

			$parent.find('.tabs:first .btn').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')

			$('.sticky').trigger('sticky_kit:recalc')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab        = $(`.tabs .btn[data-content="${locationHash}"]`),
			  $activeTabContent = $(locationHash),
			  $parent           = $activeTab.closest('.tabs_container'),
			  level             = $activeTab.data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Мини всплывающие окна
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const parent = $(this).closest('.modal_cont')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			parent.find('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			parent.find('.mini_modal').addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Аксессуары
	$('.accessories .mob_tabs .mini_modal .btn').click(function(e) {
		let name = $(this).find('span').text(),
			parent = $(this).closest('.modal_cont')

		parent.find('.mini_modal .btn').removeClass('active')
		$(this).addClass('active')

		parent.find('.mini_modal_btn span').text(name)

		const $parent = $(this).closest('.tabs_container'),
			activeTab = $(this).data('content'),
			$activeTabContent = $(activeTab),
			level = $(this).data('level')

		$parent.find('.tabs:first .btn').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$(this).addClass('active')
		$activeTabContent.addClass('active')

		$('.mini_modal, .mini_modal_btn').removeClass('active')
		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	const modalBtns = document.querySelectorAll('.modal_btn')

	if (modalBtns) {
		modalBtns.forEach(el => {
			el.addEventListener('click', e => {
				e.preventDefault()

				Fancybox.close()

				Fancybox.show([{
					src: document.getElementById(el.getAttribute('data-modal')),
					type: 'inline'
				}])
			})
		})
	}


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Моб. меню
	$('.mob_header .menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .menu_btn').toggleClass('active')
		$('.menu').toggleClass('open')
		$('.col_left').toggleClass('show')
	})


	// Маска ввода
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			IMask(el, {
				mask: '+{7} (000) 000-00-00',
				lazy: true
			})
		})
	}


	// Кастомный select
	const selects = document.querySelectorAll('select'),
		selectsArray = []

	if (selects) {
		selects.forEach(el => selectsArray.push(NiceSelect.bind(el, {
			placeholder: el.getAttribute('data-placeholder')
		})))
	}


	if (is_touch_device()) {
		const subMenus = document.querySelectorAll('header .menu .sub_menu')

		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next()

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				subMenus.forEach(el => el.classList.remove('show'))
				$dropdown.addClass('show')

				BODY.style = 'cursor: pointer;'
			}
		})

		// Закрываем под. меню при клике за её пределами
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				subMenus.forEach(el => el.classList.remove('show'))

				BODY.style = 'cursor: default;'
			}
		})
	}


	// Плавная прокрутка к якорю
	const scrollBtns = document.querySelectorAll('.scroll_btn')

	if (scrollBtns) {
		scrollBtns.forEach(element => {
			element.addEventListener('click', e => {
				e.preventDefault()

				let anchor = element.getAttribute('data-anchor')

				document.getElementById(anchor).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				}, 1000)
			})
		})
	}


	// Выбор рейтинга
	$('.form .your_rating .mini_modal > *').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.modal_cont'),
			text = $(this).find('span').text()

		parent.find('.btn span').text(text)

		$('.mini_modal, .mini_modal_btn').removeClass('active')

		if (is_touch_device()) $('body').css('cursor', 'default')
	})


	// Отправка отзыва
	$('.add_review form').submit(function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: '#add_review_success_modal',
			type: 'inline'
		}])
	})


	// Кнопка 'Вверх'
	$('.buttonUp .btn, footer .arr').click((e) => {
		e.preventDefault()

		$('body, html').stop(false, false).animate({ scrollTop: 0 }, 1000)
	})


	// Выравнивание элементов в сетке
	document.querySelectorAll('.products .row').forEach(el => {
		let styles = getComputedStyle(el)

		setProductsHeight(el, parseInt(styles.getPropertyValue('--count')))
	})


	// Оформление заказа - способ доставки
	$('.checkout .delivery_method, .checkout .payment_method').click(function(e) {
		let info = $(this).data('info'),
			parent = $(this).closest('.section')

		parent.find('.method_info').hide()
		parent.find('.' + info).fadeIn(300)
	})


	// Удаление товара из корзины
	$('.cart_info .product .delete_btn').click(function(e) {
		e.preventDefault()

		$(this).closest('.product').remove()
	})
})



window.addEventListener('scroll', function () {
	// Кнопка 'Вверх'
	$(window).scrollTop() > $(window).innerHeight()
		? $('.buttonUp').fadeIn(300)
		: $('.buttonUp').fadeOut(200)


	// Боковая панель
	$(window).scrollTop() > $('header').outerHeight()
		? $('.menu').addClass('fixed')
		: $('.menu').removeClass('fixed')
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Перезапись ширины окна
		WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


		// Выравнивание элементов в сетке
		document.querySelectorAll('.products .row').forEach(el => {
			let styles = getComputedStyle(el)

			setProductsHeight(el, parseInt(styles.getPropertyValue('--count')))
		})


		// Моб. версия
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})



// Выравнивание товаров
function setProductsHeight(context, step) {
	let start = 0,
		finish = step,
		products = [...context.querySelectorAll('.product')],
		productNames = context.querySelectorAll('.name'),
		i = 0

	products.forEach(el => el.style.height = 'auto')
	productNames.forEach(el => el.style.height = 'auto')

	products.forEach(el => {
		products.slice(start, finish).forEach(el => el.setAttribute('nodeList', i))

		setHeight(context.querySelectorAll('[nodeList="' + i + '"] .name'))
		setHeight(context.querySelectorAll('[nodeList="' + i + '"]'))

		start = start + step
		finish = finish + step
		i++
	})
}



// Выравнивание в сравнении
function compareHeight(slider) {
	slider.find('.compare_features .item .label').height('auto')
	slider.find('.compare_features .item .val').height('auto')

	let productFeatures = slider.find('.compare_features'),
		labelSizes = new Object(),
		valSizes = new Object()


	productFeatures.each(function () {
		$(this).find('.item').each(function () {
			if (labelSizes[$(this).index()]) {
				if ($(this).find('.label').outerHeight() > labelSizes[$(this).index()]) {
					labelSizes[$(this).index()] = $(this).find('.label').outerHeight()
				}
			} else {
				labelSizes[$(this).index()] = $(this).find('.label').outerHeight()
			}


			if (valSizes[$(this).index()]) {
				if ($(this).find('.val').outerHeight() > valSizes[$(this).index()]) {
					valSizes[$(this).index()] = $(this).find('.val').outerHeight()
				}
			} else {
				valSizes[$(this).index()] = $(this).find('.val').outerHeight()
			}
		})
	})

	$.each(labelSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.label').eq(key).innerHeight(data)
		})
	})

	$.each(valSizes, (key, data) => {
		productFeatures.each(function () {
			$(this).find('.val').eq(key).innerHeight(data)
		})
	})
}