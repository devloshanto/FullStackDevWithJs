/* let limeLine = gsap.timeline();

limeLine.from("#page1 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
limeLine.from("#page2 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
limeLine.from("#page3 .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
 */

// ScrollTrigger
gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  // ScrollTrigger: "#page1 .box",
});
gsap.from("#page2 #box", {
  scale: 0,
  delay: 2,
  duration: 2,
  rotate: 360,
  // scrollTrigger: "#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});

/* gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  // scrollTrigger: "#page3 .box",
});
 */
