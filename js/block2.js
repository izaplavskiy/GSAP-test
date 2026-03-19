const wrapper = document.getElementById('maskedWrapper')
const blockTop = document.getElementById('blockTop')
const blockBot = document.getElementById('blockBottom')
const slideEls = document.querySelectorAll('.slide')
const titleEl = document.getElementById('slideTitle')
const textEl = document.getElementById('slideText')

// added some code

let current = 0
let timer
let running = false
let sliderActive = false

ScrollTrigger.create({
    trigger: '.pin-mask',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
    onUpdate(self) {
        const p = self.progress // 0 → 1
        const vh = 28 + (310 - 28) * p
        wrapper.style.maskSize = `auto ${vh}vh`
        wrapper.style.WebkitMaskSize = `auto ${vh}vh`

        if (p >= 0.95 && !sliderActive) {
            sliderActive = true
            startSlider()
        }

        if (p < 0.95 && sliderActive) {
            sliderActive = false
            stopSlider()
        }
    },
})

gsap.from([blockTop, blockBot], {
    opacity: 0,
    y: 80,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',

    scrollTrigger: {
        trigger: '.pin-mask',
        start: '65% center',
        toggleActions: 'play none none reverse',
    },
})

//slider
const slidesData = [
    {
        title: 'Startups &amp; Entrepreneurs',
        text: 'Early-stage teams and founders building creative-driven products, services, and platforms.',
    },
    {
        title: 'Remote &amp; Hybrid Teams',
        text: 'Distributed companies seeking a professional base to meet, collaborate, and create.',
    },
    {
        title: 'Creative Studios',
        text: 'Designers, filmmakers and artists who need space that breathes as freely as they do.',
    },
]

function goTo(i) {
    slideEls[current].classList.remove('active')

    current = (i + slidesData.length) % slidesData.length

    slideEls[current].classList.add('active')

    gsap.to([titleEl, textEl], {
        opacity: 0,
        y: -10,
        duration: 0.25,
        onComplete() {
            titleEl.innerHTML = slidesData[current].title
            textEl.textContent = slidesData[current].text

            gsap.fromTo(
                [titleEl, textEl],
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
            )
        },
    })
}

function startSlider() {
    if (running) return
    running = true
    timer = setInterval(() => {
        goTo(current + 1)
    }, 3000)
}

function stopSlider() {
    if (!running) return
    running = false
    clearInterval(timer)
}
