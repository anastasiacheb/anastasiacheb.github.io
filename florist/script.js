const bars = document.querySelector(".fa-bars");
const navMob = document.querySelector(".nav-all-mob");
const xmark = document.querySelector(".fa-xmark");

bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    navMob.classList.toggle("active");
    xmark.classList.toggle("active");
});

xmark.addEventListener("click", () => {
    bars.classList.remove("active");
    navMob.classList.remove("active");
    xmark.classList.remove("active");
});

/* document.querySelectorAll(".nav-link").forEach(n => n.
 addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
 })   
    )
    */