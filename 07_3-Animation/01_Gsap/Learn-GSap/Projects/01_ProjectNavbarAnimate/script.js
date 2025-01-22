let timeLineAnimate = gsap.timeline();

timeLineAnimate.from(".logo h2", {
  y: -30,
  duration: 1,
  delay: 0.5,
  opacity: 0,
});

timeLineAnimate.from(".menu a", {
  y: -30,
  duration: 0.5,
  opacity: 0,
  stagger: 0.3,
});

timeLineAnimate.from(".text h1", {
  y: 20,
  opacity: 0,
  duration: 0.6,
  scale: 0.2,
  color: "Crimson",
});
