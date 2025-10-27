const moreTeks = document.getElementById("moreTeks");
const klar = document.getElementById("klar");

function more() {
    if (moreTeks.textContent === "...") moreTeks.textContent = "tentu saja jadi suka coding"
    klar.classList.remove("hidden");
    moreTeks.disabled = true;
}
function klarifi() {
    klar.classList.add("hidden");
    const more = document.getElementById("klarifikasi");
    more.classList.remove("hidden");
}