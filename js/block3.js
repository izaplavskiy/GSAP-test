// const splitTargets = document.querySelectorAll(
//     '.audience-title, .audience-desc, .who-label',
// )

splitTargets.forEach((el) => {
    const split = new SplitType(el, { types: 'lines' })
    split.lines.forEach((line) => {
        const mask = document.createElement('div')
        mask.classList.add('line-mask')
        line.parentNode.insertBefore(mask, line)
        mask.appendChild(line)
        line.classList.add('line-inner')
    })
})

gsap.set('#line', {
    opacity: 0,
    x: 268.5,
    y: 89.5,
    xPercent: -50,
    yPercent: -50,
    transformOrigin: '50% 50%',
})

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.morph-section',
        start: 'top top',
        end: '+=300%',
        scrub: 1,
        pin: true,
        snap: {
            snapTo: [0, 0.5, 1],
            duration: 0.4,
        },
        anticipatePin: 1,
        invalidateOnRefresh: true,
    },
})

tl.to(
    '#shape-left',
    {
        x: 179,
        rotation: 45,
        transformOrigin: '50% 50%',
        ease: 'none',
        duration: 1,
    },
    0,
)

    .to(
        '#shape-center',
        {
            opacity: 0,
            duration: 0.5,
        },
        0,
    )

    .to(
        '#shape-right',
        {
            x: -180,
            rotation: -45,
            transformOrigin: '50% 50%',
            opacity: 0,
            duration: 1,
        },
        0,
    )

    .to(
        '.decor-centered-line',
        {
            background: '#D36242',
        },
        '-=0.2',
    )

tl.to('#shape-left', {
    scale: 1.25,
    duration: 0.6,
})

    .to('#shape-left', {
        scaleY: 1.55,
        scaleX: 0.21,
        skewX: 4,
        skewY: 53,
        rotate: 42,
        x: 268.5,
        y: 89.5,
        xPercent: -50,
        yPercent: -50,
        transformOrigin: '50% 50%',
        duration: 0.6,
    })

    .to('.decor-centered-line', {
        background: '#5044404D',
        zIndex: '-1',
    })

    .to(
        '#line',
        {
            opacity: 1,
            duration: 0.6,
        },
        '-=0.6',
    )

tl.to(
    '.morph-section',
    {
        background: '#A9472C',
        duration: 1,
    },
    0.6,
)

    .to(
        '.morph-section',
        {
            background: '#E6D2B5',
            duration: 1,
        },
        1.6,
    )

gsap.set(['#num2', '#num3'], {
    opacity: 0,
    y: 10,
})

gsap.set(
    [
        '#bottom2 .line-inner',
        '#bottom3 .line-inner',
        '#label2 .line-inner',
        '#label3 .line-inner',
    ],
    {
        translateY: '110%',
    },
)

tl.to('#num1', { opacity: 0, duration: 0.22 }, 0.7).to(
    '#num2',
    { opacity: 1, duration: 0.22 },
    0.9,
)

tl.to('#num2', { opacity: 0, duration: 0.22 }, 1.7).to(
    '#num3',
    { opacity: 1, duration: 0.22 },
    1.9,
)

/* LABEL 1 → 2 */
tl.to(
    '#label1 .line-inner',
    { translateY: '-110%', duration: 0.35, ease: 'power2.in' },
    0.7,
)

    .to(
        '#label2 .line-inner',
        { translateY: '0%', duration: 0.45, ease: 'power3.out' },
        0.9,
    )

/* BOTTOM 1 → 2 */
tl.to(
    '#bottom1 .line-inner',
    { translateY: '-110%', duration: 0.35, stagger: 0.04, ease: 'power2.in' },
    0.7,
)

    .to(
        '#bottom2 .line-inner',
        { translateY: '0%', duration: 0.45, stagger: 0.05, ease: 'power3.out' },
        0.9,
    )

/* LABEL 2 → 3 */
tl.to(
    '#label2 .line-inner',
    { translateY: '-110%', duration: 0.35, ease: 'power2.in' },
    1.7,
)

    .to(
        '#label3 .line-inner',
        { translateY: '0%', duration: 0.45, ease: 'power3.out' },
        1.9,
    )

/* BOTTOM 2 → 3 */
tl.to(
    '#bottom2 .line-inner',
    { translateY: '-110%', duration: 0.35, stagger: 0.04, ease: 'power2.in' },
    1.7,
)

    .to(
        '#bottom3 .line-inner',
        { translateY: '0%', duration: 0.45, stagger: 0.05, ease: 'power3.out' },
        1.9,
    )
