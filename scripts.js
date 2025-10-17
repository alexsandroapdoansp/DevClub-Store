const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu")
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");


let active = 0;
const total = items.length;
let timer;

// Função principal para atualizar o slide
function update(direction) {
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");

    if (direction > 0) {
        active++;
        if (active === total) active = 0;
    } else if (direction < 0) {
        active--;
        if (active < 0) active = total - 1;
    }

    items[active].classList.add("active");
    dots[active].classList.add("active");
    numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

// Timer automático (slide a cada 5s)
clearInterval(timer);
timer = setInterval(() => update(1), 7000);

// Botões de navegação
prevButton.addEventListener("click", () => update(-1));
nextButton.addEventListener("click", () => update(1));

// Botão hamburger
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open"); // se quiser animar o hamburger
})
