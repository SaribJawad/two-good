function locoXscrolltrig() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoXscrolltrig();

function navbarAnim() {
  gsap.to("#nav-part1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -20%",
      scrub: true,
    },
  });

  gsap.to("#nav-part2 ", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      // markers: true,
      start: "top 0%",
      end: "top -20%",
      scrub: true,
    },
  });
}

navbarAnim();

function videoCursor() {
  var videocon = document.querySelector("#video-container");
  var playbtn = document.querySelector("#play");

  videocon.addEventListener("mouseenter", () => {
    //   playbtn.style.opacity = 1;
    //   playbtn.style.scale = 1;
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });

  videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });

  videocon.addEventListener("mousemove", (dets) => {
    gsap.to(playbtn, {
      left: dets.x - 60,
      top: dets.y - 60,
    });
  });
}

videoCursor();

function loadingAnim() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.2,
  });

  gsap.from("#page1 #video-container", {
    y: 100,
    opacity: 0,
    delay: 1,
    duration: 0.9,
    stagger: 0.2,
  });

  gsap.from("#nav", {
    y: -100,
    opacity: 0,
    delay: 1,
    duration: 0.9,
    stagger: 0.2,
  });
}

loadingAnim();

function cursorAnimation() {
  document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  var crsr = document.querySelectorAll(".child");
  crsr.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(2)",
      });
    });
  });

  crsr.forEach((e) => {
    e.addEventListener("mouseleave", () => {
      gsap.to("#cursor", {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  });
}

cursorAnimation();

function page2boxhover() {
  // box1 hover in box content
  var box = document.querySelector("#box1");
  box.addEventListener("mouseenter", () => {
    gsap.to(box, {
      height: "300px",
      duration: 0.2,
    });
    var img = document.querySelectorAll("#box1 img");
    img.forEach(function (e) {
      e.style.opacity = 1;
      e.style.scale = 1;
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      height: "60px",
    });
    var img = document.querySelectorAll("#page2 .elem .box .boxContent img");
    img.forEach(function (e) {
      e.style.opacity = 0;
      e.style.scale = 0;
    });
  });

  // box2 hover in box context
  var box2 = document.querySelector("#box2");
  box2.addEventListener("mouseenter", () => {
    gsap.to(box2, {
      height: "300px",
      duration: 0.2,
    });
    var img = document.querySelectorAll("#box2 .boxContent img");
    img.forEach(function (e) {
      e.style.opacity = 1;
      e.style.scale = 1;
    });
  });

  box2.addEventListener("mouseleave", () => {
    gsap.to(box2, {
      height: "60px",
    });
    var img = document.querySelectorAll("#box2 img");
    img.forEach(function (e) {
      e.style.opacity = 0;
      e.style.scale = 0;
    });
  });

  //box3 hover in box content
  var box3 = document.querySelector("#box3");
  box3.addEventListener("mouseenter", () => {
    gsap.to(box3, {
      height: "300px",
      duration: 0.2,
    });
    var img = document.querySelectorAll("#box3 .boxContent img");
    img.forEach(function (e) {
      e.style.opacity = 1;
      e.style.scale = 1;
    });
  });

  box3.addEventListener("mouseleave", () => {
    gsap.to(box3, {
      height: "60px",
    });
    var img = document.querySelectorAll("#box3 img");
    img.forEach(function (e) {
      e.style.opacity = 0;
      e.style.scale = 0;
    });
  });
}
page2boxhover();

function footeranim() {
  gsap.from("#page5 #page5-content #page5-left", {
    opacity: 1,
    x: -300,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true,
      start: "top 10%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#page5 #page5-content #page5-right", {
    opacity: 1,
    x: 300,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true,
      start: "top 10%",
      end: "top 40%",
      scrub: 3,
    },
  });

  gsap.from("#page5 .para", {
    opacity: 1,
    y: 300,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true,
      start: "top 10%",
      end: "top 40%",
      scrub: 1,
    },
  });

  gsap.from("#page5 #page5-content #page5-middle", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      // markers: true,
      start: "top 10%",
      end: "top 40%",
      duration: 2,
      scrub: 2,
    },
  });
}

footeranim();
