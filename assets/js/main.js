
<script>
  $(document).ready(function() {
    "use strict";

    /**
     * Preloader
     */
    const preloader = $('#preloader');
    if (preloader.length) {
      $(window).on('load', function() {
        preloader.remove();
      });
    }

    /**
     * Sticky header on scroll
     */
    const selectHeader = $('#header');
    if (selectHeader.length) {
      $(window).on('scroll', function() {
        $(window).scrollTop() > 100 ? selectHeader.addClass('sticked') : selectHeader.removeClass('sticked');
      });
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = $('.mobile-nav-show');
    const mobileNavHide = $('.mobile-nav-hide');

    $('.mobile-nav-toggle').on('click', function(event) {
      event.preventDefault();
      mobileNavToggle();
    });

    function mobileNavToggle() {
      $('body').toggleClass('mobile-nav-active');
      mobileNavShow.toggleClass('d-none');
      mobileNavHide.toggleClass('d-none');
    }

    /**
     * Toggle mobile nav dropdowns
     */
    const navDropdowns = $('.navbar .dropdown > a');

    navDropdowns.on('click', function(event) {
      if ($('.mobile-nav-active').length) {
        event.preventDefault();
        $(this).toggleClass('active').next().toggleClass('dropdown-active');
        let dropDownIndicator = $(this).find('.dropdown-indicator');
        dropDownIndicator.toggleClass('bi-chevron-up bi-chevron-down');
      }
    });

    /**
     * Scroll top button
     */
    const scrollTop = $('.scroll-top');
    if (scrollTop.length) {
      const toggleScrollTop = function() {
        $(window).scrollTop() > 100 ? scrollTop.addClass('active') : scrollTop.removeClass('active');
      }
      $(window).on('load scroll', toggleScrollTop);
      scrollTop.on('click', function() {
        $('html, body').animate({
          scrollTop: 0
        }, 'slow');
      });
    }

    /**
     * Initiate glightbox
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 3,
        }
      }
    });

    /**
     * Porfolio isotope and filter
     */
    let portfolioIsotope = $('.portfolio-isotope');

    if (portfolioIsotope.length) {
      let portfolioFilter = portfolioIsotope.data('portfolio-filter') ? portfolioIsotope.data('portfolio-filter') : '*';
      let portfolioLayout = portfolioIsotope.data('portfolio-layout') ? portfolioIsotope.data('portfolio-layout') : 'masonry';
      let portfolioSort = portfolioIsotope.data('portfolio-sort') ? portfolioIsotope.data('portfolio-sort') : 'original-order';

      $(window).on('load', function() {
        let portfolio = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
          layoutMode: portfolioLayout,
          filter: portfolioFilter,
          sortBy: portfolioSort
        });

        let menuFilters = $('.portfolio-isotope .portfolio-flters li');
        menuFilters.on('click', function() {
          $('.portfolio-isotope .portfolio-flters .filter-active').removeClass('filter-active');
          $(this).addClass('filter-active');
          portfolio.isotope({
            filter: $(this).data('filter')
          });
          if (typeof aos_init === 'function') {
            aos_init();
          }
        });
      });
    }

    /**
     * Animation on scroll function and init
     */
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: 'slide',
        once: true,
        mirror: false
      });
    }
    $(window).on('load', function() {
      aos_init();
    });

  });
</script>
