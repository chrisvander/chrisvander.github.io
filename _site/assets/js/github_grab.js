document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("darkMode") == 1) {
    body.classList.remove("lightbg");
    body.classList.add("dark");
  }
});

let height = () => window.innerHeight || e.clientHeight;
let width = () => window.innerWidth || e.clientWidth;
let getScroll = () => document.documentElement.scrollTop || document.body.scrollTop;
let isHidden = (el) => el.classList.contains("hidden");

var body = document.getElementsByTagName("BODY")[0];

function checkBack() {
  let back = document.getElementById("backBtn");
  if (isHidden(back) && height() - getScroll() <= 200) {
    back.classList.remove("hidden");
  }
  else if (!isHidden(back) && height() - getScroll() > 200) {
    back.classList.add("hidden");
  }
}

window.addEventListener("scroll", () => window.requestAnimationFrame(() => checkBack()));
window.addEventListener("resize", (e) => checkBack());

function togglePageOpen(page) {  
  if (page) {
    var el = document.getElementById(page);
    el.scrollIntoView({ behavior: "smooth" });
  }
  else {
    document.getElementById("landing").scrollIntoView({ behavior: "smooth" });
  }
  var back = document.getElementById("backBtn");
  if (!back.classList.contains("hidden")) {
    back.classList.add("hidden");
  }
  else {
    back.classList.remove("hidden");
  }
}

function toggleDark() {
  if (body.classList.contains("dark")) {
    localStorage.setItem("darkMode", 0);
    body.classList.remove("dark");
    body.classList.add("lightbg");
  }
  else {
    localStorage.setItem("darkMode", 1);
    body.classList.remove("lightbg");
    body.classList.add("dark");
  }
}