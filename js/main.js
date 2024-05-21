let homeSwp = new Swiper('.home .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    speed: 800,
    loop: true,
    autoplay: {
        delay: 4000
    },
    navigation: {
        nextEl: '.home .swiper_btn__next',
        prevEl: '.home .swiper_btn__prev',
    }
})

let homeSwpBtn = document.querySelectorAll('.home .home_lide_next');
if (homeSwpBtn.length) {
    homeSwpBtn.forEach(btn => {
        btn.onclick = () => {
            homeSwp.slideNext();
        }
    })
}

let selectModalParentSwp = new Swiper('.select_modal .swiper-parent', {
    direction: "vertical",
    slidesPerView: 'auto',
    speed: 500,
    spaceBetween: 40,
    centeredSlides: true,
    mousewheel: true,
    initialSlide: 4,
    breakpoints: {
        768: {
            spaceBetween: 60
        }
    },
    navigation: {
        nextEl: '.select_modal .swiper-parent__btn_next',
        prevEl: '.select_modal .swiper-parent__btn_prev'
    }
})

let selectModalChildSwps = document.querySelectorAll('.select_modal .swiper-child__item');
if (selectModalChildSwps.length) {
    selectModalChildSwps.forEach(el => {
        let swp = new Swiper(el.querySelector('.swiper'), {
            direction: "vertical",
            slidesPerView: 'auto',
            speed: 500,
            spaceBetween: 40,
            centeredSlides: true,
            mousewheel: true,
            breakpoints: {
                768: {
                    spaceBetween: 60
                }
            },
            navigation: {
                nextEl: el.querySelector('.swiper-child__btn_next'),
                prevEl: el.querySelector('.swiper-child__btn_prev')
            }
        })

        el.querySelectorAll('.swiper .swiper-slide button').forEach((btn, btnID) => {
            btn.onclick = () => {
                swp.slideTo(btnID);
            }
        })
    })

    document.querySelectorAll('.select_modal .swiper-parent button').forEach((btn, btnID) => {
        btn.onclick = () => {
            selectModalParentSwp.slideTo(btnID)
        }
    })

    selectModalParentSwp.on('slideChange', function (e) {
        let index = selectModalParentSwp.activeIndex;
        checkChildSwp(index)
    });

    checkChildSwp(selectModalParentSwp.activeIndex)

    function checkChildSwp(index) {
        selectModalChildSwps.forEach((el, elID) => {
            if (index == elID) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        })
    }
}

let selectModalOpen = document.querySelectorAll('.select_modal__open'),
    selectModal = document.querySelector('.select_modal'),
    selectModalClose = document.querySelectorAll('.select_modal__clsoe');

if (selectModalOpen.length) {
    selectModalOpen.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            selectModal.classList.add('active');
        }
    })

    selectModalClose.forEach(btn => {
        btn.onclick = () => {
            selectModal.classList.remove('active');
        }
    })
}

if (selectModal) {
    selectModal.onmousemove = e => {
        if (window.innerWidth > 1000) {
            if (window.innerWidth / 2 > e.clientX) {
                contentLeftShow();
            } else {
                ContentRightShow();
            }
        }
    }
    selectModal.onmouseleave = e => {
        if (window.innerWidth > 1000) {
            ContentHide();
        }
    }
}

let contentLeft = document.querySelector('.select_modal .content_left'),
    contentRight = document.querySelector('.select_modal .content_right'),
    parentBtn = document.querySelector('.select_modal .swiper-parent__btn'),
    parentSlide = document.querySelector('.select_modal .swiper-parent'),
    swiperChildWrap = document.querySelector('.select_modal .swiper-child_wrap'),
    selectContentBtn = document.querySelector('.select_modal .toggle_content_btn');

window.addEventListener('resize', function () {
    if (this.window.innerWidth <= 1000) {
        contentLeftShow();
    }
})

if (window.innerWidth <= 1000) {
    contentLeftShow();
}

