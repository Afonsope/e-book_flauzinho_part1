document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function checkScroll() {
        const windowHeight = window.innerHeight;

        elements.forEach((element) => {
            const positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -50) {
                element.classList.add("scrolled1");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Para ativar os elementos já visíveis ao carregar a página
});