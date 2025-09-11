function setupSubscribeForm() {
	document.addEventListener("DOMContentLoaded", () => {
		const emailInput = document.getElementById("subscribeemail");
		const submitButton = emailInput?.nextElementSibling; // El botón "ENVIAR"
		const messageContainer = document.getElementById("mensajesubcripcion"); // Contenedor del mensaje

		if (!emailInput || !submitButton || !messageContainer) return;

		submitButton.addEventListener("click", async () => {
			const email = emailInput.value.trim();

			if (!email) {
				messageContainer.textContent = "Por favor, ingresa un correo electrónico ❌";
				messageContainer.className = "text-center text-sm mt-2 text-red-600";
				return;
			}

			try {
				const response = await fetch("https://crucerosxm-server.fly.dev/subscribe", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ correo: email }),
				});

				if (response.ok) {
					messageContainer.textContent = "¡Suscripción exitosa! ✅";
					messageContainer.className = "text-left text-sm mt-2 text-green-600";
					emailInput.value = ""; // Limpiar input
				} else {
					throw new Error("Error en la suscripción");
				}
			} catch (error) {
				console.error("Error:", error);
				messageContainer.textContent = "Hubo un problema al suscribirse ❌";
				messageContainer.className = "text-left text-sm mt-2 text-red-600";
			}
		});
	});
}

setupSubscribeForm();

document.addEventListener("astro:after-swap", () => {
	setupSubscribeForm();
});
