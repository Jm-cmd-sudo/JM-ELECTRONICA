// Abrir modal al enviar formulario
document.getElementById("form-checkout").addEventListener("submit", function(e) {
  e.preventDefault();

  // Obtener datos del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;
  const telefono = document.getElementById("telefono").value;

  // Crear resumen del pedido
  const resumen = `
Nombre: ${nombre}
Email: ${email}
Dirección: ${direccion}
Teléfono: ${telefono}
`;

  // Mostrar en el modal
  document.getElementById("resumen-pedido").textContent = resumen;
  document.getElementById("modal-pedido").style.display = "block";
});

// Cerrar modal
document.getElementById("cerrar-modal").addEventListener("click", function() {
  document.getElementById("modal-pedido").style.display = "none";
});

// Confirmar y enviar por WhatsApp
document.getElementById("confirmar-whatsapp").addEventListener("click", function() {
  const mensaje = document.getElementById("resumen-pedido").textContent;

  // Número de WhatsApp de la tienda
  const numero = "543571536378";

  // Link a tu tienda
  const linkTienda = "https://pabloomaryorio-tech.github.io/PABLO-ELECTRONICA/";

  // Armar URL de WhatsApp
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje + "\n\nVer tienda: " + linkTienda)}`;

  // Abrir WhatsApp
  window.open(url, "_blank");
});
