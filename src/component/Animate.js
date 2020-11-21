import gsap from "gsap";
//Animate text
export const textIntro = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: -1,
    ease: "back",
  });
};

export const fromRight = (elem) => {
  gsap.from(elem, {
    xPercent: -50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromLeft = (elem) => {
  gsap.from(elem, {
    xPercent: 50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromTop = (elem) => {
  gsap.from(elem, {
    yPercent: -50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
export const fromBottom = (elem) => {
  gsap.from(elem, {
    yPercent: 50,
    opacity: 0,
    duration: 1,
    ease: "back",
  });
};
