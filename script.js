function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}
particlesJS("particles-js", {
  particles: {
    fps_limit: 30,
    number: { value: 130, density: { enable: true, value_area: 800 } },
    color: { value: "#00ffa2" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#00ffa2",
      opacity: 0.8,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" },
    },
    modes: {
      grab: { distance: 200, line_linked: { opacity: 1 } },
      push: { particles_nb: 4 },
    },
  },
});