selectContentBtn.onclick = () => {
    if (contentLeft.classList.contains('active')) {
        ContentRightShow();
    } else {
        contentLeftShow();
    }
}

function contentLeftShow() {
    contentLeft.classList.add('active');
    contentRight.classList.remove('active')
    parentBtn.classList.add('active');
    parentSlide.classList.add('active');
    swiperChildWrap.classList.remove('active')
}

function ContentRightShow() {
    contentLeft.classList.remove('active');
    contentRight.classList.add('active')
    parentBtn.classList.remove('active');
    parentSlide.classList.remove('active');
    swiperChildWrap.classList.add('active')
}

function ContentHide() {
    contentLeft.classList.remove('active');
    contentRight.classList.remove('active')
    parentBtn.classList.remove('active');
    parentSlide.classList.remove('active');
    swiperChildWrap.classList.remove('active')
}

let mobileMenu = document.querySelector('.mobile_menu'),
    headerBars = document.querySelector('.header_bars');

headerBars.onclick = () => {
    mobileMenu.classList.toggle('active');
}

let itemModalSwp = new Swiper('.item_modal__left .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    speed: 500,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.item_modal__left_btn_next',
        prevEl: '.item_modal__left_btn_prev'
    }
})

const accordions = document.querySelectorAll('.accordion');

if (accordions.length) {
    accordions.forEach((item) => {
        const header = item.querySelector('.accordion__head');
        const content = item.querySelector('.accordion__body');

        header.addEventListener('click', () => {
            content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
            item.classList.toggle('active');
        });
    });
}

let itemModal = document.querySelector('.item_modal'),
    itemModalOpen = document.querySelectorAll('.catalog__list_item a'),
    itemModalClose = document.querySelector('.item_modal__close');

if (itemModalOpen.length) {
    itemModalOpen.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            itemModal.classList.add('active');
        }
    })

    itemModalClose.onclick = () => {
        itemModal.classList.remove('active');
    }
}

let requestModal = document.querySelector('.request_modal'),
    requestModalOpen = document.querySelectorAll('.item_modal .btn_dark'),
    requestModalClose = document.querySelector('.request_modal__close');

if (requestModalOpen.length) {
    requestModalOpen.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            itemModal.classList.remove('active');
            requestModal.classList.add('active');
        }
    })

    requestModalClose.onclick = () => {
        requestModal.classList.remove('active');
    }
}

let thanksModal = document.querySelector('.thanks_modal'),
    thanksModalOpen = document.querySelectorAll('.request_modal .btn_dark'),
    thanksModalClose = document.querySelector('.thanks_modal__close');

if (thanksModalOpen.length) {
    thanksModalOpen.forEach(btn => {
        btn.onclick = e => {
            e.preventDefault();
            requestModal.classList.remove('active');
            thanksModal.classList.add('active');
        }
    })

    thanksModalClose.onclick = () => {
        thanksModal.classList.remove('active');
    }
}

let servicesSwp = new Swiper('.services .swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        1200: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 1.2,
        }
    },
    navigation: {
        nextEl: '.services .swiper_btn__next',
        prevEl: '.services .swiper_btn__prev'
    }
})

let reviewSwp = new Swiper('.review .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 9,
    breakpoints: {
        spaceBetween: 21,
    },
    navigation: {
        nextEl: '.review .swiper_btn__next',
        prevEl: '.review .swiper_btn__prev'
    }
})

let init = false;
let swiper;
let countryListSwp = document.querySelector('.country_list .swiper')
function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(countryListSwp, {
                slidesPerView: "auto",
                spaceBetween: 10,
                breakpoints: {
                    768: {
                        spaceBetween: 20,
                    }
                }
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

if (countryListSwp) {
    swiperCard();
}

window.addEventListener("resize", function () {
    if (countryListSwp) {
        swiperCard();
    }
});

let countryListBtn = document.querySelector('.country_list__head');

if (countryListBtn) {
    countryListBtn.onclick = () => {
        countryListSwp.classList.toggle('hidden');
    }
}