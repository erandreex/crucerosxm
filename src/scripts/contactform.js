function setupContactForm() {
	document.addEventListener("DOMContentLoaded", () => {
		const form = document.getElementById("contactForm");

		if (!form) return;

		const messageContainer = document.createElement("p"); // Crear el mensaje dinámico
		messageContainer.className = "text-center text-sm mt-2"; // Agregar clases de estilo
		messageContainer.style.display = "none"; // Ocultarlo por defecto

		// Insertar el mensaje antes del botón de enviar
		const submitButton = form.querySelector("button[type='submit']");
		submitButton.parentNode.insertBefore(messageContainer, submitButton);

		if (!form) return;

		form.addEventListener("submit", async (event) => {
			event.preventDefault(); // Evita el envío predeterminado del formulario

			const formData = new FormData(form);
			const data = {
				nombre: formData.get("nombre"),
				telefono: formData.get("telefono"),
				correo: formData.get("correo"),
				fechasalida: formData.get("fechasalida"),
				cantpersonas: parseInt(formData.get("cantpersonas"), 10) || 0,
				motivoviaje: formData.get("motivoviaje"),
			};

			try {
				const response = await fetch("https://dev.erandreex.com:3001/register", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				});

				if (response.ok) {
					messageContainer.textContent = "Reserva enviada con éxito ✅";
					messageContainer.classList.add("text-green-600");
				} else {
					throw new Error("Error en el envío de la reserva");
				}
			} catch (error) {
				console.error("Error:", error);
				messageContainer.textContent = "Hubo un problema al enviar la reserva ❌";
				messageContainer.classList.add("text-red-600");
			}

			messageContainer.style.display = "block"; // Mostrar el mensaje
		});
	});
}

setupContactForm();

document.addEventListener("astro:after-swap", () => {
	setupContactForm();
});
