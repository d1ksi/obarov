const sliderImages = document.querySelectorAll('.slider-img'),
      sliderLine = document.querySelector('.slider-line'),
      sliderDots = document.querySelectorAll('.slider-dot');
  
let sliderCount = 0,
    sliderWidth;

if (sliderImages.length > 0 && sliderLine) {
    window.addEventListener('resize', showSlide);

    setInterval(() => {
        nextSlide();
    }, 5000);

    function showSlide() {
        sliderWidth = document.querySelector('.slider').offsetWidth;
        sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
        sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
        rollSlider();
    }
    showSlide();

    function nextSlide() {
        sliderCount++;
        if (sliderCount >= sliderImages.length) sliderCount = 0;
        rollSlider();
        thisSlide(sliderCount);
    }

    function prevSlide() {
        sliderCount--;
        if (sliderCount < 0) sliderCount = sliderImages.length -1;
        rollSlider();
        thisSlide(sliderCount);
    }

    function rollSlider() {
        sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
    }

    function thisSlide(index) {
        sliderDots.forEach(item => item.classList.remove('active-dot'));
        sliderDots[index].classList.add('active-dot');
    }

    if (sliderDots.length > 0) {
        sliderDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                sliderCount = index;
                rollSlider();
                thisSlide(sliderCount);
            });
        });
    }
}

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('open');

        if (this.classList.contains('active')) {
            document.body.classList.add('body-hidden');
        } else {
            document.body.classList.remove('body-hidden');
        }
    });
}

document.querySelectorAll('.footer-title > p').forEach((toggle) => {
    toggle.addEventListener('click', function() {
        const parent = this.closest('.footer-info');
        if (parent) {
            const isOpen = parent.classList.toggle('active-footer');
            this.classList.toggle('rotate', isOpen);
        }
    });
});
