import Lenis from "lenis";
import gsap from "gsap";

// import and register ScrollTrigger
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// initialize lenis
function initLenis(){
    const lenis = new Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    
    function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    
}
initLenis();

// navbar animation
const nav = document.querySelector('nav');

gsap.to(nav, {
    borderBottom: '1px solid #88888842',
    height: '8vh',
    scrollTrigger: {
        trigger: nav,
        start: 'top top-=30',
        scrub: 1,
        end: 'bottom bottom-=40'
    }
})

var videoTL = gsap.timeline({
    scrollTrigger: {
        trigger: 'video',
        start: 'top top+=300',
        end: 'top top',
        scrub: 2
    }
});

videoTL.to('video', {
    width: '100vw',
    borderRadius: '0',
    zIndex: 100
})