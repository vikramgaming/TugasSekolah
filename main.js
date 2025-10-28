const moreTeks = document.getElementById("moreTeks");
let hasShow = false

function more() {
    if (moreTeks.textContent !== "...") return;
    moreTeks.textContent = "";
    const teks = "tentu saja jadi suka coding. 😉";
    let i = 0;
    let adding = setInterval(() => {
    if (i > teks.length-2) return stop();;
        moreTeks.textContent += teks[i];
        i++;
    }, 25);
    function stop() {
        setTimeout(() => {moreTeks.textContent += teks[i]}, 1000);
        clearInterval(adding);
    }
    moreTeks.disabled = true;
}
function klarifi() {
    if (!hasShow) {
        const more = document.getElementById("klarifikasi");
        hasShow = true
        more.classList.remove("hidden");
    };
}

function ganti(show, hide1, hide2) {
    const more = document.getElementById("klarifikasi");
    const showPage = document.getElementsByClassName(`${show}`);
    const hide1Page = document.getElementsByClassName(`${hide1}`);
    const hide2Page = document.getElementsByClassName(`${hide2}`);
    if (!more.classList.contains("hidden")) more.classList.add("hidden");
    showPage[0].classList.remove("hidden");
    hide1Page[0].classList.add("hidden");
    hide2Page[0].classList.add("hidden");
}