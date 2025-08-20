const burger = document.querySelector('nav .burger');
const style = getComputedStyle(document.body);
const rootBackgroundTransitionColor = style.getPropertyValue("--root-bg-transition-color");
const rootBackgroundColor = style.getPropertyValue("--root-bg-color");
const mainBackgroundColor = style.getPropertyValue("--main-bg-color");
const mainColor = style.getPropertyValue("--main-color");

burger.addEventListener('click', () => {
    if (burger.classList.contains('active')) {
        gsap.to('.links', {x: "100%" });
        gsap.to('.burger-line', { fill: mainColor });
        gsap.set('body', { overflowY: "auto" });
    }
    else {
        gsap.to('.burger-line', { fill: mainBackgroundColor });
        gsap.set('body', { overflowY: "hidden" });
        
        const delay = 0.2;
        const stagger = 0.2;

        gsap.to('.links', {x: "0%" });
        gsap.fromTo('.links a', { opacity: 0, x: 30}, { opacity: 1, x: 0, delay: delay, duration: 0.75, stagger: stagger });
        gsap.fromTo('.links a', { x: 50 }, { x: 0, delay: delay, duration: 0.7, stagger: stagger });
    }

    burger.classList.toggle('active');
})

function fadeInPage(){
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 0.5, delay: 0.1 });
    gsap.fromTo(':root', { background: rootBackgroundTransitionColor }, { background: rootBackgroundColor, duration: 0.6 });
}

fadeInPage();
