function setupMenu() {
	// Mobile menu toggle
	const menuToggle = document.getElementById("menu-toggle");

	if (!menuToggle) return;

	const closeMenu = document.getElementById("close-menu");
	const mobileMenu = document.getElementById("mobile-menu");
	const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

	// Mobile dropdown toggles
	const mobileDropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle");

	// Open mobile menu
	menuToggle.addEventListener("click", function () {
		mobileMenu.classList.add("open");
		mobileMenuOverlay.classList.remove("hidden");
		document.body.style.overflow = "hidden"; // Prevent scrolling
	});

	// Close mobile menu
	function closeMenuFunction() {
		mobileMenu.classList.remove("open");
		mobileMenuOverlay.classList.add("hidden");
		document.body.style.overflow = ""; // Re-enable scrolling
	}

	closeMenu.addEventListener("click", closeMenuFunction);
	mobileMenuOverlay.addEventListener("click", closeMenuFunction);

	// Toggle mobile submenus
	mobileDropdownToggles.forEach((toggle) => {
		toggle.addEventListener("click", function () {
			const submenu = this.nextElementSibling;
			const arrow = this.querySelector(".flechaa");

			submenu.classList.toggle("open");

			// Rotate arrow
			if (submenu.classList.contains("open")) {
				arrow.classList.add("rotate-180");
			} else {
				arrow.classList.remove("rotate-180");
			}
		});
	});

	// Close mobile menu on window resize if desktop view
	window.addEventListener("resize", function () {
		if (window.innerWidth >= 1024) {
			// lg breakpoint
			closeMenuFunction();
		}
	});
}

setupMenu();

document.addEventListener("astro:after-swap", () => {
	setupMenu();
});
