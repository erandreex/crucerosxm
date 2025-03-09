import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
	new Splide(".splide-medium", {
		type: "loop",
		perPage: 3,
		autoplay: true,
		interval: 3000, // 3 segundos por slide
	}).mount();
});
