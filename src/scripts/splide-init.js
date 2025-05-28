import Splide from "@splidejs/splide";

function loadSlide() {
	const splideElement = document.querySelector(".splide");
	if (splideElement) {
		new Splide(".splide", {
			type: "loop",
			padding: "2rem",
		}).mount();
	}

	const slider2Element = document.querySelector("#slider2");
	if (slider2Element) {
		new Splide("#slider2", {
			type: "loop",
			perPage: 2,
			autoplay: true,
			interval: 3000,
		}).mount();
	}

	const slider3Element = document.querySelector("#slider3");
	if (slider3Element) {
		new Splide("#slider3", {
			type: "loop",
			autoplay: true,
			interval: 5000,
		}).mount();
	}
}

// Llamar a loadSlide() cuando la página cargue
loadSlide();

// Asegurar que se ejecute nuevamente al cambiar de página con astro:after-swap
document.addEventListener("astro:after-swap", () => {
	loadSlide();
});
