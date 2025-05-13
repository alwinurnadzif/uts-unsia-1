const timeline = gsap.timeline();

timeline
  .from("#profile-picture", {
    x: -200,
    opacity: 0,
    duration: 0.5,
    ease: "out",
  })
  .from("#introduction", {
    y: -200,
    opacity: 0,
    duration: 0.5,
    ease: "out",
  })
  .from(".socials", {
    y: 200,
    opacity: 0,
    duration: 0.5,
    ease: "out",
  })
  .from(
    "#education",
    {
      x: -200,
      opacity: 0,
      duration: 1,
      ease: "out",
    },
    ">",
  );
