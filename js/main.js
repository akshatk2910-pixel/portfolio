const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const config = window.PORTFOLIO_CONFIG || {};
const linkedinLink = document.getElementById("linkedinLink");
const emailLink = document.querySelector('.contact-links a[href^="mailto:"]');

if (config.linkedin) {
  linkedinLink.href = config.linkedin;
  linkedinLink.querySelector("b").textContent = "Connect on LinkedIn ↗";
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noreferrer";
}
if (config.email) {
  emailLink.href = `mailto:${config.email}`;
  emailLink.querySelector("b").textContent = config.email + " ↗";
}
