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

let selectModalParentSwp = new Swiper('.select_modal .swiper-parent', {
    direction: "vertical",
    slidesPerView: 'auto',
    speed: 500,
    spaceBetween: 60,
    // loop: true,
    centeredSlides: true,
    mousewheel: true,
    // freeMode: true,
    initialSlide: 4,
})
let selectModalChildSwps = document.querySelectorAll('.select_modal .swiper-child');
if (selectModalChildSwps.length) {
    selectModalChildSwps.forEach(el => {
        let swp = new Swiper(el, {
            direction: "vertical",
            slidesPerView: 'auto',
            speed: 500,
            spaceBetween: 60,
            // loop: true,
            centeredSlides: true,
            mousewheel: true,
            // freeMode: true,
        })
    })
}

let selectModalOpen = document.querySelectorAll('.select_modal__open'),
    selectModal = document.querySelector('.select_modal');

if (selectModalOpen.length) {
    selectModalOpen.forEach(btn => {
        btn.onclick = () => {
            selectModal.classList.add('active');
        }
    })
}