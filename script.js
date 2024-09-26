import { 
	OverlayScrollbars ,
	ScrollbarsHidingPlugin, 
  SizeObserverPlugin, 
  ClickScrollPlugin 
} from './node_modules/overlayscrollbars/overlayscrollbars.mjs';

const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.elem').forEach(elem => {
   let image = elem.querySelector("img")
   let tl = gsap.timeline()

   let xTransform = gsap.utils.random(-100, 100);

   tl
   .set(image, {
     transformOrigin: `${xTransform < 0 ? 0 : '100%'}`,
   }, "start")
   .to(image, {
    scale: 0,
    ease: 'none',
    scrollTrigger: {
      scrub: true,
      trigger: image,
      start: 'top top',
      end: 'bottom top',
    }
   }, "start")
   .to(elem, {
    xPercent: xTransform,
    ease: 'none',
    scrollTrigger: {
      scrub: true,
      trigger: image,
      start: 'top bottom',
      end: 'bottom top',
    }
   });
});

OverlayScrollbars(document.querySelector('body'), {
  className: (document.body.classList.contains('os-theme-dark') ? "os-theme-dark" : "os-theme-light"),
});