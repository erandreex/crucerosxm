function setupBannerAction() {
	document.addEventListener("scroll", function () {
		const button = document.getElementById("stickyButton");

		if (!button) return;

		if (window.scrollY > window.innerHeight) {
			// 100vh en píxeles
			button.classList.add("slide-up");
		} else {
			button.classList.remove("slide-up");
		}
	});
}

setupBannerAction();

document.addEventListener("astro:after-swap", () => {
	setupBannerAction();
});
