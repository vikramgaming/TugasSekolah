function ganti(show, hide1) {
    const showPage = document.getElementsByClassName(`${show}`);
    const hide1Page = document.getElementsByClassName(`${hide1}`);
    showPage[0].classList.remove("hidden");
    hide1Page[0].classList.add("hidden");
}