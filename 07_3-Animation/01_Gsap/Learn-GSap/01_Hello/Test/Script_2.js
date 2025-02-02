/* gsap.to("#box", {
  x: 500,
  y: 500,
  duration: 5,
  delay: 1,
});

gsap.to("#box2", {
  x: 200,
  y: 200,
  duration: 6,
  delay: 1,
}); */

/* ❌ gsap.to("#box", "#box2", {
  x: 500,
  y: 500,
  duration: 3,
  delay: 1,
}); */

gsap.to("#box , #box2", {
  x: 800,
  duration: 3,
  delay: 1,
  borderRadius: 150,
});

// ------------------------------

// gsap.to("#box", {
//   x: 800,
//   duration: 3,
//   delay: 1,
//   borderRadius: 150,
//   scale: 0.5,
// });

/* gsap.from("#box , #box2", {
  x: 800,
  duration: 3,
  delay: 1,
  borderRadius: 150,
  scale: 0.5,
  yoyo: true,
  repeat: -1,
});
 */
