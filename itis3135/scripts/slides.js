document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slides");
    const thumbnails = document.querySelectorAll(".static-image");
    const last = document.querySelector(".last");
    const next = document.querySelector(".next");

    function showSlide(n) {
        slides.forEach((slide, i) => {
            slide.style.display = i === n ? "block" : "none";
        });
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle("active", i === n);
        });
    }

    function goToSlide(n) {
        index = (n + slides.length) % slides.length;
        showSlide(index);
    }

    last.addEventListener("click", () => goToSlide(index - 1));
    next.addEventListener("click", () => goToSlide(index + 1));

    thumbnails.forEach((thumb, i) => {
        thumb.addEventListener("click", () => goToSlide(i));
    });

    showSlide(index);
});