function submitForm() {
  const email = document.getElementById('email').value;
  const nombre = document.getElementById('nombre').value;
  const asunto = document.getElementById('asunto').value;
  const mensaje = document.getElementById('mensaje').value;
  const privacidad = document.getElementById('privacidad').checked;

  if (!nombre || !email || !asunto || !mensaje || !privacidad) {
    alert('Por favor, completa todos los campos y acepta la política de privacidad.');
    return;
  }

  alert(`Nombre: ${nombre}\nEmail: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}\nPolítica de privacidad aceptada: ${privacidad}`);
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
});