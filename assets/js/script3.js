function verifyPassword() {
  const digit1 = document.getElementById("digit1").value;
  const digit2 = document.getElementById("digit2").value;
  const digit3 = document.getElementById("digit3").value;

  const password = digit1 + digit2 + digit3;
  const result = document.getElementById("result");

  if (password === "911") {
    result.textContent = "Password 1 correcto";
    result.style.color = "green";
  } else if (password === "714") {
    result.textContent = "Password 2 correcto";
    result.style.color = "green";
  } else {
    result.textContent = "Password incorrecto";
    result.style.color = "red";
  }
}
