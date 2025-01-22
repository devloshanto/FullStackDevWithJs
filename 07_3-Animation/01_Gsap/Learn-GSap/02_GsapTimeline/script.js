/* gsap.to("#box1", {
  x: 600,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});

gsap.to("#box2", {
  x: 700,
  rotate: 360,
  duration: 1.5,
  delay: 2.5,
  backgroundColor: "yellow",
});

gsap.to("#box3", {
  x: 800,
  rotate: 360,
  duration: 1.5,
  delay: 4,
  backgroundColor: "red",
});
 */

// |> Timeline

let timeLineIs = gsap.timeline();

timeLineIs.to("#box1", {
  x: 1000,
  rotate: 360,
  duration: 1,
  delay: 1,
});

timeLineIs.to("#box2", {
  x: 1200,
  rotate: 360,
  duration: 1,
});
timeLineIs.to("#box3", {
  x: 1400,
  rotate: 360,
  duration: 1,
});
