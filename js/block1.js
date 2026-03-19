// gsap.registerPlugin(ScrollTrigger, SplitText)

//top text
SplitText.create('.block1__top-text', {
    type: 'lines',
    linesClass: 'line',
    autoSplit: true,

    onSplit(self) {
        self.lines.forEach((line) => {
            const mask = document.createElement('div')
            mask.classList.add('line-mask')

            line.style.position = 'relative'
            line.appendChild(mask)

            gsap.fromTo(
                mask,
                { scaleX: 1 },
                {
                    scaleX: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: line,
                        start: 'top 85%',
                        end: 'top 40%',
                        scrub: 1,
                    },
                },
            )
        })
    },
})

/////////////////////////////

//bottom text
let split = SplitText.create('.block1__inner-text', {
    type: 'words,lines',
    linesClass: 'line',
    autoSplit: true,
    mask: 'lines',
})

ScrollTrigger.create({
    trigger: '.block1',
    start: 'top 50%',
    once: true,
    onEnter: () => {
        gsap.from(split.lines, {
            duration: 0.9,
            yPercent: 100,
            opacity: 0,
            stagger: 0.3,
            ease: 'expo.out',
        })
    },
})
