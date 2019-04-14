var currentPage;

function togglePageOpen(page) {
    var el = document.getElementById("landing");
    var back = document.getElementById("backBtn");
    if (page) currentPage = document.getElementById(page);
    if (el.classList.contains("pageopen")) {
        el.classList.remove("pageopen");
        back.classList.add("hidden");
        currentPage.classList.remove("visible");
    }
    else {
        currentPage.classList.add("visible");
        back.classList.remove("hidden");
        el.classList.add("pageopen");
    }
}