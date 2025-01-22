/* gsap.to("#box", {
  x: 500,
  y: 500,
  duration: 5,
  delay: 1,
});
 */

/* gsap.to("#box", "#box2", {
  x: 500,
  y: 500,
  duration: 3,
  delay: 1,
}); */

// ------------------------------
// 🧿 From & To
/* gsap.to("#box", {
  x: 800,
  duration: 3,
  delay: 1,
  borderRadius: 150,
  scale: 0.5,
});

gsap.from("#box2", {
  x: 800,
  duration: 3,
  delay: 1,
  borderRadius: 150,
  backgroundColor: "pink",
  rotate: 150,
}); */

// ------------------------------

/* gsap.to("h1", {
  color: "red",
  duration: 3,
  delay: 1,
}); */

/* gsap.from("h1", {
  opacity: 0,
  color: "red",
  duration: 3,
  delay: 1,
  y: 20,
  stagger: -1,
});
 */

// -------------------------------
// 🧿 Repeat

/* gsap.to("#box4", {
  x: 500,
  duration: 3,
  delay: 1,
  // repeat: 1,
  repeat: -1,
  borderRadius: 50,
}); */

// 🧿 YOYO

gsap.to("#box4", {
  x: 500,
  duration: 3,
  delay: 1,
  // repeat: 1,
  repeat: -1,
  yoyo: true,
  borderRadius: 50,
  rotate: 180,
});
