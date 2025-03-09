import Splide from "@splidejs/splide";

function loadSlide() {
	// Verificar si el elemento con la clase ".splide" existe en el DOM
	const splideElement = document.querySelector(".splide");
	if (splideElement) {
		new Splide(".splide", {
			type: "loop",
			padding: "2rem",
		}).mount();
	}

	// Verificar si el elemento con el id "#slider2" existe en el DOM
	const slider2Element = document.querySelector("#slider2");
	if (slider2Element) {
		new Splide("#slider2", {
			type: "loop",
			perPage: 2,
			autoplay: true,
			interval: 3000, // 3 segundos por slide
		}).mount();
	}
}

// Llamar a loadSlide() cuando la página cargue
loadSlide();

// Asegurar que se ejecute nuevamente al cambiar de página con astro:after-swap
document.addEventListener("astro:after-swap", () => {
	loadSlide();
});
