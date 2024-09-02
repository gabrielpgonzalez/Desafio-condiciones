function calculateTotal() {
  const product1 = parseInt(document.getElementById("product1").value) || 0;
  const product2 = parseInt(document.getElementById("product2").value) || 0;
  const product3 = parseInt(document.getElementById("product3").value) || 0;

  const total = product1 + product2 + product3;
  const result = document.getElementById("result");

  if (total <= 10) {
    result.textContent = `Llevas un total de ${total} productos.`;
  } else {
    result.textContent = "Llevas demasiados stickers";
  }
}
